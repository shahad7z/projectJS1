

//1 Add item
function newItem() {

var li =document.createElement('li');
var inputValue = document.getElementById('AddItem').value;
var text = document.createTextNode(inputValue);
li.appendChild(text);
if(inputValue == ''){
alert('You must write something');
}else{
document.getElementById('UL').appendChild(li);
}
    document.getElementById('AddItem').value= "";
    var span = document.createElement('span');
    var text = document.createTextNode('\t\t\t Delet Item');
    span.className = 'closee';
    span.appendChild(text);
    li.appendChild(span);
    for(let i = 0 ; i < closee.length ; i++){
        closee[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}
//2 Delet a specific item
var myListItem= document.getElementsByTagName('li');
for (var i = 0 ; i < myListItem.length; i++){
    var span = document.createElement('span');
    var text = document.createTextNode('\t Delet Item');
    span.className = 'closee';
    span.appendChild(text);
    myListItem[i].appendChild(span);
}
var closee = document.getElementsByClassName('closee');
for(let i = 0 ; i < closee.length ; i++){
    closee[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}


//3 Delet All Item
function removeAll() {

    var List = document.getElementsByTagName('UL');
    List[0].innerHTML = "";
}

// For Admit Lode page
window.onload = function(){
 if(localStorage){
    if(localStorage.getItem('uname')){
        document.getElementById('WelcomeMass').textContent = "Welcome " + 
        localStorage.getItem('uname')+"!!" ;
    }else{
        location.href = "./Home.html"
    }

 }
}

//For Logout 
function Logout(){
 localStorage.clear();
 location.href = './Home.html';
}

//for Confirmed 
function Confirmed(){
alert('Your Ordered Confirmed');
}

