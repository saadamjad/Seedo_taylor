import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="demo-icons">
                <CardBody className="all-icons">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      flexWrap: "wrap",
                      width: "100%"
                    }}
                    id="icons-wrapper"
                  >
                    <Card style={{ width: "30%" }}>
                      <div
                        style={{
                          height: 50,
                          width: "100%",
                          border: "1px solid transparent",
                          borderBottomColor: "lightgray",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex"
                        }}
                      >
                        <p style={{ fontWeight: "600", fontSize: 18 }}>Done</p>
                      </div>
                      <div style={{ height: 110, width: "90%" }}>
                        <img
                          style={{ width: "100%", height: "100%" }}
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div
                        style={{
                          height: 50,
                          width: " 100%",
                          border: "1px solid transparent",
                          borderTopColor: "lightgray",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <p style={{ fontSize: 18 }}>
                          {" "}
                          <span style={{ fontWeight: "600" }}> Price </span>:
                          3000 rs
                        </p>
                      </div>
                    </Card>
                    <Card style={{ width: "30%" }}>
                      <div
                        style={{
                          height: 50,
                          width: "100%",
                          border: "1px solid transparent",
                          borderBottomColor: "lightgray",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex"
                        }}
                      >
                        <p style={{ fontWeight: "600", fontSize: 18 }}>Done</p>
                      </div>
                      <div style={{ height: 110, width: "90%" }}>
                        <img
                          style={{ width: "100%", height: "100%" }}
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div
                        style={{
                          height: 50,
                          width: " 100%",
                          border: "1px solid transparent",
                          borderTopColor: "lightgray",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <p style={{ fontSize: 18 }}>
                          {" "}
                          <span style={{ fontWeight: "600" }}> Price </span>:
                          3000 rs
                        </p>
                      </div>
                    </Card>
                    <Card style={{ width: "30%" }}>
                      <div
                        style={{
                          height: 50,
                          width: "100%",
                          border: "1px solid transparent",
                          borderBottomColor: "lightgray",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex"
                        }}
                      >
                        <p style={{ fontWeight: "600", fontSize: 18 }}>Done</p>
                      </div>
                      <div style={{ height: 110, width: "90%" }}>
                        <img
                          style={{ width: "100%", height: "100%" }}
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                      <div
                        style={{
                          height: 50,
                          width: " 100%",
                          border: "1px solid transparent",
                          borderTopColor: "lightgray",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <p style={{ fontSize: 18 }}>
                          {" "}
                          <span style={{ fontWeight: "600" }}> Price </span>:
                          3000 rs
                        </p>
                      </div>
                    </Card>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Icons;
