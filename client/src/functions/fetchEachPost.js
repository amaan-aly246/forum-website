export const fetchEachPost = async (postId, setRedirect, setSpecificPostData , url) => {
 
    try {
        // console.log(postId.split("-")[1]);
        postId = postId.split("-")[1];
        const response = await fetch(`${url}/posts?postId=${postId}`);
        const data = await response.json();
        setSpecificPostData(data);
        setRedirect(true);

    } catch (error) {
        console.log(error.message);
    }
}