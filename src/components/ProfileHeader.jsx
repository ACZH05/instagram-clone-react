import { Row, Col, Image } from "react-bootstrap";

function ProfileHeader() {
  return (
    <Row className="p-5">
      <Col md={3} className="d-flex justify-content-center align-items-center">
        <Image src="https://sig1.co/logo-1" style={{ height: "150px"}} roundedCircle />
      </Col>
      <Col md={9}>Des</Col>
    </Row>
  )
}

export default ProfileHeader    