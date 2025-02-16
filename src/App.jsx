// DO NOT DELETE

import './App.css'
import { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")
  const updateDogImage = () => {
    setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg')
  }
  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl}></img>
      <p>
        <button onClick={updateDogImage}>更新</button>      
      </p>
    </div>
    
  )
}
