export function handleUpiPayment() {
  const urlParams = new URLSearchParams(window.location.search);
  const upiId = urlParams.get('upiId');
  
  document.querySelector('#upiPaymentContainer').innerHTML = `
    <div class="upi-payment-details">
      <h2>UPI Payment</h2>
      <p>UPI ID: ${upiId}</p>
      <div class="qr-placeholder">
        <img src="upi-qr-placeholder.png" alt="UPI QR Code">
      </div>
      <p>Scan QR code to pay or click below</p>
      <button id="proceedUpiPayment" class="pay-button">Proceed to UPI Payment</button>
    </div>
  `;
}