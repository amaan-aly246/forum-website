export const logoutFunc = async (setIsLogin , setRedirect) => {
   try {
      const response = await fetch('http://localhost:3000/logout', {
         credentials: "include",
         method: "GET",
      })

      if (response.ok) {
         setIsLogin(false);
         setRedirect(true);
      }
   } catch (error) {
      console.log(error.message)
   }
}
