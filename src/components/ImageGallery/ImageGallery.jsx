

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.length > 0 && images.map(({ id, urls, alt_description }) => {
        return <li key={id}>
          <div>
            <img src={urls.small} alt={alt_description} />
          </div>
        </li>
      })}
    </ul>
  )
}
export default ImageGallery