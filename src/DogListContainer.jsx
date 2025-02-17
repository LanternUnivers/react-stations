// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breedList = Object.keys(data.message); // 2階層目以降は無視
        // @ts-ignore
        setBreeds(breedList);
      } catch (error) {
        console.error('犬種一覧の取得に失敗しました:', error);
      }
    };

    fetchBreeds();
  }, []);

  return(
    <div>
      <h1>BreedsList</h1>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onSelectBreed={setSelectedBreed} />
      <p>選択された犬種: {selectedBreed}</p>
    </div>
  );
}

export default DogListContainer
