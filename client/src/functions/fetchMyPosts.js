export const fetchMyPosts = async (currentUser , setMyPost) => {
    try {
        console.log(currentUser);
        const response = await fetch(`http://localhost:3000/posts/myPost?currentUser=${currentUser}`);
        const data = await response.json();
        setMyPost(data);
    } catch (error) {
        console.log(error.message);
    }
}