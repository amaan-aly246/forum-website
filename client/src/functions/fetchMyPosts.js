export const fetchMyPosts = async (currentUser , setMyPost , url) => {
    try {
        console.log(currentUser);
        const response = await fetch(`${url}/posts/myPost?currentUser=${currentUser}`);
        const data = await response.json();
        setMyPost(data);
    } catch (error) {
        console.log(error.message);
    }
}