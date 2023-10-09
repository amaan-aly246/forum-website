export const fetchAllPosts = async (setAllPosts) => {

    try {
        const response = await fetch('http://localhost:3000/posts/getallPost')
        const postData = await response.json();
        setAllPosts(postData);
    } catch (error) {
        console.log(error.message);
    }

}

