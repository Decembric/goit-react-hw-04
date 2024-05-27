
import ImageCard from '../ImageCard/ImageCard';
import ImageModal from '../ImageModal/ImageModal';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, selectedImage, modalIsOpen, openModal, closeModal }) => {


  return (
    <div>
      {images.length === 0 ? (
        <p className={css.noImages}>No images found. Please try an another search.</p>
      ) : (
        <ul className={css.imageGallery}>
          {images.map((image) => (
            <li key={image.id} className={css.imageItem}>
              <ImageCard image={image} onClick={() => openModal(image)} />
            </li>
          ))}
        </ul>
      )}
      <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} image={selectedImage} />
    </div>
  );
};

export default ImageGallery;
