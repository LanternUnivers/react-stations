import { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";
import DogImage from "./DogImage";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("bouvier");
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
      } catch (error) {
        console.error("Error fetching breeds:", error);
      }
    };

    fetchBreeds();
  }, []);

  const getDogImages = async () => {
    console.log("fetch called!");
    if (!selectedBreed) return;

    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`);
      const data = await response.json();
      console.log(data);
      setDogImages(data.message); // 画像のリストを更新
    } catch (error) {
      console.error("Error fetching dog images:", error);
    }
  };

  return (
    <div className="Breedsimages">
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onSelectBreed={setSelectedBreed} />
      <button onClick={getDogImages} className="button">表示</button>

      <div className="dog-images-container">
        {dogImages.map((url, index) => (
          <DogImage key={index} imageUrl={url} />
        ))}
      </div>
    </div>
  );
};

export default DogListContainer;

