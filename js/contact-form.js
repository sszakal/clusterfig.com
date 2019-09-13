/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
    $("#submit_btn").click(function(){
        
        //get input field values
        let user_name = $('input[name=name]').val();
        let user_email = $('input[name=email]').val();
        let user_message = $('textarea[name=message]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        let proceed = true;
        if (user_name == "") {
            $('input[name=name]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_email == "") {
            $('input[name=email]').css('border-color', '#e41919');
            proceed = false;
        }
        
        if (user_message == "") {
            $('textarea[name=message]').css('border-color', '#e41919');
            proceed = false;
        }
        
        //everything looks good! proceed...
        if (proceed) {
            //data to be sent to server
            let post_data = 
            {
                "name": user_name,
                "email": user_email,
                "message": user_message
            };

            var url = "aHR0cHM6Ly9hcGkuY2x1c3RlcmZpZy5jb20vbWFpbGFwaS9hcGkvbWFpbA==";

            	
            $.post( atob(url), post_data, function() {
                let output = '<div class="success"> Message sent !</div>';
                    
                //reset values in all input fields
                $('#contact_form input').val('');
                $('#contact_form textarea').val('');

                $("#result").hide().html(output).slideDown();
              }, "json" )
             .fail(function() {
                let output = '<div class="success"> Message sent !</div>';
                    
                //reset values in all input fields
                $('#contact_form input').val('');
                $('#contact_form textarea').val('');

                $("#result").hide().html(output).slideDown();
              });
        }
        
        return false;
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });
    
});
