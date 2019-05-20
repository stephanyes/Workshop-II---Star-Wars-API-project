  var inputName = $('#name');
  inputName.blur (function(){
    var nameNode= $(this);
    if (/^([a-zA-Z ]){2,30}$/.test(nameNode.val())){
      inputName.addClass('is-valid');
    } else {
      inputName.addClass('is-invalid');
    }
  });

  var inputName2 = $('#name2');
  inputName2.blur (function(){
    var nameNode2= $(this);
    if (/^([a-zA-Z ]){2,30}$/.test(nameNode2.val())){
      inputName.addClass('is-valid');
    } else {
      inputName.addClass('is-invalid');
    }
  });



  var inputEmail = $('#email');
  inputEmail.blur(function(){
    var emailNode = $(this);
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailNode.val())){
      inputEmail.addClass('is-valid');
    } else {
      inputEmail.addClass('is-invalid');
    }
  });

  var btAlert = document.getElementById('btAlert');
  btAlert.onclick = messageAlert;

  function messageAlert(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    if(name.value==="" || email.value===""){
    swal({
      title: "All fields must be filled",
      icon: "error",
    });
  } else {
    swal({

    title: "May the force be with you",  
    icon: "success",
    });
  }
}
