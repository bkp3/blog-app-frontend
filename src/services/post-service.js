import { myAxios, privateAxios } from "./helper"


//create post function
export const createPostFun = (postData) => {
    // console.log(postData);
    return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/posts`, postData).then(response => response.data)
}