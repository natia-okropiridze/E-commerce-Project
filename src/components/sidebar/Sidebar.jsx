import styles from "./Sidebar.module.css";
import sidebarPicture from "/images/sidebar.jpg";
const { sidebar_container, sidebar_container_show } = styles;
function Sidebar(props) {
  const { toggleSidebar, setToggle } = props;
  const classes = [sidebar_container];
  if (toggleSidebar) classes.push(sidebar_container_show);
  return (
    <div className={classes.join(" ")}>
      <div className="d-flex justify-content-between pt-3">
        <h3 className="fs-2 text-secondary text-bold">Get in Touch</h3>
        <button
          onClick={() => setToggle(false)}
          className="text-bg-success p-2"
        >
          <i className="bi bi-x-square"></i>
        </button>
      </div>
      <p className="text-secondary fs-6 pt-3">
        We are always ready to provide you with fresh organic products for your
        home or office. Contact us to find out how we can help you.
      </p>
      <h4 className="pt-3 pb-2 text-success">Facebook</h4>
      <img src={sidebarPicture} />
      <div className="d-flex gap-3 pt-3">
        <span>
          <i className="bi bi-telephone text-warning"></i>
        </span>
        <span className="text-secondary">+1 323-913-4688</span>
      </div>
      <div className="d-flex gap-3 py-3">
        <span>
          <i className="bi bi-geo-alt text-warning"></i>
        </span>
        <span className="text-secondary">
          4730 Crystal Springs Dr, Los Angeles, CA 90027
        </span>
      </div>
      <div className="d-flex gap-3">
        <span>
          <i className="bi bi-envelope text-warning"></i>
        </span>
        <span className="text-secondary">mail@demolink.org</span>
      </div>
      <div className="d-flex gap-4 pt-5">
        <span className="text-secondary">
          <i className="bi bi-facebook"></i>
        </span>
        <span className="text-secondary">
          <i className="bi bi-twitter"></i>
        </span>
        <span className="text-secondary">
          <i className="bi bi-google"></i>
        </span>
        <span className="text-secondary">
          <i className="bi bi-instagram"></i>
        </span>
        <span className="text-secondary">
          <i className="bi bi-pinterest"></i>
        </span>
      </div>
    </div>
  );
}
export default Sidebar;
