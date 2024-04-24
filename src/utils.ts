import { hiraganaWords, katakanaWords } from "./assets/words";
import { Kana } from "./types";

export const getRandomElement = <T>(arr: T[]): T | undefined => {
  if (arr.length === 0) {
    return undefined;
  }

  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
};

export const getRandomWord = (kana: Kana) => {
  const wordList = kana === 'hiragana' ? hiraganaWords : katakanaWords;

  const randomWord = getRandomElement(wordList)!

  return {
    word: randomWord[0],
    englishVersion: randomWord[1],
    englishMeaning: randomWord[2]
  }
}
