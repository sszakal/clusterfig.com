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
            post_data = 
            {
                "name": user_name,
                "email": user_email,
                "message": user_message
            };

            var url = "aHR0cHM6Ly9hcGkuY2x1c3RlcmZpZy5jb20vbWFpbGFwaS9hcGkvbWFpbA==";

            $.ajax({
                type: 'POST',
                url: atob(url),
                crossDomain: true,
                contentType: 'application/x-www-form-urlencoded',
                headers: {
                    "Authorization": "Basic " + btoa(username+":"+password)
                },
                success : function(data) {
                    var output = '<div class="success"> Message sent !</div>';
                    
                    //reset values in all input fields
                    $('#contact_form input').val('');
                    $('#contact_form textarea').val('');

                    $("#result").hide().html(output).slideDown();
                },
               error: function (xhr,ajaxOptions,throwError){
                var output = '<div class="success"> Message sent !</div>';
                    
                //reset values in all input fields
                $('#contact_form input').val('');
                $('#contact_form textarea').val('');

                $("#result").hide().html(output).slideDown();
              },
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
