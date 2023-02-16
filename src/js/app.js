import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
// class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  async load() {
    // eslint-disable-next-line no-lone-blocks
    {
      const result1 = await read();
      // console.log(result1);
      const result2 = await json(result1);
      // console.log(result2);
      const saving = await JSON.parse(result2);
      return new GameSaving(saving.id, saving.created, saving.userInfo);
    }
  }
}


// const sav = new GameSavingLoader();
// console.log(sav.load());

// sav.load().then((saving) => {
//   console.log(saving);
// });
