/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
    $("#submit_btn").click(function(){
        
        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_message = $('textarea[name=message]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
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
            //post_data = {
            //    'name': user_name,
            //    'email': user_email,
            //    'message': user_message
            //};
            
            post_data = {
                'from': 'clusterfig.com <mailgun@sandbox87be9ff1cab0403e909c8e89cff74cc4.mailgun.org',
                'to': "stefan.szakal@clusterfig.com",
                'message': "Name:" + user_name + "\n Email: " + user_email + "\nMessage: + user_message" 
            };

            //Ajax post data to server
            $.post('https://api:a1319821950717d2bdb636f0a7b2a85d-4167c382-a0582b1d@api.mailgun.net/v3/sandbox87be9ff1cab0403e909c8e89cff74cc4.mailgun.org/messages', post_data, function(response){
            
                //load json data from server and output message     
                if (response.type == 'error') {
                    output = '<div class="error">' + response.text + '</div>';
                }
                else {
                
                    output = '<div class="success"> Message sent !</div>';
                    
                    //reset values in all input fields
                    $('#contact_form input').val('');
                    $('#contact_form textarea').val('');
                }
                
                $("#result").hide().html(output).slideDown();
            }, 'json');
            
        }
        
        return false;
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });
    
});
