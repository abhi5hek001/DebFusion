const loginBtn = document.getElementsByClassName('login__button');

const showHiddenPass = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
      iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () => {
      if (input.type === 'password') {

         input.type = 'text'

         iconEye.classList.add('ri-eye-line')
         iconEye.classList.remove('ri-eye-off-line')
      } else {
         input.type = 'password'

         iconEye.classList.remove('ri-eye-line')
         iconEye.classList.add('ri-eye-off-line')
      }
   })
}
document.addEventListener('DOMContentLoaded', () => {
   const loginBtn = document.querySelector('.login__button');
   loginBtn.addEventListener('click', () => {

      window.location.href = "../index.html";
   });

   showHiddenPass('login-pass', 'login-eye');
});