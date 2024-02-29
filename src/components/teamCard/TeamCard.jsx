import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import styles from "./TeamCard.module.css";
const { team_card, team_inner, team_image, team_title, team_position } = styles;
function TeamCard(props) {
  const { team } = props;
  const { id, image, fullName, position } = team;
  return (
    <Card className={[team_card, "rounded-0", "border-0"].join(" ")}>
      <Image
        className={[team_image].join(" ")}
        src={["images", "teams", image].join("/")}
      />
      <div className={[team_inner].join(" ")}>
        <h3 className={[team_title].join(" ")}>{fullName}</h3>
        <span className={[team_position].join(" ")}>{position}</span>
      </div>
    </Card>
  );
}
export default TeamCard;
