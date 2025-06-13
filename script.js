function validateForm() {
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (password !== confirm) {
    alert("❌ Passwords do not match!");
    return false;
  }

  alert("✅ You have successfully registered!");
  return true; // allow form to submit
}
