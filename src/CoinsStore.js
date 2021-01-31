import { observable, runInAction, makeObservable } from 'mobx';
import CoinsService from './CoinsService';

class CoinsStore {
  coinsData = [];

  constructor() {
    makeObservable(this, {
      coinsData: observable,
    })
    this.coinsService = new CoinsService();
  }

  getCoins = async () => { //enter to the array coinsData the data from coinsService.get(), coinsData is observable so CoinList can use this data because CoinList in observer to CoinsStore
    try {
      let data = [];
      data = await this.coinsService.get(); //get the data from CoinsService
      runInAction(() => {
        this.coinsData = data; //enter the data from data array to coinsData array
      });
    } catch (error) {
      runInAction(() => {
        console.log(error)
      });
    }
  }
};

export default new CoinsStore();
