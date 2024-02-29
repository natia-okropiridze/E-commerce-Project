import Card from "react-bootstrap/Card";
import styles from "./GalleryCard.module.css";
const { gallery_inner } = styles;
function GalleryCard(props) {
  const { gallery } = props;
  const { id, title, image } = gallery;
  return (
    <Card className="border-0 py-2">
      <img src={["images", "galleries", image].join("/")} />
      <div className={[gallery_inner].join(" ")}>
        <span>
          <i className="bi bi-search-heart"></i>
        </span>
        <h3>{title}</h3>
      </div>
    </Card>
  );
}
export default GalleryCard;
