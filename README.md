## Overview
I worked with [DBBrowne](https://github.com/DBBrowne) to complete this pair programming project as part of the General Assembly Software Engineering Immersive course. The course was split into four modules, and this was our submission for module two. During module two, we were introduced to our first front end framework: React. The finished project was deployed with Netlify, and can be found [here](https://compcoin.netlify.app/).

## Brief
We were tasked with building a React application that consumes a public API and has multiple components.

## Timeframe
We were given two days to complete this project.

## Getting started
To run this project locally, make sure you have Node installed on your machine. Then, from the project directory, install the dependencies:

`$ npm i`

Use the following command to run the project in a development environment:

`$ npm run dev`

## Technologies used
* React
* Axios
* React-Vis
* Bulma
* dayjs

## Approach
As my partner and I are both broadly interested in cryptocurrencies, we decided to use the Coinbase API to obtain cryptocurrency price data. The web app we created uses this data to calculate the exchange rate between trading pairs and display time series data to the user.

## Planning
During the planning phase, we used the Miro whiteboard collaboration tool to draw a wireframe for each page of the application. (insert wireframe screenshots here)

* We decided on nine coins to use as trading pairs:
* Bitcoin
* Ethereum
* Dogecoin
* Solana
* Cardano
* XRP
* Polkadot
* Wrapped Luna
* Avalanche

We also decided on two key functionalities for the app:
* Calculate and display the exchange rate between any two of the nine listed coins
* Display time series data showing the historical exchange rate between any two coins

My partner and I worked well as a team throughout the duration of the project. We approached some tasks by editing a single version of the code simultaneously using the live share extension on VScode. We held Zoom calls throughout both of the days so we could discuss ideas, think through problems, ask for a second opinion and notify each other of any issues. This approach worked well for us and allowed us to function as a productive and efficient team throughout.

## Build
The first challenge was to obtain the exchange rate between two given coins. The coins are denoted ‘original’ and ‘target’. To find the exchange rate, we first obtain the price of each coin in USD terms, and then divide one by the other. See the snippet below:
```js
export async function getExchangeRate({ original, target }) {
 // get conversion to USD for original and target
 const [originalUSDConversion, targetUSDConversion] = await Promise.all(
   [original, target].map(ticker => (
     getCurrencyData(ticker).then(res => parseFloat(res.data.data.amount))
   ))
 )

 // calculate direct conversion rate
 const finalExchangeRate = originalUSDConversion / targetUSDConversion

 // returning both currencies together with their exchange rate
 return (
   {
     original: original,
     target: target,
     exchangeRate: finalExchangeRate,
   }
 )
}
```

In order to obtain time series data, we used the following function:
```js
export async function getTimeSeriesData(inputData, startDaysAgo = 30) {
 const formatString = 'YYYY-MM-DDTHH:mm:ss'
 const nowDate = dayjs().set('hour', 12).set('minute', 0).set('second', 0)
 const nowString = nowDate.format(formatString)
 const startDateString = nowDate.add(-startDaysAgo, 'day').format(formatString)
 const seriesOriginal = await getTimeSeries(inputData.original, startDateString, nowString)
 const seriesTarget = await getTimeSeries(inputData.target, startDateString, nowString)
 let maxValue = -Infinity
 let minValue = Infinity
 let valueMultiplier = inputData.amountForConversion

 if (!valueMultiplier){
   valueMultiplier = 1
 }

 const returnArray = seriesOriginal.data.map((datum, index) => {
   let yValue = 0
   if (seriesTarget.data[index]) {
     yValue = (((parseFloat(datum[4]) / parseFloat(seriesTarget.data[index][4])) * valueMultiplier).toPrecision(4))
   }
   if (yValue > maxValue) {
     maxValue = yValue
   }
   if (yValue < minValue) {
     minValue = yValue
   }
   return {
     x: datum[0],
     y: yValue,
   }
 })

 returnArray.maxValue = maxValue
 returnArray.minValue = minValue
 return returnArray
}
```

The next challenge was to display the time series data. One chart is displayed on the ‘Convert’ page - it shows the price data of two given coins. Three more charts are displayed on the ‘Coin Detail’ page. Below is a snippet that shows this process:
```js
function TimeSeries({ inputData }){
  // ...
  const graphContainerRef = React.useRef(null)

  React.useEffect(() => {
    function handleResize() {
      const newGraphWidth = graphContainerRef.current ? (
        graphContainerRef.current.offsetWidth * graphWidthPortionOfContainer
      ) : 600 // default size for mount
      setGraphDimensions({
        width: newGraphWidth,
        height: graphHeight(newGraphWidth),
      })
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  },[])

  // ...
  return(
    <h3 ref={graphContainerRef} className="has-text-centered">
    /...
    <XYPlot
      //...
      width={graphDimensions.width}
      height={graphDimensions.height}
    >
      /...
    </XYPlot>
  )
}
```

The app has three pages: the landing page, the ‘Convert’ page, and the ‘Coin Detail’ page.

### Landing
<p align="center">
  <img src="https://i.imgur.com/11qqtTn.png" height="400px"></img>
</p>
  
### Convert
The Convert page allows users to enter an amount and choose the trading pair they want to convert from two dropdown lists. When the user clicks the ‘Convert’ button, the request is made to the API which returns the current price for each of the currencies. One is divided by the other and the result is displayed to the user. Below the result is a chart which displays their exchange rate over time.

<p align="center">
  <img src="https://i.imgur.com/VP9er1z.png" height="400px"></img>
</p>

### Coin Detail
A dropdown list on the navbar presents the users with a list of cryptocurrencies. Once the user selects one, the Detail page displays three time series charts - each displays the exchange rate of the selected currency against Bitcoin, Ethereum and Dogecoin respectively.

<p align="center">
  <img src="https://i.imgur.com/Kz2fLir.png" height="400px"></img>
</p>


## Known bugs
One bug that we are currently aware of is a Y-axis scaling issue on the price charts. Here is an example, which shows the data exceeding the bounds of the chart.

<p align="center">
  <img src="https://i.imgur.com/tcLKsfd.png" height="300px"></img>
</p>

## Challenges
The biggest challenge we had during the project was using charting libraries. Initially, we started working with a charting library called ‘Victory’. Unfortunately it lacked the formatting tools for the axes and labels that we needed. We then changed to ‘React-Vis’ which had the right functionality for us.

## Wins
A big win for us was when we managed to display the time series data to the screen correctly using React-Vis.

## Key learnings
### React
This project taught me a great deal about React in particular. I learnt how to use hooks, how the component hierarchy works, how state is used and how props are passed and how the virtual DOM is used to render elements.

### APIs
I learnt how to use Axios to make calls to an external API and how to format the response of an API call.

### Git
As this was our first collaborative project, I learnt how to use Git for version control between two developers. Specifically, I learnt more about merging, stashing and conflict resolution.
