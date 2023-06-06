const USERS = JSON.parse(window.localStorage.getItem('users'));

console.log(USERS);

const username = document.getElementById('usernameinput');
const password = document.getElementById('exampleInputPassword1');
const submit = document.getElementById('submit');

submit.addEventListener('click', (event) =>{
event.preventDefault();

    submit.innerHTML = `
    <div v-if="loading" class="spinner" >
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>`

  setTimeout(() =>{
    
USERS.map((ps) => {
    if (username.value === ps.username && password.value === ps.password){
        document.getElementById('login-card').style.boxShadow = '0 0 50px rgba(0, 255, 110, 0.7 )'
        password.classList.remove('error-active');
        username.classList.remove('error-active');
        const massage = document.getElementById('error'); document.getElementById('error').style.color = 'rgba(0, 255, 110, 1 )';
        massage.innerHTML = `welcome to your panel , please be patient...` ;
        window.localStorage.setItem('username', username.value);
        window.localStorage.setItem('password', password.value);
        submit.classList.add('btn-success');
        submit.innerText = 'Access granted ... ';
        submit.style.maxWidth = '200px'
    } else {
        if (username.value != ps.username && password.value != ps.password) {
            username.classList.add('error-active');
            password.classList.add('error-active');
            submit.style.maxWidth = '200px'
            submit.classList.add('btn-success');
            submit.innerText = 'Access Denied ... ';
            const massage = document.getElementById('error'); document.getElementById('error').style.color = 'red';
            massage.innerHTML = `<p> your username and password is invald !</p>` ;
    
        } else { 
            if (username.value != ps.username) {
            password.classList.remove('error-active');
            username.classList.add('error-active');
            submit.style.maxWidth = '200px'
            submit.innerText = 'Access Denied ... ';
            submit.classList.add('btn-danger');
            const massage = document.getElementById('error'); document.getElementById('error').style.color = 'red';
            massage.innerHTML = `<p> your username is invald !</p>`
            submit.innerHTML = ``
            } else {
                
            username.classList.remove('error-active');
            password.classList.add('error-active');
            submit.style.maxWidth = '200px'
            submit.innerText = 'Access Denied ... ';
            submit.classList.add('btn-danger'); 
            const massage = document.getElementById('error'); document.getElementById('error').style.color = 'red';
            massage.innerHTML = `<p> your password is invald !</p>`
            }
            
    }
    }});
    
  }, 2000);
  
})





