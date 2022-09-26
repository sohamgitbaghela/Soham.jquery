
 $(document).ready(function(){

    $('#fname').keyup(function(){
        checkfname();
    });
    function checkfname()
    {
    let a=$("#fname").val();
    //Regular Expression
     let exp= /^[A-Za-z]+$/ 
     let result=exp.test(a);
     
    if(a.length=="")
    {
        $("#output1").show().html('please Enter first Name');
    } 
    else if(result==false)
    {
        alert('please Enter Character only in First Name');

    }
    else if(a.length<3 || a.length>13)
    {
        $("#output1").show().html('please Enter min 3 Letter & max 13 Letter in First Name');
    }
    else if(a.length>3 || a.length<13){
        $("#output1").hide().html();
    }
    }
    

    $('#lname').keyup(function(){
        checklname();
    });
    function checklname()
    {
        let a=$("#lname").val(); 

        let exp= /^[A-Za-z]+$/ 
         let result=exp.test(a);

    if(a.length=="")
    {
        $("#output2").show().html('please Enter Last Name');
    } 
    else if(result==false)
    {
        alert('please Enter Character Only in Last Name');

    }
    else if(a.length<3 || a.length>13)
    {
        $("#output2").show().html('please Enter min 3 Letter & max 13 Letter in Last Name');
    }
    else if(a.length>3 || a.length<13){
        $("#output2").hide().html();
    }
    }
    

   //Email Case
   $('#email').keyup(function(){
    checkEmail();
    });
    function checkEmail() 
    {
    let userEmail=$("#email").val();
    //Regular Expression
    let RegExpression= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let result=RegExpression.test(userEmail)
    //Result Value Will be Boolean
        if(result)
        {
            $("#output3").hide().html();
        }
        else
        {
            $("#output3").show().html('please Enter Valid');
        }
    }
    
    $('#phone').keyup(function(){
    let a=$("#phone").val(); 
    
        if(a.length==10)
        {
            $("#output4").hide().html();
        }
       else if(a.length!==10)
       {
        $("#output4").show().html('please Enter 10 Digit NUmber');
       }
       else
       {
        $("#output4").hide().html();
        }
    });

    $('#password').keyup(function(){
    let a=$("#password").val(); 
        if(a.length<6 || a.length>8 )
        {
        $("#output5").show().html('please Enter password of 6-8 Letter');
        }
        else 
        {
        $("#output5").hide().html();
        }


    });

    $('#cpassword').keyup(function(){
    let a=$("#cpassword").val(); 
    let b=$("#password").val()
    if(a!=b)
    { 
        $("#output6").show().html('Password Mismatch ');
    }
    else if(a==b)
    { 
        $("#output6").hide().html();
    }
    });

    $('#state').change(function(){
    let a=$("#state").val(); 
    if (a=="")
    {
         $("#output7").show().html("Please Select a State");
    }
    else
    {
        $("#output7").hide().html();
    }
    });

    $('#city').keyup(function(){
    let a=$("#city").val();
        let exp= /^[A-Za-z]+$/ 
        let result=exp.test(a);
        if(a.length<3)
        {
        $("#output8").show().html('please Enter Character Only');
        }
        else if(result==false)
        {
        alert('Please Enter Character only in City Name');

        }
        else{
            $("#output8").hide().html();
            }
    });

    $('#address').keyup(function(){
    let a=$("#address").val(); 
    
    if(a.length>140 || a.length<4)
    {
    $("#output9").show().html('please Enter 4-150 Character Only');
    }
    else{
        $("#output9").hide().html();
        }
    
    });
    var gender=0;
    $(".myradio").click(function(){
        checkGender();
    })
    function checkGender()
    {
        //gender+=parseInt($('.myradio').value);
        gender+=($('input:radio:enabled').length);
        console.log(gender);
    }


  
   $('.mybox').click(function(){
        testbox();
   })
   function testbox()
   {
    var total=$('input:checkbox:checked').length;
    if(total<2)
    {
        $("#output11").show().html(" Select Atleast 2 Hobbies ");
    }
    else
    {
        $("#output11").hide().html();
    }
   }

    $("#submit").click(function(){

            let a=$("#fname").val();
            let b=$("#lname").val();
            let c=$("#email").val();
            let d=$("#phone").val(); 
            let e=$("#password").val();
            let f=$("#cpassword").val();
            let g=$("#state").val(); 
            let h=$("#city").val();
            let i=$("#address").val();
            let j=$(".myradio").val();
            let k=$(".mybox").val();
            let total=$('input:checkbox:checked').length;

            let userEmail=$("#email").val();
            let RegExpression= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            let result=RegExpression.test(userEmail)

            event.preventDefault();

            //$("output").show().html(j); 
        
            if(a=='' || b=='' || c=='' || d=='' || e=='' || f=='' || g=='' || h=='' || i=='' || j=='' || (total<2) )
            {
                $('#output').show().html("Please Fill All Field");
            }
           else if( a.length>13 || a.length<3  || b.length>13 || d.length<10 || d.length>10 || e.length<6 || e.length>8 || e!=f || (result==false) )
           {
            $('#output').show().html("Please Validate all Field");
           }
        
            else if(a !=''  && b !='' && c !='' && d !='' && e !='' && f !='' && g !='' && h !='' && i !='')
            {
                    
                    alert("Form Submitted");
                    location.reload();       
            }
    })

});



     


       

    
    