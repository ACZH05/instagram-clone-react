import { useContext } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { ProfileContext } from "../App";

function ProfileHeader() {
    const { image } = useContext(ProfileContext)
  return (
    <Row className="p-5">
      <Col md={3} className="d-flex justify-content-center align-items-center">
        <Image src={image} style={{ height: "150px"}} roundedCircle />
      </Col>
      <Col md={9}>Des</Col>
    </Row>
  )
}

export default ProfileHeader    