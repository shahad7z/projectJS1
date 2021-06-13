

// For Admit Login 
function userLogin(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if(username == "" || password == "" ) {
        alert('Please Interest All Required Fields');
    }else{
        if(username == "admin" || password == "admin" ){
            if(localStorage){
            localStorage.setItem('uname', username)
            location.href = './Admin.html';
            }else{
            alert('local Storage is disabled in Your browser!.');
            }
         }else{
             alert('Invalid User name or password')
         }
    }
    }
    

    function resetAll(){
        var Resintpassword = document.getElementById('1password').value;
        var Newpassword = document.getElementById('2password').value;
      if(Resintpassword == "admin"){
        alert('Password Changed Successfully ');

      }else{
        alert('You intered a wrong Password ');
      }

    }