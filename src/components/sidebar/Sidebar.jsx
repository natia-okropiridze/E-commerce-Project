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
        <h3 className="fs-2 text-warning text-bold">Get in Touch</h3>
        <button
          onClick={() => setToggle(false)}
          className="text-bg-warning p-2"
        >
          <i className="bi bi-x-square text-secondary"></i>
        </button>
      </div>
      <p className="text-secondary fs-6 pt-3">
        We are always ready to provide you with fresh organic products for your
        home or office. Contact us to find out how we can help you.
      </p>
      <h4 className="pt-3 pb-2 text-secondary text-warning">Facebook</h4>
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
        <a
          className="text-decoration-none"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <i className="bi bi-facebook p-2 text-warning"></i>
          <span className="link-label text-secondary">Facebook</span>
        </a>
        <a
          className="text-decoration-none"
          href="https://instagram.com"
          target="_blank"
        >
          <i className="bi bi-instagram p-2 text-warning"></i>
          <span className="link-label text-secondary">Instagram</span>
        </a>
        <a
          className="text-decoration-none"
          href="https://pinterest.com"
          target="_blank"
        >
          <i className="bi bi-pinterest p-2 text-warning"></i>
          <span className="link-label text-secondary">Pinterest</span>
        </a>
        <a
          className="text-decoration-none"
          href="https://twitter.com"
          target="_blank"
        >
          <i className="bi bi-twitter p-2 text-warning"></i>
          <span className="link-label text-secondary">Twitter</span>
        </a>
      </div>
    </div>
  );
}
export default Sidebar;
