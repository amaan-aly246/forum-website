

export function voteFunc(event, voteCount, setVoteCount, postID) {

  const postElement = event.target.closest(`#post-${postID}`);
  const up = postElement.querySelector("#up");
  const down = postElement.querySelector("#down");

  if (event.target.id === "up") {
    if (up.classList.contains("filter-gray")) {
      setVoteCount(voteCount + 1);
      up.classList.remove("filter-gray");
    } else {
      setVoteCount(voteCount - 1);
      up.classList.add("filter-gray");
    }
  } else if (event.target.id === "down") {
    if (down.classList.contains("filter-gray")) {
      setVoteCount(voteCount - 1);
      down.classList.remove("filter-gray");
    } else {
      setVoteCount(voteCount + 1);
      down.classList.add("filter-gray");
    }
  }
}

