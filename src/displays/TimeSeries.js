import React from 'react'
import { XYPlot, XAxis, YAxis, LineSeries } from 'react-vis'
import Error from '../common/Error'
import Loading from '../common/Loading'
import { getTimeSeriesData } from '../lib/utils'


function TimeSeries({ inputData }) {
  const [chartData, setChartData] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !isError && !chartData.length

  React.useEffect(() => {
    setIsError(false)
    ;(async () => {
      try {
        setChartData(
          await getTimeSeriesData(inputData)
        )
      } catch (err) {
        setIsError(true)
      }
    })()
  }, [inputData])

  let graphConvertAmount = null
  if (inputData.amountForConversion && inputData.amountForConversion !== 1){
    graphConvertAmount = inputData.amountForConversion
  }

  return (

    <section className="section">
      <div className="columns is-centered">
        <div className="column is-three-quarters has-background-light">
          <h3 className="has-text-centered">{graphConvertAmount} {inputData.original} / {inputData.target}</h3>
          {isError && <Error errorDetailString="One of the currencies you have selected does not have time-series data."/>}
          {isLoading && <Loading />}
          {!!chartData.length && (
            <>
              <figure className="is-flex is-justify-content-center">
                {/* //todo: horizontal grid lines */}
                <XYPlot
                  yDomain={[chartData.minValue * 0.85, chartData.maxValue * 1.25]}
                  margin={{ bottom: 75, left: 75 }}
                  width={600}
                  height={300}
                >
                  <LineSeries
                    color="blue"
                    data={chartData.reverse()} />
                  <XAxis

                    tickFormat={x => ((new Date(x * 1000)).toLocaleDateString())}
                    tickLabelAngle={-60}
                  />
                  <YAxis
                  />
                </XYPlot>
              </figure>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default TimeSeries