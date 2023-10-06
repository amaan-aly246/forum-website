export const searchFun = () => {
    const searchInput = document.querySelector(".search-input")
    const currentVisibility = searchInput.style.visibility
    if (currentVisibility === "hidden") {
        searchInput.style.visibility = "visible"
        searchInput.focus()
    } else {
        searchInput.style.visibility = "hidden"
    }
}