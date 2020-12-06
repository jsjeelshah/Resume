function validate(){
  var name = document.getElementById("name").value;
  
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  
  var text;
  if(name.length < 4){
    alert("Please Enter valid Name");
    
    return false;
  }
  
  if(isNaN(phone) || phone.length != 10){
    alert("Please Enter valid Phone Number");
   
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    alert("Please Enter valid Email");
    
    return false;
  }
  if(message.length <= 140){
    alert("Please Enter More Than 140 Characters");
   
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}