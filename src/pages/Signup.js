import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { signUp } from "../services/user-service";
import { toast } from 'react-toastify';

const Signup = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        about: ''
    })

    const [error, setError] = useState({
        errors: {},
        isError: false
    })



    useEffect(() => {
        console.log(data);
    }, [data])

    //handle change
    const handleChange = (event, property) => {

        setData({ ...data, [property]: event.target.value })
    }

    //resetting the form
    const resetData = () => {
        setData({
            name: '',
            email: '',
            password: '',
            about: ''
        })
    }
    //submitting the form
    const submitForm = (event) => {
        event.preventDefault()

        console.log(data);

        //data validate

        //call server api for sending the data

        signUp(data).then((resp) => {
            console.log(resp);
            console.log("success log");
            toast.success("User is Successfully Registered !!")
            setData({
                name: '',
                email: '',
                password: '',
                about: ''
            })
        }).catch((error) => {
            console.log(error);
            console.log("error log");
            toast.error("Something went wrong !!")
        })

    }

    return (
        <Base>
            <Container>
                <Row className="mt-4">
                    {JSON.stringify(data)}
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card outline color="dark">
                            <CardHeader>
                                <h3>Fill Information to Register !!</h3>
                            </CardHeader>
                            <CardBody>
                                {/* creating a form */}
                                <Form onSubmit={submitForm}>

                                    {/* Name field */}
                                    <FormGroup>
                                        <Label for="name">Enter Name</Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter here"
                                            id="name"
                                            onChange={(e) => handleChange(e, 'name')}
                                            value={data.name}
                                        />
                                    </FormGroup>

                                    {/* email field */}
                                    <FormGroup>
                                        <Label for="email">Enter Email</Label>
                                        <Input
                                            type="email"
                                            placeholder="Enter here"
                                            id="email"
                                            onChange={(e) => handleChange(e, 'email')}
                                            value={data.email} />
                                    </FormGroup>

                                    {/* password field */}
                                    <FormGroup>
                                        <Label for="password">Enter Password</Label>
                                        <Input
                                            type="password"
                                            placeholder="Enter here"
                                            id="password"
                                            onChange={(e) => handleChange(e, 'password')}
                                            value={data.password} />
                                    </FormGroup>

                                    {/* about field */}
                                    <FormGroup>
                                        <Label for="about">Enter About</Label>
                                        <Input
                                            type="textarea"
                                            placeholder="Enter here"
                                            id="about"
                                            onChange={(e) => handleChange(e, 'about')}
                                            value={data.about} />
                                    </FormGroup>

                                    {/* button submit */}
                                    <Container className="text-center">
                                        <Button color="dark">Register</Button>
                                        <Button onClick={resetData} color="secondary" type="reset" className="ms-2">Reset</Button>
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