document.getElementById('calculate').addEventListener('click', function() {
  let total = 0;
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    if (product.checked) {
      total += parseFloat(product.dataset.price);
    }
  });

  const discountRadio = document.querySelector('input[name="discount"]:checked');
  const discount = parseFloat(discountRadio.value);

  total = total * (1 - discount / 100);
  total = total.toFixed(2);

  document.getElementById('total').textContent = total;
});