import React from 'react'
import { XYPlot, XAxis, YAxis, LineSeries } from 'react-vis'
import Error from '../common/Error'
import Loading from '../common/Loading'
import { getTimeSeriesData } from '../lib/utils'

function graphHeight (width) {
  return width * 0.3
}


function TimeSeries({ inputData }) {
  const [chartData, setChartData] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !isError && !chartData.length

  const defaultGraphWidth = 600
  const graphWidthPortionOfContainer = 1.00 // graph has padding styled in, but may need to resize for mobile
  const [graphDimensions, setGraphDimensions] = React.useState({
    width: defaultGraphWidth,
    height: graphHeight(defaultGraphWidth),
  })
  const graphContainerRef = React.useRef(null)
  
  React.useEffect(() => {
    function handleResize() {
      // console.log(graphContainerRef)
      console.log('width', graphContainerRef.current ? graphContainerRef.current.offsetWidth : 0)
      const newGraphWidth = graphContainerRef.current ? (
        graphContainerRef.current.offsetWidth * graphWidthPortionOfContainer
      ) : 600
      setGraphDimensions({
        width: newGraphWidth,
        height: graphHeight(newGraphWidth),
      })
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  },[])

  React.useEffect(() => {
    setIsError(false)
    ;(async () => {
      try {
        setChartData(
          await getTimeSeriesData(inputData)
        )
      } catch (err) {
        setChartData([])
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
          <h3 ref={graphContainerRef} className="has-text-centered">{graphConvertAmount} {inputData.original} / {inputData.target}</h3>
          {isError && <Error errorDetailString="One of the currencies you have selected does not have time-series data."/>}
          {isLoading && <Loading />}
          {!isError && !!chartData.length && (
            <>
              <figure className="is-flex is-justify-content-center">
                {/* //todo: horizontal grid lines */}
                <XYPlot
                  yDomain={[chartData.minValue * 0.85, chartData.maxValue * 1.25]}
                  margin={{ bottom: 75, left: 75 }}
                  width={graphDimensions.width}
                  height={graphDimensions.height}
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