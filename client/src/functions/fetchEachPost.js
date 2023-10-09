export const fetchEachPost = async (postId, setRedirect , setSpecificPostData) => {
    console.log(postId);
    try {
        const response = await fetch(`http://localhost:3000/posts?postId=${postId}`);
        const data = await response.json();
        setSpecificPostData(data);
        setRedirect(true);
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}