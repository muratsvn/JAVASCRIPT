const frmLogin = document.getElementById("frmLogin");

frmLogin.addEventListener("submit", (e) => {
     e.preventDefault(); // default davranışını durdur diyoruz, formun submit davranışını iptal ettik

     const txtEmail = document.getElementById("txtEmail");
     const txtPassword = document.getElementById("txtPassword");

     try {
          const email = txtEmail.value;
          const password = txtPassword.value;

          if(!email || !isEmail(email)) throw new Error ("Please enter a valid email");
          if(!password) throw new Error ("Please enter your password");

          e.target.submit();


     } catch (err) {
          
     }



})


const isEmail = (email) => {
     const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
     return emailRegex.test(email);
 }