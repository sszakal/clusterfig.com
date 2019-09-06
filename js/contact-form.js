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
            post_data = {
                'from': atob('Y2x1c3RlcmZpZy5jb20gPHNhbmRib3g4N2JlOWZmMWNhYjA0MDNlOTA5YzhlODljZmY3NGNjNC5tYWlsZ3VuLm9yZw=='),
                'to': atob('c3RlZmFuLnN6YWthbEBjbHVzdGVyZmlnLmNvbQ=='),
                'subject': "clusterfig.com contact form",
                'text': "Name:" + user_name + "\n Email: " + user_email + "\nMessage:" + user_message 
            };

            var url = atob('aHR0cHM6Ly9hcGk6NDE2N2MzODItZGFhZGQyMTJAYXBpLm1haWxndW4ubmV0L3YzL3NhbmRib3g4N2JlOWZmMWNhYjA0MDNlOTA5YzhlODljZmY3NGNjNC5tYWlsZ3VuLm9yZy9tZXNzYWdlcw==')

            //Ajax post data to server
            $.post(url, post_data, function(response){
            
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
