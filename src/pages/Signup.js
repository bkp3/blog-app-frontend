import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";

const Signup = () => {
    return (
        <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card outline color="dark">
                            <CardHeader>
                                <h3>Fill Information to Register !!</h3>
                            </CardHeader>
                            <CardBody>
                                {/* creating a form */}
                                <Form>

                                    {/* Name field */}
                                    <FormGroup>
                                        <Label for="name">Enter Name</Label>
                                        <Input type="text" placeholder="Enter here" id="name" />
                                    </FormGroup>

                                    {/* email field */}
                                    <FormGroup>
                                        <Label for="email">Enter Email</Label>
                                        <Input type="email" placeholder="Enter here" id="email" />
                                    </FormGroup>

                                    {/* password field */}
                                    <FormGroup>
                                        <Label for="password">Enter Password</Label>
                                        <Input type="password" placeholder="Enter here" id="password" />
                                    </FormGroup>

                                    {/* about field */}
                                    <FormGroup>
                                        <Label for="about">Enter About</Label>
                                        <Input type="textarea" placeholder="Enter here" id="about" />
                                    </FormGroup>

                                    {/* button submit */}
                                    <Container className="text-center">
                                        <Button color="dark">Register</Button>
                                        <Button color="secondary" type="reset" className="ms-2">Reset</Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

            </Container>
        </Base>
    );
};

export default Signup;