$("#contactForm").validator().on("submit", function(event){
    if(event.isDefaultPrevented()){
       //handle the invalid form...
       formError();
       submitMSG(false, "Did you fill the form properly?");
    }else{
       //everything looks good!
       event.preventDefault();
       submitForm();
    }
});

function submitForm(){
  //Initiate Variables with Form Content
  var name=$("#name").val();
  var email=$("#email").val();
  var message=$("#message").val();

  #.ajax({
      type: "POST",
      url: "php/form-process.php",
      data: "name=" + name + "&email= " +email + "&message=" +message,
      success : function(text){
          if(text == "success"){
             formSuccess();
          }else{
             formError();
             submutMSG(false, text);
          }
      }
  });

}

function formSuccess(){
   $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimatiomEnd oanimationend animationend', function(){
        $(this).removeClass();
   });

}
function submitMSG(valid, msg){
   if(valid){
       var msgClasses="h3 text-center tada animated text-success";
   }else{
       var msgClasses="h3 text-center text-danger";
   }
   $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}