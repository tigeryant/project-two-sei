import React from 'react'
import { XYPlot, XAxis, YAxis, LineSeries } from 'react-vis'
import { getTimeSeriesData } from '../lib/utils'


function TimeSeries({ inputData }) {
  const [chartData, setChartData] = React.useState([])

  React.useEffect(() => {
    (async () => {
      setChartData(
        await getTimeSeriesData(inputData)
      )
    })()
  }, [inputData])

  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-three-quarters has-background-light">
          {chartData.length && (
            <>
              <h3 className="has-text-centered">{inputData.original}/{inputData.target}</h3>
              <figure className="is-flex is-justify-content-center">
                <XYPlot
                  margin={{ bottom: 75 }}
                  width={600}
                  height={300}
                >
                  <LineSeries
                    color="blue"
                    data={chartData.reverse()} />
                  <XAxis

                    tickFormat={x => ((new Date(x * 1000)).toLocaleDateString())}
                    tickLabelAngle={-90}
                  />
                  <YAxis />
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