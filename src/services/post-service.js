import { myAxios, privateAxios } from "./helper"


//create post function
export const createPostFun = (postData) => {
    // console.log(postData);
    return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/posts`, postData).then(response => response.data)
}

//get all posts
export const loadAllPosts = () => {
    return myAxios.get(`/posts`).then(response => response.data);
}