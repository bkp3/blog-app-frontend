import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Container } from 'reactstrap';
import { getCurrentUserDetail } from '../../auth';
import AddPost from '../../components/AddPost';
import Base from "../../components/Base";
import NewFeed from '../../components/NewFeed';
import Post from '../../components/Post';
import { deletePostService, loadPostUserWise } from '../../services/post-service';

const UserDashboard = () => {

    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        console.log(getCurrentUserDetail());
        setUser(getCurrentUserDetail())
        loadPostData()

    }, [])


    function loadPostData() {
        loadPostUserWise(getCurrentUserDetail().id).then(data => {
            console.log(data);
            setPosts([...data])
        }).catch(error => {
            console.log(error);
            toast.error("something went wrong!!!")
        })
    }

    //function to delete post
    function deletePost(post) {
        //going to delete post
        deletePostService(post.id).then(res => {
            console.log(res);
            toast.success('Post deleted!!')
            let newPosts = posts.filter(p => p.id != post.id)
            setPosts([...newPosts])
        }).catch(error => {
            console.log(error);
            toast.error("something went wrong!!")
        })
    }

    return (
        <Base>
            <Container>

                <AddPost />
                <h1 className='my-3'>Posts count : ({posts.length})</h1>
                {
                    posts.map((post, index) => {
                        return (
                            <Post post={post} key={index} deletePost={deletePost} />
                        )
                    })
                }
            </Container>
        </Base>
    )
}

export default UserDashboard