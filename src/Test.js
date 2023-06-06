import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
  
export default function Test() {
  return (
    <div style={{ display: 'block', width: "100%", padding: 30 }}>
      <h4>React-Bootstrap Col Component</h4>
      <Row>
        <Col lg={6} style={{
          backgroundColor: 'red',
        }}>
          Sample First Col
          Sample First Col
          Sample First Col
          Sample First Col
          Sample First Col
          Sample First Col
          Sample First Col
          Sample First Col
      </Col>
        <Col lg={5} style={{
          backgroundColor: 'yellow',
        }}>
          Sample Second Col
      </Col>

      </Row>
    </div>
  );
}