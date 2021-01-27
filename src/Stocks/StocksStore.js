import { runInAction, extendObservable, action } from "mobx";

export default extendObservable(this, {
  stocks: [],
  loading: false,
  loadStocks: action(async () => {
    this.loading = true;
    const response = await fetch("http://api.marketstack.com/v1/tickers?access_key=a8c3276959a85f89f26882a88ece22e6");
    const json = await response.json();
    runInAction(() => {
      // enter to stocks array the data fron the api
      this.stocks = json.results;
      this.loading = false;
    });
  })
});