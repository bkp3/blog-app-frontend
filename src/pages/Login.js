import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { doLogin } from "../auth";
import Base from "../components/Base";
import { loginUser } from "../services/user-service";

const Login = () => {


    const [loginDetail, setLoginDetail] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event, field) => {
        let actualValue = event.target.value
        setLoginDetail({
            ...loginDetail,
            [field]: actualValue
        })
    }

    const handleReset = () => {
        setLoginDetail({
            username: '',
            password: ''
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(loginDetail);

        //validation
        if (loginDetail.username.trim() == '' || loginDetail.password.trim() == '') {
            toast.error("field is required !!")
            return;
        }

        //submit the data to the server to generate token

        loginUser(loginDetail).then((data) => {
            console.log("User login :");
            console.log(data);

            //saved the data to localstorage
            doLogin(data, () => {
                console.log("login detail is saved to localstorage");
                //redirect to user dashboard page
            })


            toast.success("Login Success");
        }).catch((error) => {
            console.log(error);
            if (error.response.status == 400 || error.response.status == 404) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong on server !!");
            }

        })


    }

    return (
        <Base>
            <Row className="mt-4">
                <Col sm={{ size: 6, offset: 3 }}>
                    <Card outline color="dark">
                        <CardHeader>
                            <h3>Login Here !!</h3>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={handleFormSubmit}>
                                {/* Email Field */}
                                <FormGroup>
                                    <Label for="email">Enter Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="Enter here"
                                        value={loginDetail.username}
                                        onChange={(e) => handleChange(e, 'username')}
                                    />
                                </FormGroup>

                                {/* Password Field */}
                                <FormGroup>
                                    <Label for="password">Enter Password</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        placeholder="Enter here"
                                        value={loginDetail.password}
                                        onChange={(e) => handleChange(e, 'password')}
                                    />
                                </FormGroup>

                                <Container className="text-center">
                                    <Button color="dark">Login</Button>
                                    <Button onClick={handleReset} type="reset" color="secondary" className="ms-2">Reset</Button>
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