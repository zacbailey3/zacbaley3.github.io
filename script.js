function checkEmails() {
    const email = document.getElementById("email").value.trim();
    const confirmEmail = document.getElementById("cnfemail").value.trim();
  
    if (email !== confirmEmail) {
      alert("Email addresses do not match!");
      return false; 
    }
    return true; 
  }