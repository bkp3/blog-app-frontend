import { useEffect } from "react";
import { Button, Card, CardBody, Container, Form, Input, Label } from "reactstrap";
import { loadAllCategories } from "../services/category-service";

const AddPost = () => {

    useEffect(() => {
        loadAllCategories().then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <div className="wrapper">

            <Card className="shadow-sm border-0 mt-2">
                <CardBody>

                    <h3>What going on your mind?</h3>
                    <Form>
                        <div className="my-3">
                            <Label for="title">Post Title</Label>
                            <Input
                                type="text"
                                id="title"
                                placeholder="Enter here"
                            />
                        </div>

                        <div className="my-3">
                            <Label for="content">Post Content</Label>
                            <Input
                                type="textarea"
                                id="content"
                                placeholder="Enter here"
                                style={{ height: "200px" }}
                            />
                        </div>

                        <div className="my-3">
                            <Label for="category">Post Category</Label>
                            <Input
                                type="select"
                                id="category"
                                placeholder="Enter here"

                            >

                                <option>Programming</option>
                                <option>Mathematics</option>
                                <option>GK</option>
                                <option>GS</option>
                                <option>Sports</option>
                            </Input>

                        </div>

                        <Container className="text-center">
                            <Button color="primary">Create Post</Button>
                            <Button color="danger" className="ms-2">Reset Content</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>

        </div>
    )
}
export default AddPost;