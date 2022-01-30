# Introduction
I and one other student completed this pair programming project as part of the General Assembly Software Engineering Immersive course. The course was split into four modules, and this was our submission for module two. During module two, we were introduced to our first front end framework: React. The finished project was deployed with Netlify, and can be found [here](https://compcoin.netlify.app/).

## Aim
We were given two days to to build a React application that consumes a public API and has several components. Me and my partner chose to use the Coinbase API to obtain cryptocurrency price data. The web app we created uses this data to calculate the exchange rate between trading pairs and display time series data to the user.

## Challenges
One of our biggest challenges was finding the right charting library to display the time series data. Originally we tried to use a library called ‘VictoryChart’. However, after several complications we made the decision to change to ‘React-Vis’. Apart from being a more pleasant library to work with, React-Vis has more modern-looking styling, so we were glad to have made this decision in the end.

## Operation
The app has three tabs: a landing page, a ‘Convert’ page and a ‘Detail’ page. 

### Convert
The Convert page allows users to enter an amount and choose the trading pair they want to convert between from two dropdown lists. When the user clicks the ‘Convert’ button, two GET requests are made to the API which return the current price for each of the currencies. One is divided by the other and the result is displayed to the user. Underneath is a chart which displays their exchange rate over time.

<p align="center">
  <img src="https://i.imgur.com/VP9er1z.png" height="450px">
  </p>

### Detail
A dropdown list on the navbar presents the users with a list of cryptocurrencies. Once the user selects one, GET requests are made to the API and the Detail page displays three time series charts - each displays the exchange rate of the selected currency against Bitcoin, Ethereum and Dogecoin respectively.

<p align="center">
  <img src="https://i.imgur.com/Kz2fLir.png" height="450px">
  </p>

## Technology and key take-aways
### React
This project taught me a great deal about React in particular. I learnt how to use hooks, how the component hierarchy works, how state is used and how props are passed and how the virtual DOM is used to render elements.

### Git
Seeing as this was my first collaborative project, I improved my ability to work with Git for version control. 

### Others
I also became more proficient in several other pieces of technology - Bulma (CSS framework), React-Vis (JavaScript charting library) and Axios (for making API calls).
