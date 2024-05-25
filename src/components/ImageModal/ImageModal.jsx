import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      contentLabel="Image Modal"
    >
      {image && image.urls ? (
        <img src={image.urls.regular} alt={image.alt_description} className={css.modalImage} />
      ) : (
        <p>No image available</p>
      )}
    </Modal>
  );
};

export default ImageModal;
