import React from 'react'
import { VictoryLine, VictoryChart } from 'victory'
import { getTimeSeriesData } from '../lib/utils'

function TimeSeries() {
  const [chartData, setChartData] = React.useState([])

  React.useEffect(() => {
    (async () => {
      setChartData(
        await getTimeSeriesData()
      )
    })()
  }, [])

  console.log('chartData:', chartData)
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-three-quarters has-background-light">
          <VictoryChart>
            <VictoryLine
              style={{
                // data: { stroke: "#c43a31" },
                parent: { border: '1px solid #ccc' },
              }}
              data={chartData}
            />
          </VictoryChart>
        </div>
      </div>
    </section>
  )
}

export default TimeSeries