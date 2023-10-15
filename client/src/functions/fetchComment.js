export const fetchComment = async (postID, url) => {
    try {
        postID = postID.split("-")[0];

        console.log('postID', postID)
        const response = await fetch(`${url}/posts/comment?postID=${postID}`, {
            method: 'GET',
        })
        const data = await response.json()
        if(response.status !=404){
            return data;
        }
        else{
            console.log('no comment found')
            return null;
        }

    } catch (error) {
        console.log(error.message);
    }
}