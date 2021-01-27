import React, { Component } from "react";
import Stocks from "./Stocks/Stocks";
import StocksStore from "./Stocks/StocksStore";

class App extends Component {
  render() {
    /*put the store in Stocks component and display Stocks component to screen*/
    return <Stocks store={StocksStore} />;
  }
}

export default App;