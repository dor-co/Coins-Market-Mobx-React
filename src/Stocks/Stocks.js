import React from "react";
import { observer } from "mobx-react";

export default observer(
  class Stocks extends React.Component {
    componentWillMount() {
      this.props.store.loadStocks();
    }

    data = ({ name }) =>
      <div key={name}>
        <h1>{name}</h1>
      </div>

    render() {
      if (this.props.store.loading) {
        return <div>loading...</div>;
      }

      return (
        <div>
           {/* onClick load the stocks */}
          <button onClick={this.props.store.loadStocks}>load stocks</button>
          {/* stocks is the array that get the data from the api, and should display the companys' names */}
          {this.props.store.stocks.map(this.data)}
        </div>
      );
    }
  }
);