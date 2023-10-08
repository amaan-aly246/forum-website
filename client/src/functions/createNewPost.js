export const createNewPost = async (title, content, setRedirect) => {
    const createPost = {
        title: title,
        content: content,
    }
    try {
        // console.log(createPost)
        const response = await fetch('http://localhost:3000/posts/createPost', {
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