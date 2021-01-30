import { observable, runInAction,  makeObservable } from 'mobx';
import CoinsService from './CoinsService';

class CoinsStore {
  coinsData = [];

  constructor() {
      makeObservable(this, {
          coinsData: observable,
      })
    this.coinsService = new CoinsService();
  }

  getCoins = async () => {
    try {
      let data = [];
      data = await this.coinsService.get();
      runInAction(() => {
        this.coinsData = data;
      });
    } catch (error) {
      runInAction(() => {
        console.log(error)
      });
    }
  }
};

export default new CoinsStore();
