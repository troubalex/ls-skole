// JavaScript Document
$(document).ready(function() {
    $("#phpcontactform").submit(function(e) {
        e.preventDefault();
        var name = $("#name");
        var email = $("#email");
        var mobile = $("#mobile");
        var flag = false;
        if (name.val() == "") {
            name.closest(".form-group").addClass("has-error");
            name.focus();
            flag = false;
            return false;
        } else {
            name.closest(".form-group").removeClass("has-error").addClass("has-success");
        } if (email.val() == "") {
            email.closest(".form-group").addClass("has-error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-group").removeClass("has-error").addClass("has-success");
            flag = true;
			$('input[type="submit"]').attr('disabled','disabled');
        }
        var dataString = "name=" + name.val() + "&email=" + email.val() + "&mobile=" + mobile.val();
        $(".loading").fadeIn("slow").html("<p>Loading...</p>");
        $.ajax({
            type: "POST",
            data: dataString,
            url: "contact.php",
            cache: false,
            success: function (d) {
                $(".form-group").removeClass("has-success");
             if(d == 'success') // Message Sent? Show the 'Thank You' message and hide the form
 $('.loading').fadeIn('slow').html('<p><font style="color:#51D026;">Form submitted successfully.</font></p>').delay(3000).fadeOut('slow');
     else
     $('.loading').fadeIn('slow').html('<p><font style="color:#F44A4A;">Oops. Something went wrong.</font></p>').delay(3000).fadeOut('slow');

            }
        });
        return false;
    });
    $("#reset").click(function () {
        $(".form-group").removeClass("has-success").removeClass("has-error");
    });
})



