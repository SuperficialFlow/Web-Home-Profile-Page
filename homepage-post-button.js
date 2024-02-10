function openPopup() {
    document.getElementById('popupContainer').style.display = 'block';
    document.getElementById('blurPage').style.filter = 'blur(10px)';
  }

  function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
    document.getElementById('popupInput').value = '';
    document.getElementById('blurPage').style.filter = 'none';
  }

  function submitPost() {
    closePopup();
  }