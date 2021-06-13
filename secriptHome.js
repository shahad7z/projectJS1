function filter(){

   let filter = document.getElementById('Search').value.toUpperCase();
    let MyTable = document.getElementById('mytable');

    let tr = MyTable.getElementsByTagName('tr');

    for(var i=0 ; i < tr.length; i++){

        let td = tr[i].getElementsByTagName('td')[0];

        if(td){
          let textvlaue =td.textContent || td.innerHTML;

          if(textvlaue.toUpperCase().indexOf(filter) > -1){
              tr[i].style.display= "";
          }else{
              tr[i].style.display = "none";
          }

        }
    }
}


//function myFunction() {
    //document.getElementById("myDropdown").classList.toggle("show");
 //}
  
  function filterFunction() {
    var input, filter, ul, li, a, i;

    document.getElementById("myDropdown").classList.toggle("show");
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }