// @ts-check

// 最初の犬の画像を取得する
import { useState } from "react";
import DogImage from "./DogImage";

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg"
  );

  const updateDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogUrl(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  return (
    <div className="content">
      <p>犬の画像を表示するサイトです。</p>
      <DogImage imageUrl={dogUrl} />
      <button onClick={updateDogImage} className="button">
        更新
      </button>
      <hr />
    </div>
  );
};

export default Description;
