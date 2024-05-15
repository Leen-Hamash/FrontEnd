document.addEventListener("DOMContentLoaded", () => {
  // Select Size
  const sizeElements = document.querySelectorAll('.size');

  sizeElements.forEach(sizeElement => {
    sizeElement.addEventListener('click', () => {
      sizeElements.forEach(el => el.classList.remove('active'));
      sizeElement.classList.add('active');
    });
  });

  // Collapse not the default bootstrap collapse with jquery 
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const collapse = header.nextElementSibling;
      const chevron = header.querySelector('.fa-chevron-right');

      if (collapse.classList.contains('show')) {
        collapse.classList.remove('show');
        header.classList.add('collapsed');
      } else {
        document.querySelectorAll('.collapse.show').forEach(openCollapse => {
          openCollapse.classList.remove('show');
          openCollapse.previousElementSibling.classList.add('collapsed');
        });
        collapse.classList.add('show');
        header.classList.remove('collapsed');
      }
    });
  });

  // Modals not the default bootstrap modal with jquery 
  const addToCartButton = document.getElementById('add-to-cart');
  const buyNowButton = document.getElementById('buy-now');
  const closeModalButtons = document.querySelectorAll('[data-dismiss="modal"]');
  const addToCartModal = document.getElementById('addToCartModal');
  const productsModal = document.getElementById('products');

  addToCartButton.addEventListener('click', () => {
    addToCartModal.classList.add('show');
    addToCartModal.style.display = 'block';
    document.body.classList.add('modal-open');
  });

  buyNowButton.addEventListener('click', () => {
    productsModal.classList.add('show');
    productsModal.style.display = 'block';
    document.body.classList.add('modal-open');
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const modal = event.target.closest('.modal');
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });
  });
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      event.target.classList.remove('show');
      event.target.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
});
