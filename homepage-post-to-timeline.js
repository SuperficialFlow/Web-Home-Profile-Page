function openPopup() {
    document.getElementById("overlayPage").style.display = "block";
    document.getElementById("popupContainer").style.display = "block";
    document.getElementById('blurPage').style.filter = 'blur(5px)';
  }

  function closePopup() {
    document.getElementById("overlayPage").style.display = "none";
    document.getElementById("popupContainer").style.display = "none";
    document.getElementById('blurPage').style.filter = 'none';
  }

  function submitPost() {
    var postText = document.getElementById("popupInput").value;

    if (postText.trim() !== "") {

      var postDiv = document.createElement("div");
      postDiv.className = "post"
      var username = "Cosmos";

      postDiv.innerHTML = '<div class="post-username">' + username + '</div><div class="post-text">' + postText + '</div>';

      document.querySelector(".timeline-placeholder").appendChild(postDiv);

      // Likes

      var likeButton = document.createElement("button");
      likeButton.innerText = "Like";
      likeButton.setAttribute('id', 'userLike')
      likeButton.setAttribute('onclick','userLike()')
      postDiv.append(likeButton);



      closePopup();
    } else {
      alert("Post cannot be empty!");
    }
  }