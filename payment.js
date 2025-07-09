export function setupPayment(element) {
  const paymentForm = `
    <div class="payment-container">
      <h3>Payment Options</h3>
      <form id="paymentForm">
        <select id="paymentMethod" required>
          <option value="">Select Payment Method</option>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
          <option value="upi">UPI</option>
          <option value="netbanking">Net Banking</option>
        </select>
        
        <div id="cardDetails" class="payment-fields" style="display: none;">
          <input type="text" placeholder="Card Number" pattern="[0-9]{16}" required>
          <input type="text" placeholder="MM/YY" pattern="[0-9]{2}/[0-9]{2}" required>
          <input type="text" placeholder="CVV" pattern="[0-9]{3}" required>
        </div>

        <div id="upiDetails" class="payment-fields" style="display: none;">
          <input type="text" id="upiId" placeholder="Enter UPI ID (example@upi)" required>
          <button type="button" id="verifyUpi" class="verify-button">Verify UPI</button>
        </div>
        
        <button type="submit" class="pay-button">Pay Now</button>
      </form>
    </div>
  `;

  element.innerHTML = paymentForm;

  const form = element.querySelector('#paymentForm');
  const paymentMethod = form.querySelector('#paymentMethod');
  const cardDetails = form.querySelector('#cardDetails');
  const upiDetails = form.querySelector('#upiDetails');

  paymentMethod.addEventListener('change', (e) => {
    const selectedMethod = e.target.value;
    cardDetails.style.display = (selectedMethod === 'credit' || selectedMethod === 'debit') ? 'flex' : 'none';
    upiDetails.style.display = selectedMethod === 'upi' ? 'flex' : 'none';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handlePayment(form);
  });

  // Add UPI verification handler
  const verifyUpiButton = form.querySelector('#verifyUpi');
  verifyUpiButton.addEventListener('click', () => {
    const upiId = form.querySelector('#upiId').value;
    verifyUpiId(upiId);
  });
}

function verifyUpiId(upiId) {
  // Add UPI verification logic here
  if (upiId.includes('@')) {
    alert('UPI ID verified successfully!');
  } else {
    alert('Invalid UPI ID format!');
  }
}

function handlePayment(form) {
  const paymentMethod = form.querySelector('#paymentMethod').value;
  if (paymentMethod === 'upi') {
    const upiId = form.querySelector('#upiId').value;
    console.log(`Processing UPI payment for ID: ${upiId}`);
    // Redirect to UPI payment page or handle UPI payment logic
    window.location.href = `/upi-payment.html?upiId=${encodeURIComponent(upiId)}`;
  } else {
    console.log(`Processing payment via ${paymentMethod}`);
  }
}