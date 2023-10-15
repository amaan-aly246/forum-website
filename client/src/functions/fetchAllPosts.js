export const fetchAllPosts = async (setAllPosts, url) => {

    try {
        const response = await fetch(`${url}/posts/getallPost`)
        const postData = await response.json();
        setAllPosts(postData);
    } catch (error) {
        console.log(error.message);
    }

}

