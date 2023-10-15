
export const registerFunc = async (username, password, setRedirect, setUsername, setPassword , url) => {

    try {
        const response = await fetch(`${url}/register`, {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        })
        const data = await response.json();
        if (response.ok) {
            setUsername("")
            setPassword("")
            setRedirect(true)
            alert("You have successfully registered!")
            // return data;
        }
        else {
            alert("Username already exists!")
        }

    } catch (error) {
        console.log("error in regFunc", error)
    }
}