// @ts-check

import { useEffect, useState } from "react"

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breedList = Object.keys(data.message); // 2階層目以降は無視
        setBreeds(breedList);
      } catch (error) {
        console.error('犬種一覧の取得に失敗しました:', error);
      }
    };

    fetchBreeds();
  }, []);
  return <></>
}

export default DogListContainer
