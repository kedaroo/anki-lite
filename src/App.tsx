import { useState } from 'react'
import { getRandomWord } from './utils';
import { Kana, Word } from './types';
import { Button, Card, Segmented, Typography } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import './App.css'

const { Title } = Typography;

function App() {
  const [kana, setKana] = useState<Kana>('Hiragana');
  const [currentWord, setCurrentWord] = useState<Word>(() => getRandomWord(kana))
  const [showReading, setShowReading] = useState(false)
  const [showMeaning, setShowMeaning] = useState(false)

  return (
    <div className='con'>
      <header>
        <Title level={1}>Anki Lite</Title>
      </header>

      <main className='main-con'>
        <Segmented
          size={'large'}
          block
          options={['Hiragana', 'Katakana']}
          value={kana}
          onChange={(value) => {
            setKana(value as Kana)
            setCurrentWord(getRandomWord(value as Kana))
          }}
        />

        <Card
          actions={[
            <Button
              onClick={() => setShowReading(prevState => !prevState)}
              key='reading'
            >
              {showReading ? 'Hide' : 'Show'} Reading
            </Button>,
            <Button
              onClick={() => setShowMeaning(prevState => !prevState)}
              key='meaning'
            >
              {showMeaning ? 'Hide' : 'Show'} Meaning
            </Button>,
          ]}
        >
          <Title level={2}>{currentWord.word}</Title>
          {showReading && <Title level={4}>{currentWord.englishVersion}</Title>}
          {showMeaning && <Title level={4}>{currentWord.englishMeaning}</Title>}
        </Card>

        <Button
          className='button'
          type="primary"
          // shape="circle"
          icon={<RightCircleOutlined />}
          size={'large'}
          onClick={() => {
            setCurrentWord(getRandomWord(kana))
            setShowMeaning(false)
            setShowReading(false)
          }}
        >Next Word</Button>

      </main>
    </div>
  )
}

export default App
