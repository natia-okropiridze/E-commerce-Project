import Button from "react-bootstrap/Button";
function SidebarButton(props) {
  const { setToggle } = props;
  return (
    <>
      <Button onClick={() => setToggle(true)}>
        <i className="bi bi-text-center"></i>
      </Button>
    </>
  );
}
export default SidebarButton;
