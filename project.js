
window.addEventListener('DOMContentLoaded', (event) => {
  const items = document.querySelectorAll('.item');
  const containers = document.querySelectorAll('.col-1');
  const refreshButton = document.getElementById('refresh-button');
  let draggedItem = null;

  items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
      draggedItem = e.target;
      e.dataTransfer.effectAllowed = 'move';
    });

    item.addEventListener('dragend', () => {
      draggedItem = null;
    });
  });

  containers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    container.addEventListener('drop', (e) => {
      e.preventDefault();
      container.appendChild(draggedItem);
    });
  });
  
      refreshButton.addEventListener('click', () => {
        location.reload();
      });
});
