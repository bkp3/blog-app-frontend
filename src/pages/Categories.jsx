import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Col, Container, Row } from "reactstrap";
import Base from '../components/Base'
import CategorySideMenu from "../components/CategorySideMenu";
import Post from '../components/Post';
import { loadPostCategoriesWise } from '../services/post-service';

function Categories() {


    const [posts, setPosts] = useState([])

    const { categoryId } = useParams()
    useEffect(() => {
        console.log(categoryId);
        loadPostCategoriesWise(categoryId).then(data => {
            setPosts([...data])
            console.log(data);
        }).catch(error => {
            console.log(error);
            toast.error("error in loading")
        })
    }, [categoryId])

    return (
        <div>

            <Base>
                <Container className="mt-3">
                    <Row>
                        <Col md={2} className="pt-3">
                            <CategorySideMenu />
                        </Col>
                        <Col md={10}>
                            <h1>Blogs Count ( {posts.length} )</h1>
                            {
                                posts && posts.map((post, index) => {
                                    return (
                                        <Post key={index} post={post} />
                                    )
                                })
                            }
                            {
                                posts.length <= 0 ? <h1>No Post in this category</h1> : ''
                            }
                        </Col>
                    </Row>
                </Container>

            </Base>
        </div>
    )
}

export default Categories