import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

function ContactPage() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear previous error message
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubscribed(true);
        setIsSubmitting(false);
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }, 2000);

      setTimeout(() => {
        setIsSubscribed(false);
      }, 4000);
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!user.firstName.trim()) {
      errors = { ...errors, firstName: "First name is required" };
      formIsValid = false;
    }

    if (!user.lastName.trim()) {
      errors = { ...errors, lastName: "Last name is required" };
      formIsValid = false;
    }

    if (!user.email.trim()) {
      errors = { ...errors, email: "Email is required" };
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors = { ...errors, email: "Email is invalid" };
      formIsValid = false;
    }

    if (!user.message.trim()) {
      errors = { ...errors, message: "Message is required" };
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <Container fluid className="py-5 bg-secondary opacity-75">
      <Container>
        <Row>
          <Col sm={5}>
            {isSubscribed ? (
              <Alert variant="success">
                Thanks for sending your message!
                <i className="bi bi-envelope ps-2"></i>
              </Alert>
            ) : (
              <div>
                <h3>Contact Form</h3>
                <Form className="py-4" onSubmit={handleFormSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={user.firstName}
                      onChange={changeHandler}
                      aria-describedby="firstNameHelp"
                    />
                    {errors.firstName ? (
                      <Form.Text id="firstNameHelp" className="text-danger">
                        {errors.firstName}
                      </Form.Text>
                    ) : (
                      user.firstName && (
                        <Form.Text id="firstNameHelp" className="text-warning">
                          First Name is Done ✅
                        </Form.Text>
                      )
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={user.lastName}
                      onChange={changeHandler}
                      aria-describedby="lastNameHelp"
                    />
                    {errors.lastName ? (
                      <Form.Text id="lastNameHelp" className="text-danger">
                        {errors.firstName}
                      </Form.Text>
                    ) : (
                      user.lastName && (
                        <Form.Text id="lastNameHelp" className="text-warning">
                          Last Name is Done ✅
                        </Form.Text>
                      )
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      value={user.email}
                      onChange={changeHandler}
                      aria-describedby="emailHelp"
                    />
                    {errors.email ? (
                      <Form.Text id="emailHelp" className="text-danger">
                        {errors.email}
                      </Form.Text>
                    ) : (
                      user.email && (
                        <Form.Text id="emailHelp" className="text-warning">
                          Email is Done ✅
                        </Form.Text>
                      )
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Message"
                      name="message"
                      value={user.message}
                      onChange={changeHandler}
                      aria-describedby="messageHelp"
                    />

                    {errors.message && (
                      <Form.Text id="messageHelp" className="text-danger">
                        {errors.message}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="primary"
                    className="bg-success border-0 px-4 py-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />{" "}
                        Sending...
                      </>
                    ) : (
                      "SEND MESSAGE"
                    )}
                  </Button>
                </Form>
              </div>
            )}
          </Col>
          <Col sm={7}>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.3611558715775!2d44.95977278505982!3d41.669543004370304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440fd4ec5da8c7%3A0xccb68c40c8eecbc1!2z4YOX4YOR4YOY4YOa4YOY4YOh4YOY4YOhIOGDoeGDkOGDlOGDoOGDl-GDkOGDqOGDneGDoOGDmOGDoeGDnSDhg5Dhg5Thg6Dhg53hg57hg53hg6Dhg6Lhg5g!5e0!3m2!1ska!2sge!4v1708184887825!5m2!1ska!2sge"
                title="Google Maps"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactPage;
