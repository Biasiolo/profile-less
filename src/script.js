function openModal(url) {
    document.getElementById('modal-iframe').src = url;
    document.getElementById('modal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('modal-iframe').src = '';
    document.getElementById('modal').style.display = 'none';
  }
  
  // Abre o modal
function abrirModal() {
  document.getElementById('projetoModal').style.display = 'block';
}

// Fecha o modal
function fecharModal() {
  document.getElementById('projetoModal').style.display = 'none';
}

// Adiciona evento de clique ao botão para abrir o modal
document.getElementById('abrirModalBtn').addEventListener('click', abrirModal);