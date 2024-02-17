function openModal(url) {
    document.getElementById('modal-iframe').src = url;
    document.getElementById('modal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('modal-iframe').src = '';
    document.getElementById('modal').style.display = 'none';
  }
  