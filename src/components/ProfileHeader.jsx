import { Row, Col } from "react-bootstrap";

function ProfileHeader() {
  return (
    <Row>
      <Col md={3}>Picture</Col>
      <Col md={9}>Des</Col>
    </Row>
  )
}

export default ProfileHeader