import css from "./ImageCard.module.css"

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={css.imageCard}>
      <img onClick={onClick} src={image.urls.thumb} alt={image.alt_description} className={css.imageThumb} />
    </div>
  );
};

export default ImageCard;