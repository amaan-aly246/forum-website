export const loginFunc = async (username, password, setUsername, setPassword) => {
    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        })
        setPassword("")
        setUsername("")
        if (response.status == 200) {
            alert("Login successful")

        } else {
            alert(" Invalid credentials")
        }
    } catch (error) {
        console.log(error)

    }

    console.log("loginFunc")
}