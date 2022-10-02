import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { Button, Card, CardBody, Container, Form, Input, Label } from "reactstrap";
import { loadAllCategories } from "../services/category-service";

const AddPost = () => {

    const editor = useRef(null)
    const [content, setContent] = useState('')
    const config = { placeholder: "Start typing..." }


    const [categories, setCategories] = useState([])

    useEffect(() => {
        loadAllCategories().then((data) => {
            console.log(data);
            setCategories(data)
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
                            {/* <Input
                                type="textarea"
                                id="content"
                                placeholder="Enter here"
                                style={{ height: "200px" }}
                            /> */}

                            <JoditEditor
                                ref={editor}
                                value={content}
                                config={config}
                                onChange={newContent => setContent(newContent)}


                            />

                        </div>

                        <div className="my-3">
                            <Label for="category">Post Category</Label>
                            <Input
                                type="select"
                                id="category"
                                placeholder="Enter here"

                            >

                                {
                                    categories.map((category) => (
                                        <option value={category.categoryId} key={category.categoryId}>{category.categoryTitle}</option>
                                    ))
                                }

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