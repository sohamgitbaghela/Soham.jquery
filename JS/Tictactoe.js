
 $(document).ready(function(){

    var player1="O";
    var player2="X";

    $('#one').click(function(){
        myMethod1(); 
        condition();
        $(this).prop('disabled', true);
    })
    $('#two').click(function(){
        myMethod2();
        condition();
        $(this).prop('disabled', true);
    })
    $('#three').click(function(){
        myMethod3();
        condition();
        $(this).prop('disabled', true);
    })
    $('#four').click(function(){
        myMethod4();
        condition();
        $(this).prop('disabled', true);
    })
    $('#five').click(function(){
        myMethod5();
        condition();
        $(this).prop('disabled', true);
    })
    $('#six').click(function(){
        myMethod6();
        condition();
        $(this).prop('disabled', true);
    })
    $('#seven').click(function(){
        myMethod7();
        condition();
        $(this).prop('disabled', true);
    })
    $('#eight').click(function(){
        myMethod8();
        condition();
        $(this).prop('disabled', true);
    })
    $('#nine').click(function(){
        myMethod9();
        condition();
        $(this).prop('disabled', true);
    })
    //Condition Checking
    function condition()
    {
        let one=$('#one').text();
        let two=$('#two').text();
        let three=$('#three').text();
        let four=$('#four').text();
        let five=$('#five').text();
        let six=$('#six').text();
        let seven=$('#seven').text();
        let eight=$('#eight').text();
        let nine=$('#nine').text();

        if((one==player1 && two==player1 && three==player1) ||
        (four==player1 && five==player1 && six==player1) ||
        (seven==player1 && eight==player1 && nine==player1) ||
        (one==player1 && four==player1 && seven==player1) ||
        (two==player1 && five==player1 && eight==player1) ||
        (three==player1 && six==player1 && nine==player1) ||
        (one==player1 && five==player1 && nine==player1) ||
        (three==player1 && five==player1 && seven==player1) )
        {
            $("#output").html("Yeah Player1 O has won");
            $(':button').prop('disabled', true);

        }
        else if((one==player2 && two==player2 && three==player2) ||
        (four==player2 && five==player2 && six==player2) ||
        (seven==player2 && eight==player2 && nine==player2) ||
        (one==player2 && four==player2 && seven==player2) ||
        (two==player2 && five==player2 && eight==player2) ||
        (three==player2 && six==player2 && nine==player2) ||
        (one==player2 && five==player2 && nine==player2) ||
        (three==player2 && five==player2 && seven==player2) )
        {
            $("#output").html("Yeah Player2 X has won");
            $(':button').prop('disabled', true);
        }
        else if (one!="" && two!="" && three!="" && four!="" && five!="" && six!="" && seven!="" && eight!="" && nine!="")
        {
            $("#output").html(" oops your match is Draw ");
            $(':button').prop('disabled', true);
        }
    }

    var myValue=1;
    function myMethod1()
    {
        if(myValue==1)
    {
        $('#one').text(player1);
        myValue=0;
    }
    else
    {
        $('#one').text(player2);
       
        myValue=1;
    }
    }

    function myMethod2()
    {
        if(myValue==1)
    {
        $('#two').text(player1);
        
        myValue=0;
    }
    else
    {
        $('#two').text(player2);
       
        myValue=1;
    }
    }
    function myMethod3()
    {
        if(myValue==1)
    {
        $('#three').text(player1);
        
        myValue=0;
    }
    else
    {
        $('#three').text(player2);
       
        myValue=1;
    }
    }
    function myMethod4()
    {
        if(myValue==1)
    {
        $('#four').text(player1);
        
        myValue=0;
    }
    else
    {
        $('#four').text(player2);
       
        myValue=1;
    }
    } 
    function myMethod5()
    {
        if(myValue==1)
    {
        $('#five').text(player1);
        
        myValue=0;
    }
    else
    {
        $('#five').text(player2);
       
        myValue=1;
    }
    }
    function myMethod6()
    {
        if(myValue==1)
    {
        $('#six').text(player1);
        
        myValue=0;
    }
    else
    {
        $('#six').text(player2);
       
        myValue=1;
    }
    }
    function myMethod7()
    {
        if(myValue==1)
    {
        $('#seven').text(player1);
        
        myValue=0;
    }
    else
    {
        $('#seven').text(player2);
       
        myValue=1;
    }
    }
    function myMethod8()
    {
        if(myValue==1)
    {
        $('#eight').text(player1);
        
        myValue=0;
    }
    else
    {
        $('#eight').text(player2);
       
        myValue=1;
    }
    }
    function myMethod9()
    {
        if(myValue==1)
    {
        $('#nine').text(player1);
        
        myValue=0;
    }
    else
    {
        $('#nine').text(player2);
       
        myValue=1;
    }
    }

    $("#resetbtn").click(function(){
        checkReset();
    })
    function checkReset()
    {
        location.reload();
    }

});


     


       

    
    