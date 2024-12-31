


sessionStorage.setItem("islogged","false");
const btndisplay=document.querySelectorAll(".afterlogin");
const btnhide=document.getElementById("login")
const btnlogout=document.getElementById("logout")
const loginform=document.getElementById('container2');



function logged(){
    loginform.style.display="flex";
    console.log("pressed");
}

btnlogout.addEventListener("click",()=>{
    sessionStorage.setItem("islogged","false");
    history.go(0);
})

function authenticate(){
    const user=document.getElementById('username');
    const pass=document.getElementById('pwd');
    
    if(user.value==="admin" && pass.value==="admin123")
    {
        sessionStorage.setItem("islogged","true");
        btndisplay.forEach(element =>{
            element.classList.add('afterloginbtn');
        });
        btnhide.style.display="none";
        loginform.style.display="none";
    }
    else{
        alert("Wrong credentials");
    }


    
}