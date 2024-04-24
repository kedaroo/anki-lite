import { useState } from 'react'
import { getRandomWord } from './utils';
import { Kana, Word } from './types';
import './App.css'
import { Segmented } from 'antd';

function App() {
  const [kana, setKana] = useState<Kana>('Hiragana');
  const currentWord = useState<Word>(() => getRandomWord(kana))

  return (
    <>
      <Segmented
        block 
        options={['Hiragana', 'Katakana']} 
        value={kana}
        onChange={(value) => setKana(value as Kana)}
      />
    </>
  )
}

export default App
