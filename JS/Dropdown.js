
 $(document).ready(function(){

    $('#city1').change(function(){
       //cityOne();
    })
    

    $('#city2').change(function(){
        
    })

    $('#city3').change(function(){
        
    })

    $('#submit').click(function(){
        checkCondition();
    })
    function checkCondition()
    {
        let one=$('#city1').val();
        let two=$('#city2').val();
        let three=$('#city3').val();

        if(one=="" && two=="" && three=="" )
        {
            $("#output").show().html('Please Select Cities');
        }
        else if(one==two || one==three || two==three)
        {
            $("#output").show().html('Please Select Unique');
        }
        else if(one=="1" && two=="2" && three=="3")
        {
            $("#output").show().html('Please Select Atleast One City');
        }
        else if(one!="1" || (one!="1" && two!=2))
        {
            $("#output").show().html('form Submitted');
        }
        else if(one!=two && one!=three && two!=three)
        {
            $("#output").show().html('form Submitted');
        }
        else if((one==two  && one==three && two==three ))
        {
            $("#output").show().html('Please Select Unique');
        }
        else if((one==three) || (two==three) || (one==three))
        {
            $("#output").show().html('Please Select Unique');
        }
       
        // console.log(one);
        // console.log(two);
        // console.log(three);
    }
});



     


       

    
    