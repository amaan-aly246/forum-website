
export function voteFunc(event, voteCount, setVoteCount) {

  const up = document.querySelector("#up")
  const down = document.querySelector("#down")
  if (event.target.id === "up") {
    if (!down.className.includes("filter-gray")) {
      down.classList.add("filter-gray")
      // setVoteCount(voteCount - 2)
    }
    if (up.className.includes("filter-gray")) {
      setVoteCount(voteCount + 1)
      up.classList.toggle("filter-gray")

    } else {
      setVoteCount(voteCount - 1)
      up.classList.toggle("filter-gray")

    }
  } else {
    if (!up.className.includes("filter-gray")) {
      // setVoteCount(voteCount - 2)
      up.classList.add("filter-gray")
    }
    if (down.className.includes("filter-gray")) {
      down.classList.toggle("filter-gray")

      setVoteCount(voteCount - 1)
    } else {
      down.classList.toggle("filter-gray")
      setVoteCount(voteCount + 1)
    }
  }

}

// export default voteFunc;
