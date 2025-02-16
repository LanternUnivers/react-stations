// DO NOT DELETE

import './App.css'
import { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")

  const updateDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json()
      setDogUrl(data.message)
    } catch (error) {
      console.error('Error fetching dog image:', error)
    }
  }
  
  return (
    <div className="container">
      <header className="header">
        <h1>Dog アプリ</h1>
      </header>
      <div className="content">
        <p>犬の画像を表示するサイトです。</p>
        <img src={dogUrl} alt="Dog" className="dog-image" />
      </div>
      <button onClick={updateDogImage} className="button">更新</button>
      <hr />
    </div>
  )
}
