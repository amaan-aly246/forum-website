export const loginFunc = async (username, password, setUsername, setPassword, setRedirect) => {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        if (response.ok) {
            alert('Logout successful');
            setRedirect(true);
            // setUsername('');
            // setPassword('');
        }

    } catch (error) {
        console.log(error.message);
    }

}