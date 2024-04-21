// document.getElementById('emailForm').addEventListener('submit', function(event) 
// {
//     event.preventDefault();

//     //Validasi Penginputan Email
//     const masukkanEmail = document.getElementById('email');
//     const masukkanEmailError = document.getElementById('masukkanEmailError');
//     const validasiEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const emailValid = validasiEmail.test(masukkanEmail.value);

//     //Validasi Penginputan Nama
//     const masukkanNama = document.getElementById('nama');
//     const masukkanNamaError = document.getElementById('masukkanNamaError');
//     const validasiNama = /^[A-Z][a-z](?:[A-Z][a-z])*$/;

//     //Validasi Penginputan No Handphone
//     const masukkanNoTelp = document.getElementById('noTelp');
//     const masukkanNoTelpError = document.getElementById('masukkanNoTelpError');
//     const validasiNoTelp = /^[0-9+]+$/;

//     // Validasi Penginputan Password
//     const masukkanPassword = document.getElementById('password');
//     const masukkanPasswordError = document.getElementById('masukkanPasswordError');
//     const password = inputPassword.value;
//     const validasiPassword = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
//     // Minimal 8 karakter, minimal 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 karakter khusus

//     //Validasi Penginputan URL
//     const masukkanURL = document.getElementById('url');
//     const masukkanURLError = document.getElementById('masukkanURLError');
//     const validasiURL = /^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]{0,61}[a-zA-Z\d])?)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-zA-Z\d%@.~+&:])(\?[;&a-zA-Z\d%@.,~+&:=-])?(#[-a-zA-Z\d_])?$/;

//     //Inputan Nama
//     if (masukanNama.value.trim() === '') 
//     {
//         masukkanNamaError.textContent = 'Masukkan Nama Anda';
//         masukkanNama.classList.add('border-red-500');
//     } 
//     else if (!validasiNama.test(masukkanNama.value)) 
//     {
//         masukkanNamaError.textContent = 'Nama yang dipakai harus Menggunakan Camel Case';
//         masukkanNama.classList.add('border-red-500');
//     } 
//     else 
//     {
//         masukkanNamaError.textContent = '';
//         masukkanNama.classList.remove('border-red-500');
//     }    
    
//     //Inputan Email
//     if (masukkanEmail.value.trim() === '') 
//     {
//       masukkanEmailError.textContent = 'Masukkan Email Anda';
//       masukkanEmail.classList.add('border-red-500');
//     }
//     else if (!emailValid) 
//     {
//       masukkanEmailError.textContent = 'Masukkan Email Yang Valid';
//       masukkanEmail.classList.add('border-red-500');
//     } 
//     else 
//     {
//       masukkanEmailError.textContent = '';
//       masukkanEmail.classList.remove('border-red-500');
//     }

//     //Inputan No Handphone
//     if (masukkanNoTelp.value.trim() === '') 
//     {
//       masukkanNoTelpError.textContent = 'Masukkan No Handphone Anda';
//       masukkanNoTelp.classList.add('border-red-500');
//     } 
//     else if (!validasiNoTelp.test(masukkanNoTelp.value))
//     {
//       masukkanNoTelpError.textContent = 'Masukkan No Handphone Yang Valid';
//       masukkanNoTelp.classList.add('border-red-500');
//     } 
//     else 
//     {
//       masukkanNoTelpError.textContent = '';
//       masukkanNoTelp.classList.remove('border-red-500');
//     }

//     //Validasi Penginputan Password
//     if (password.trim() === '') 
//     {
//         masukkanPasswordError.textContent = 'Masukkan Password Anda';
//         masukkanPassword.classList.add('border-red-500');
//     } 
//     else if (!validasiPassword.test(password)) 
//     {
//         masukkanPasswordError.textContent = 'Password harus minimal 8 karakter, 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 karakter khusus (@$!%*?&).';
//         masukkanPassword.classList.add('border-red-500');
//     } 
//     else 
//     {
//         masukkanPasswordError.textContent = '';
//         masukkanPassword.classList.remove('border-red-500');
//     }
    
//     // Validasi Penginputan URL
//     if (masukkanURL.value.trim() === '') 
//     {
//         masukkanURLError.textContent = 'Masukkan URL Anda';
//         masukkanURL.classList.add('border-red-500');
//     } 
//     else if (!validasiURL.test(inputURL.value)) 
//     {
//         masukkanURLError.textContent = 'Masukkan URL Yang Valid';
//         masukkanURL.classList.add('border-red-500');
//     } 
//     else 
//     {
//         masukkanURLError.textContent = '';
//         masukkanURL.classList.remove('border-red-500');
//     }
// });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Function to validate phone number
function validatePhone(phone) {
  const re = /^\d{10}$/;
  return re.test(String(phone));
}

// Function to validate password
function validatePassword(password) {
  // Password should be at least 8 characters long
  return password.length >= 8;
}

// Function to validate confirm password
function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

// Function to handle form submission
document.getElementById("emailForm").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    event.preventDefault();
  } else {
    document.getElementById("nameError").textContent = "";
  }

  if (!validateEmail(email)) {
    document.getElementById("emailError").textContent = "Invalid email address";
    event.preventDefault();
  } else {
    document.getElementById("emailError").textContent = "";
  }

  if (!validatePhone(phone)) {
    document.getElementById("phoneError").textContent = "Invalid phone number (10 digits)";
    event.preventDefault();
  } else {
    document.getElementById("phoneError").textContent = "";
  }

  if (!validatePassword(password)) {
    document.getElementById("passwordError").textContent = "Password must be at least 8 characters long";
    event.preventDefault();
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  if (!validateConfirmPassword(password, confirmPassword)) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
    event.preventDefault();
  } else {
    document.getElementById("confirmPasswordError").textContent = "";
  }
})