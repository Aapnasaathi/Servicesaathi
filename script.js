// WhatsApp Booking from Service Cards
function sendWhatsApp(service) {
  const adminWhatsApp = "https://wa.me/7318090728"; // your number
  const message = `Hi, I want to book ${service} service.`;
  window.open(`${adminWhatsApp}?text=${encodeURIComponent(message)}`, '_blank');
}

// Booking Form Submission
function handleBooking(event) {
  event.preventDefault();
  const name = document.getElementById('userName').value;
  const contact = document.getElementById('userContact').value;
  const service = document.getElementById('serviceRequired').value;
  const adminWhatsApp = "https://wa.me/7318090728";
  const message = `Hi Admin, please book ${service}. Name: ${name}, Contact: ${contact}`;
  window.open(`${adminWhatsApp}?text=${encodeURIComponent(message)}`, '_blank');
  alert('Your booking request has been sent!');
}

// Provider Registration Form
function handleProviderRegistration(event) {
  event.preventDefault();
  const data = {
    name: document.getElementById('providerName').value,
    contact: document.getElementById('contact').value,
    location: document.getElementById('location').value,
    serviceType: document.getElementById('serviceType').value,
    rate: document.getElementById('rate').value
  };
  console.log('Registered:', data);
  alert('Registration submitted!');
}