/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { GetProduct } from "Store/actions/userAuth";

class Icons extends React.Component {
  componentWillMount() {
    this.props.GetProduct();
  }

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
                    {this.props.products &&
                      this.props.products.map((val, index) => (
                        <Card key={index} style={{ width: "25%",display: "flex", flexDirection: "column" ,justifyContent: "center", alignItems: "center" }}>
                          <div
                            style={{
                              height: 50,
                              width: "100%",
                            
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <p style={{ fontWeight: "600", fontSize: 18 }}>
                              {val.productName}
                            </p>
                          </div>
                          <div style={{ height: 110, width: "90%" }}>
                            <img
                              style={{ width: "100%", height: "100%" }}
                              src={val.allImages[0].path}
                              alt=""
                            />
                          </div>
                          <div
                            style={{
                              height: 50,
                              width: " 100%",
                             
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center"
                            }}
                          >
                            <p style={{ fontSize: 18 }}>
                              <span style={{ fontWeight: "600" }}> Price </span>
                              : {val.price} rs
                            </p>
                          </div>
                        </Card>
                      ))}
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

const mapDispatchToProps = dispatch => ({
  GetProduct: () => dispatch(GetProduct())
});

const mapActionToProps = state => ({
  products: state.Login.products
});

export default connect(mapActionToProps, mapDispatchToProps)(Icons);
