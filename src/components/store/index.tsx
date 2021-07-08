import { makeAutoObservable } from "mobx";

interface wordsMatched {
    firstLetterMAtch: number;
    allLettermatch: number;
    lastLetterMatch:number;
    doubleLetterMatch:number;
}

class Dictionary {
  toMatch = "";
  isShownRes = false;
  wordsMatched:wordsMatched = {
    firstLetterMAtch: 0,
    allLettermatch: 0,
    lastLetterMatch: 0,
    doubleLetterMatch: 0,
  };
  constructor() {
    makeAutoObservable(this);
  }
  setMatch(e: string) {
    this.toMatch = e;
  }
  setWordsMatched(e: wordsMatched) {
    console.log(e);
    this.wordsMatched = e;
  }
  setShownRes(e: boolean) {
    this.isShownRes = e;
  }
}
export default new Dictionary();
