const confirmPass = document.getElementById("confirm-password");
const pass = document.getElementById("password");

// pass.addEventListener("input",checkMatched);
// confirmPass.addEventListener("input",checkMatched);

// function clearMatch(){
//     pass.classList.remove("password-matched","password-notmatched");
//     confirmPass.classList.remove("password-matched","password-notmatched");
// }

// function checkMatched(){
//     if(confirmPass.value==""){
//         clearMatch();
//     }
//     else{
//         if(confirmPass.value == pass.value){
//             clearMatch();
//             pass.classList.add("password-matched");
//             confirmPass.classList.add("password-matched");
//         }
//         else{
//             clearMatch();
//             pass.classList.add("password-notmatched");
//             confirmPass.classList.add("password-notmatched");
//         }
//     }
// }


function checkMatched(){
    if(confirmPass.value!=""){
        if(confirmPass.value==pass.value){
            pass.setCustomValidity("");
            confirmPass.setCustomValidity("");
        }
        else{
            pass.setCustomValidity("Passwords Don't Match");
            confirmPass.setCustomValidity("Passwords Don't Match");
        }
    }
    else{
        pass.setCustomValidity("");
        confirmPass.setCustomValidity("");
    }
}

confirmPass.addEventListener("input",checkMatched);
pass.addEventListener("input",checkMatched);