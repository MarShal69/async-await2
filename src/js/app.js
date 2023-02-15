// import json from './parser';
// import read from './reader';
// import GameSaving from './gameSaving';


function read() {
  return new Promise((resolve, reject) => {
    // эмуляция чтения файла
    setTimeout(() => {
      // eslint-disable-next-line max-len
      const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
      return ((input) => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < input.length; i++) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      })(data);
    }, 1000);
  });
}


function json(data) {
  return new Promise((resolve, reject) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  });
}

class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}


// export default class GameSavingLoader {
    class GameSavingLoader {
 
   async load() {
    {
      try {
        const result1 = await read();
        // console.log(result1);
        const result2 = await json(result1);
        // console.log(result2);
        const saving = await JSON.parse(result2);
        const savingObject = new GameSaving(saving.id, saving.created, saving.userInfo);
        return savingObject;
      } catch (error) {
        throw error;
      }
    }
  }
}


const sav = new GameSavingLoader();
console.log(sav.load());

sav.load().then((saving) => {
  console.log(saving);
});
