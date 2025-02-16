// @ts-check

/**
 * @param {{ imageUrl: string }} props
 */
export const DogImage = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Dog" className="dog-image" />
}

export default DogImage
