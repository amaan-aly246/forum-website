export const registerFunc = async (username, password, setUsername, setPassword) => {

    try {
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        })
        setPassword("")
        setUsername("")
        if (response.status !== 201) {
            alert("Registration failed")
        } else {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password,
                }),
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            })
            alert("Registration successful")
        }
    } catch (error) {
        console.log(error)
    }
}