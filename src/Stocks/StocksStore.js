import { runInAction, extendObservable, action } from "mobx";

export default extendObservable(this, {
  stocks: [],
  loading: false,
  loadStocks: action(async () => {
    this.loading = true;
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    const json = await response.json();
    runInAction(() => {
      // enter to stocks array the data fron the api
      this.stocks = json.data;
      this.loading = false;
    });
  })
});