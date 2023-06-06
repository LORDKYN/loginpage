const btn = document.getElementById('submit');
const userName = document.getElementById('username');
const passWord = document.getElementById('inputPassword4');
const FName = document.getElementById('firstname');
const LName = document.getElementById('lastname');
const Email = document.getElementById('inputEmail4');

const USERS = [{
    username : 'ashkan', fname : 'ashkan' , password : '123', email : 'ashkan@gmail.com'
},
{
    username : 'ashkan0', fname : 'ashkan' , password : '123', email : 'ashkan@gmail.com'
    
},
{
    username : 'ashkan01', fname : 'ashkan' , password : '123', email : 'ashkan@gmail.com'

}];



btn.addEventListener('click', (el) =>{
    el.preventDefault();
    const newuser = { username : userName.value , fname : FName.value , password : passWord.value , email : Email.value};
    btn.innerHTML = `
    <div v-if="loading" class="spinner" >
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>`
  
setTimeout(() =>{
    btn.innerText = 'Submit'
    USERS.map((ps) => {
        if (userName.value === ps.username) {
            userName.classList.add('error-active');
        
        } else {
            USERS.push(newuser);
            console.log(USERS);
            return USERS;
        }
    });
    
    window.localStorage.setItem( 'users' ,JSON.stringify(USERS));
    
    btn.classList.add('btn-success');
    btn.innerText = 'SignUp Successfull ... !';
    btn.style.maxWidth = '200px';

    setTimeout(() =>{
        window.location.replace('./login.html')
        
    }, 3000)
    
} , 2000)
});

