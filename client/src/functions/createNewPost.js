export const createNewPost = async (title, content, setRedirect, currentUser, setCurrentUser , voteCount , url) => {
    const createPost = {
        title: title,
        content: content,
        username: currentUser,
        voteCount: voteCount,   
    }
    try {
        const response = await fetch(`${url}/posts/createPost`, {
            method: 'POST',
            body: createPost,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createPost),
        })
        if (response.ok) {
            console.log('fetch ok')
            setRedirect(true);
            alert('Post created');
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.log('error', error.message);
    }
}