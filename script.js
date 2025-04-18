// Booking WhatsApp for Home Page
function sendWhatsApp(service) {
  const adminWhatsApp = "https://wa.me/911234567890"; // replace with your number
  const message = `Hi, I want to book ${service} service.`;
  window.open(`${adminWhatsApp}?text=${encodeURIComponent(message)}`, '_blank');
}

// Provider Registration Handler
function handleProviderRegistration(event) {
  event.preventDefault();
  const data = {
    name: document.getElementById('providerName').value,
    contact: document.getElementById('contact').value,
    location: document.getElementById('location').value,
    serviceType: document.getElementById('serviceType').value,
    rate: document.getElementById('rate').value
  };
  console.log("Registered:", data);
  alert("Registration submitted!");
}