let cartItems = [];
let cartTotal = 0;

function addToCart(product) {
  let price;
  switch (product) {
    case 'Flipp3r_ZeR0':
      price = 137.7;
      break;
    case 'Haptic-Gloves':
      price = 699.99;
      break;
    case 'NVIDIA_RTX_4090':
      price = 4200.99;
      break;
    default:
      console.error('Invalid product');
      return;
  }
  cartItems.push({ product: product, price: price });
  cartTotal += price;
  updateCart();
}

function updateCart() {
  let cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.product} - $${item.price}`;
    cartItemsList.appendChild(li);
  });
  let cartTotalElement = document.getElementById('cart-total');
  cartTotalElement.textContent = cartTotal.toFixed(2);
}

function showCheckoutForm() {
    let checkoutForm = document.getElementById('checkout-form');
    checkoutForm.style.display = 'block'
    checkoutForm.style.borderStyle = 'double'
    checkoutForm.style.borderColor = 'white'
    checkoutForm.style.backgroundColor = '#555';
    }
    
    function submitOrder() {
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let addressInput = document.getElementById('address');
    if (nameInput.value === '' || emailInput.value === '' || addressInput.value === '') {
    alert('Please fill in all fields');
    return;
    }
    let order = { name: nameInput.value, email: emailInput.value, address: addressInput.value, items: cartItems, total: cartTotal };
    console.log(order);
    alert('Order submitted!');
    clearCart();
    updateCart();
    let checkoutForm = document.getElementById('checkout-form');
    checkoutForm.style.display = 'none';
    }
    
    function clearCart() {
    cartItems = [];
    cartTotal = 0;
    }