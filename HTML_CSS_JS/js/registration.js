let checkForm = () => {
  var ilegalchars=/[^a-zA-Zא-ת]/;
  var ilegalnums=/[^0-9-]/;
  var mailfilter= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  
  
  /*****************/
  /*  First Name   */
  /*****************/
  var fname=document.forms["register"]["firstName"].value;

    if (fname==""){
      document.getElementById("fname").innerHTML = "First name must be entered!!!"
      return false;
    } else if (fname.length<2){
      document.getElementById("fname").innerHTML = "First name must have at least 2 characters!!!"
      return false;
    } else if (ilegalchars.test(fname)){
      document.getElementById("fname").innerHTML = "First name is ilegal format!!!"
      return false;
    } else {
      document.getElementById("fname").innerHTML = ""
    }
  
  /*****************/
  /*  Last Name    */
  /*****************/
  var lname=document.forms["register"]["lastName"].value;

    if (lname==""){
      document.getElementById("lname").innerHTML = "Last name must be entered!!!"
      return false;
    } else if (lname.length<2){
      document.getElementById("lname").innerHTML = "Last name must have at least 2 characters!!!"
      return false;
    } else if (ilegalchars.test(lname)){
      document.getElementById("lname").innerHTML = "Last name is ilegal format!!!"
      return false;
    } else {
      document.getElementById("lname").innerHTML = ""
    }
 
  /*****************/
  /*  Phone        */
  /*****************/		
  var phone=document.forms["register"]["phone"].value;
  
  if(phone==""){
    document.getElementById("phoneNumber").innerHTML = "Phone is empty!!"
    return false;
  } else if(phone.length<9){
    document.getElementById("phoneNumber").innerHTML = "Phone number is too short!!"
    return false;
  } else if(ilegalnums.test(phone)){
    document.getElementById("phoneNumber").innerHTML = "Phone must inclue only numbers"
    return false;
  } else{
    document.getElementById("phoneNumber").innerHTML = ""
  }

  /*****************/
  /*  Email        */
  /*****************/		
  var email=document.forms["register"]["email"].value;
  
  if(email==""){
    document.getElementById("emailAddress").innerHTML = "Email is empty!!"
    return false;
  } else if(!mailfilter.test(email)){
    document.getElementById("emailAddress").innerHTML = "Worng email format!!!"
    return false;
  } else {
    document.getElementById("emailAddress").innerHTML = ""
  }
  
  /*****************/
  /*  radio button        */
  /*****************/		
  var radioButtons = document.querySelectorAll('input[name="kindOfActivity"]')
  console.log(radioButtons)
  var isRadioSelected = false;

  // Loop through the radio buttons to check if one is selected
  for (var i = 0; i < radioButtons.length; i++) {
    console.log(1)
    if (radioButtons[i].checked) {
      isRadioSelected = true;
      console.log(2)
      break;
    }
    
  }
  
  if (!isRadioSelected) {
    console.log(!isRadioSelected)
    document.getElementById("radioMsg").innerHTML = "Please select a kind of activity!";
    return false;
  } else {
    document.getElementById("radioMsg").innerHTML = "";
  }
 return true;
}//checkForm()