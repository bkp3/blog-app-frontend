import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, CardBody, CardText, Col, Container, Row } from "reactstrap";
import Base from "../components/Base";
import { BASE_URL } from "../services/helper";
import { loadPost } from "../services/post-service";

const PostPage = () => {

    const { postId } = useParams()

    const [post, setPost] = useState(null)

    useEffect(() => {
        //load post from postId
        loadPost(postId).then((data) => {
            console.log(data);
            setPost(data);
        }).catch((error) => {
            console.log(error);
            toast.error("Something ent wrong !!")
        })
    }, [])

    return (
        <Base>
            <Container className="mt-4">
                <Link to="/">Home</Link> / {post && (<Link to="">{post.title}</Link>)}
                <Row>
                    <Col md={{ size: 12 }}>
                        <Card className="mt-3 ps-2 border-0 shadow-sm">
                            {
                                (post) && (
                                    <CardBody>
                                        <CardText>Posted by <b>{post.user.name}</b> on <b>{(new Date(post.addedDate)).toLocaleString()}</b></CardText>
                                        <CardText>
                                            <span className="text-muted">{post.category.categoryTitle}</span>
                                        </CardText>
                                        <div className="divider" style={{
                                            width: '100%',
                                            height: '1px',
                                            background: '#e2e2e2'
                                        }}>

                                        </div>



                                        <CardText className="mt-3 text-center" tag="h1">{post.title}</CardText>
                                        <div className="image-container container mt-3 shadow" style={{ maxWidth: '50%' }}>
                                            <img className="img-fluid" src={BASE_URL + "/post/image/" + post.imageName} alt="" />
                                        </div>


                                        <CardText className="mt-3" dangerouslySetInnerHTML={{ __html: post.content }}>

                                        </CardText>

                                    </CardBody>
                                )
                            }
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}

export default PostPage;