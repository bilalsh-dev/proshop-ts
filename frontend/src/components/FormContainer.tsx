import { Col, Container, Row } from "@/lib/react-bootstrap";

type FormContainerProps = {
  children: JSX.Element[] | JSX.Element;
};
const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
