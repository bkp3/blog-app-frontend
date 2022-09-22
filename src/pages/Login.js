import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";

const Login = () => {
    return (
        <Base>
            <Row className="mt-4">
                <Col sm={{ size: 6, offset: 3 }}>
                    <Card outline color="dark">
                        <CardHeader>
                            <h3>Login Here !!</h3>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                {/* Email Field */}
                                <FormGroup>
                                    <Label for="email">Enter Email</Label>
                                    <Input type="email" id="email" placeholder="Enter here" />
                                </FormGroup>

                                {/* Password Field */}
                                <FormGroup>
                                    <Label for="password">Enter Password</Label>
                                    <Input type="password" id="password" placeholder="Enter here" />
                                </FormGroup>

                                <Container className="text-center">
                                    <Button color="dark">Login</Button>
                                    <Button type="reset" color="secondary" className="ms-2">Reset</Button>
                                </Container>
                            </Form>
                        </CardBody>

                    </Card>

                </Col>


            </Row>
        </Base>
    );
};

export default Login;