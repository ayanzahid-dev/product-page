// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !message) {
    formMessage.style.color = "red";
    formMessage.textContent = "All fields are required.";
  } else if (!emailRegex.test(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email.";
  } else {
    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";
    this.reset();
  }
});

// Modal Popup for Product Details
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".details-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.getAttribute("data-product");
    modalText.textContent = `More details about ${product} coming soon!`;
    modal.style.display = "block";
  });
});

modalClose.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};