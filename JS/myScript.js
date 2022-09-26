
 $(document).ready(function(){

    //Email Case
    $('#email').keyup(function(){
        checkEmail();
    });
    function checkEmail() 
    {
    let userEmail=$("#email").val();
    //Regular Expression
    let pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var result=pattern.test(userEmail)
    //Result Value Will be Boolean
        console.log(result )
        if(result == true)
        {
            $("#output1").hide().html();
        }
        else if(result == false)
        {
            $("#output1").show().html('please Enter Valid');
        }
    }
    
    
    //Password Case
    $('#password').keyup(function(){
    let a=$("#password").val(); 
        if(a.length<6 || a.length>8 )
        {
        $("#output2").show().html('please Enter password of 6-8 Letter');
        }
        else 
        {
        $("#output2").hide().html();
        }
    });

    //Remember Me Case
    $('#remember').click(function(){
        storedata();
    })
    function storedata()
    {
        var userName=$("#email").val();
        var userpassword=$("#password").val();
        console.log("User Email: "+userName);
        console.log("User Password: "+userpassword);
    }
   
    //Submit Button Case
    $("#submit").click(function(){
            checkdata();    
    })
    function checkdata()
    {
        let a=$("#email").val();
        let p=$("#password").val();
         event.preventDefault();

        //console.log(a);
        //console.log(p);

        if(a!='' && p!='')
        {
           alert("Login Successful")
            location.reload();
        }
        else if(a=='' || p=='')
         {
            alert("Please Fill Both Details");
            // $('output').show().html("Please Enter both Details ");
         }
         
         else if(a=='' && p=='')        
         {
             $('#output').show().html("Please Enter Email & Password");
         }
         
    }

  

});



     


       

    
    