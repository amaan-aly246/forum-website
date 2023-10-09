export const logoutFunc = async (setIsLogin) => {
   try {
      const response = await fetch('http://localhost:3000/logout', {
         credentials: "include",
         method: "GET",
      })

      if (response.ok) {
         setIsLogin(false);
      }
   } catch (error) {
      console.log(error.message)
   }
}
