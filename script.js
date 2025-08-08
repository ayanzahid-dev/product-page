// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Reusable validation functions
function showMessage(message, success = false) {
  const formMessage = document.getElementById("formMessage");
  formMessage.textContent = message;
  formMessage.style.color = success ? "green" : "red";
  formMessage.classList.add("visible");

  if (success) {
    setTimeout(() => {
      formMessage.classList.remove("visible");
    }, 3000);
  }
}

function validateField(field) {
  const value = field.value.trim();
  if (!value) {
    field.style.borderColor = "red";
    return false;
  } else {
    field.style.borderColor = "green";
    return true;
  }
}

function validateEmail(emailField) {
  const email = emailField.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = emailRegex.test(email);
  emailField.style.borderColor = valid ? "green" : "red";
  return valid;
}

// Real-time validation
document.getElementById("name").addEventListener("blur", (e) => validateField(e.target));
document.getElementById("email").addEventListener("blur", (e) => validateEmail(e.target));
document.getElementById("message").addEventListener("blur", (e) => validateField(e.target));

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const validName = validateField(name);
  const validEmail = validateEmail(email);
  const validMessage = validateField(message);

  if (!validName || !validEmail || !validMessage) {
    showMessage("Please fix the errors above.");
  } else {
    showMessage("Message sent successfully!", true);
    this.reset();
    name.style.borderColor = "";
    email.style.borderColor = "";
    message.style.borderColor = "";
  }
});

// Modal Popup
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".details-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const product = btn.getAttribute("data-product");
    modalText.textContent = `More details about ${product} coming soon!`;
    modal.style.display = "block";
  });
});

modalClose.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};