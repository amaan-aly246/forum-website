export const createNewComment = async (postID, username ,comment, setComment) => {
    
    try {
        const response = await fetch('http://localhost:3000/posts/comment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ postID, username, comment }),
            credentials: "include"
        })
        const data = await response.json()
        if(response.ok){
            setComment('')
        }
    } catch (error) {
        console.log(error)
    }
}