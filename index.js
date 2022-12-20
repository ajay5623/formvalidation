
const form=document.getElementById("form");
const firstnameva = document.getElementById("firstName") ;
const lastnameva = document.getElementById("lastName");
const myphone = document.getElementById("phonenumber");
const myemail = document.getElementById("email");
const mycity = document.getElementById("city");
const myage = document.getElementById("age");

  


//add event listener on submit and target submit thorugh form 
  const validationform =()=>{
    validation();
  }

const validation =()=>{
//trim() trim the space befoore and after the input value
     const firstnameval = firstnameva.value.trim();
    const lastnameval =  lastnameva.value.trim();
    const myphoneval = myphone.value.trim();
    const myemailval = myemail.value.trim();
    const mycityval = mycity.value.trim();
    const myageval = myage.value.trim();

    //first name validation
    if(firstnameval===""){
      
          SeterrerMsg(firstnameva,"*Name can't be blank");
    }
    else if(firstnameval.length <= 2){
        SeterrerMsg(firstnameva,"*First name min  3 char");
    }
    else{
        SetsuceesMsg(firstnameva);
    }
//last name validation
if(lastnameval===""){
   
    SeterrerMsg(lastnameva,"*Last name can't be blank");
}
else if(lastnameval.length <= 2){
   
    SeterrerMsg(lastnameva,"*Last name min 3 char")
}
else{
    SetsuceesMsg(lastnameva);
}
//validation of phone
if(myphoneval===""){
   
    SeterrerMsg(myphone,"*Phone number can't be blank");
}
else if(myphoneval.length !=10){
    
    SeterrerMsg(myphone,"*Invalid phone number");
}
else{
    SetsuceesMsg(myphone);
}
//email validation
if(myemailval===""){
   
    SeterrerMsg(myemail,"*Email can't be blank");
}
else{
    SetsuceesMsg(myemail);
}
//validation city
if(mycityval===""){
 
    SeterrerMsg(mycity,"*City can't be blank");
}
else if(mycityval.length<=2){
  
     SeterrerMsg(mycity,"*Invalid city name");
}
else{
    SetsuceesMsg(mycity);
}
//validation for age 
if(myageval===""){
   
    SeterrerMsg(myage,"*Age can't be blank");
}
else if(myageval<18){
 
    SeterrerMsg(myage,"*You are not eligible for this job");
}
else{
    SetsuceesMsg(myage);
}

}



  
   SeterrerMsg=(u,msg)=>{
   var parentbox=u.parentElement;
   parentbox.className="form-cantainerror";
    var errormsg = parentbox.querySelector("small") ;
     errormsg.innerText=msg; 

   }

  SetsuceesMsg=(u)=>{
  var parentbox= u.parentElement;
  parentbox.className="form-cantainsucess ";

 }