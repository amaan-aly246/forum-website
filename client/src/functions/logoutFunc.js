export const logoutFunc = async (setIsLogin , setRedirect , url) => {
   try {
      const response = await fetch(`${url}/logout`, {
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
