function finp() {
    var input = document.getElementById("firstname")
    console.log(input.value);
    var a = document.getElementById("surname")
    console.log(a.value);
    var e = document.getElementById("email")
    console.log(e.value);
    var p = document.getElementById("pass")
    console.log(p.value)
 var o = document.getElementById("date")
 console.log(o.value);
    
 var q= document.getElementById("da")

 console.log(q.value);
 var d = document.getElementById("d")
 console.log(d.value);



  var gender;
   
  var male = document.getElementById("male")
  var female = document.getElementById("female")
  var custom = document.getElementById("custom")
  
  var arr = [male, female,custom]
  for (i=0; i<arr.length; i++){
    if( arr[i].checked){
        gender =arr[i].value;
        break
    }
  }
  console.log("gender",gender)
  
}