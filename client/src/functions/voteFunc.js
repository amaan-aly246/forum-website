

export function voteFunc(event, voteCount, setVoteCount, postID) {

  const postElement = event.target.closest(`.post-container`);
  const up = postElement.querySelector("#up");
  const down = postElement.querySelector("#down");

  if (event.target.id === "up") {
    if (!down.classList.contains("filter-gray")) {
      setVoteCount(voteCount + 2);
      down.classList.add("filter-gray");
      up.classList.remove("filter-gray");
    }
    else {
      if (up.classList.contains("filter-gray")) {
        setVoteCount(voteCount + 1);
        up.classList.remove("filter-gray");
      } else {
        setVoteCount(voteCount - 1);
        up.classList.add("filter-gray");
      }
    }

  } else if (event.target.id === "down") {
    if (!up.classList.contains("filter-gray")) {
      setVoteCount(voteCount - 2);
      up.classList.add("filter-gray");
      down.classList.remove("filter-gray");
    }
    else {
      if (down.classList.contains("filter-gray")) {
        setVoteCount(voteCount - 1);
        down.classList.remove("filter-gray");
      } else {
        setVoteCount(voteCount + 1);
        down.classList.add("filter-gray");
      }
    }

  }
}

