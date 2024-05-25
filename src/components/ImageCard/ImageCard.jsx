import css from "./ImageCard.module.css"

const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={onClick} className={css.imageCard}>
      <img src={image.urls.thumb} alt={image.alt_description} className={css.imageThumb} />
    </div>
  );
};

export default ImageCard;