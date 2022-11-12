import { upload } from "@testing-library/user-event/dist/upload";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Alert, Button, Card, CardBody, Container, Form, Input, Label } from "reactstrap";
import { getCurrentUserDetail } from "../auth";
import { loadAllCategories } from "../services/category-service";
import { createPostFun, uploadPostImage } from "../services/post-service";

const AddPost = () => {

    const editor = useRef(null)


    const [categories, setCategories] = useState([])

    const [user, setUser] = useState(undefined);

    const [image, setImage] = useState(null);

    const [post, setPost] = useState({
        title: '',
        content: '',
        categoryId: ''
    })

    //field change function
    const fieldChanged = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    const contentFieldChanged = (data) => {
        setPost({ ...post, 'content': data })
    }

    useEffect(() => {
        setUser(getCurrentUserDetail())
        loadAllCategories().then((data) => {
            // console.log(data);
            setCategories(data)
        }).catch((error) => {
            // console.log(error);
        })
    }, [])


    //create post function
    const createPost = (event) => {
        event.preventDefault();
        // console.log("form submitted");
        // console.log(post);
        if (post.title.trim() === '') {
            toast.error("Post title is required !!!")
            return
        }
        if (post.content.trim() === '') {
            toast.error("Post content is required !!!")
            return
        }
        if (post.categoryId.trim() === '') {
            toast.error("Please select category !!!")
            return
        }

        //submit the form on server
        post['userId'] = user.id;
        createPostFun(post).then(data => {


            uploadPostImage(image, data.id).then(data => {
                toast.success("Image uploaded!!")
            }).catch(error => {
                toast.error("Error in uploading image")
                console.log(error);
            })

            toast.success("Post Created !!")
            setPost({
                title: '',
                content: '',
                categorId: ''
            })
            // console.log(post);
        }).catch((error) => {
            toast.error("Post is not created due to some error !!")
            // console.log(error);
        })

    }

    //handling file change event
    const handleFileChange = (event) => {
        console.log(event.target.files[0]);
        setImage(event.target.files[0])

    }

    return (
        <div className="wrapper">

            <Card className="shadow-sm border-0 mt-2">
                <CardBody>
                    {/* {JSON.stringify(post)} */}

                    <h3>What going on your mind?</h3>
                    <Form onSubmit={createPost}>
                        <div className="my-3">
                            <Label for="title">Post Title</Label>
                            <Input
                                type="text"
                                id="title"
                                placeholder="Enter here"
                                name="title"
                                onChange={fieldChanged}
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
                                value={post.content}

                                onChange={contentFieldChanged}


                            />

                        </div>

                        {/* file field */}

                        <div className="mt-3">
                            <Label for="image">Select Post Banner </Label>
                            <input id="image" type="file" name="image" onChange={handleFileChange} />
                        </div>

                        <div className="my-3">
                            <Label for="category">Post Category</Label>
                            <Input
                                type="select"
                                id="category"
                                placeholder="Enter here"
                                name="categoryId"
                                onChange={fieldChanged}
                                defaultValue={0}
                            >
                                <option disabled value={0}>--Select Category--</option>

                                {
                                    categories.map((category) => (
                                        <option value={category.categoryId} key={category.categoryId}>{category.categoryTitle}</option>
                                    ))
                                }

                            </Input>

                        </div>

                        <Container className="text-center">
                            <Button type="submit" color="primary">Create Post</Button>
                            <Button color="danger" className="ms-2">Reset Content</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>

        </div>
    )
}
export default AddPost;