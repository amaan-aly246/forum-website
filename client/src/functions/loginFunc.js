export const loginFunc = async (username, password, setUsername, setPassword, setRedirect , setIsLogin , setCurrentUser, url) => {
    try {
        const response = await fetch(`${url}/login`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        if (response.ok) {
            const {username} = await response.json();
            
            alert('Login successful');
            setRedirect(true);
           setCurrentUser(username)
            setIsLogin(true);
        }
        else{
            alert('Invalid credentials entered');
            setUsername('');
            setPassword('');
        }

    } catch (error) {
        console.log(error.message);
    }

}