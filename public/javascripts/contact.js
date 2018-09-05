/**
 * Created by pradeep on 18/7/16.
 */
function submitForm() {
    //var firstName = document.getElementById("firstName").value;
    //var lastName = document.getElementById("lastName").value;
    //var phone = document.getElementById("phone").value;
    //var email = document.getElementById("email").value;
    //var subject = document.getElementById("subject").value;
    //var message = document.getElementById("message").value;


    var fname = document.form.Name.value,
        lname = document.form.LastName.value,
        email = document.form.Email.value,
        phone = document.form.phone.value,
        subject = document.form.subject.value,
        message = document.form.message.value;
    //sendDetails();
    //
    //function sendDetails() {

    //console.log('name: ', firstName)
    //var dataString = 'name1=' + name + '&email1=' + email + '&subject1=' + subject + '&message1=' + message;

    //console.log("------------", JSON.stringify(entry))
    //var data = { entry };
    var formValidate = checkForm();

    if (formValidate) {

        var data = {
            'entry': {
                'title': fname,
                'lastname': lname,
                'url': "/" + fname + " " + lname,
                'phone': phone,
                'email': email,
                'subject': subject,
                'message': message
            }
        };

        //console.log('data to be sent: ', entry);

        var xhttp = new XMLHttpRequest();
        //xhttp.onreadystatechange = function() {
        //    if (xhttp.readyState == 4 && xhttp.status == 200) {
        //        document.getElementById("demo").innerHTML = xhttp.responseText;
        //    }
        //};
        xhttp.open("POST", "https://api.contentstack.io/v2/content_types/visitors/entries", false);
        xhttp.setRequestHeader("api_key", "blt8b7655dad1fd8b40");
        xhttp.setRequestHeader("authtoken", "blt9da0dcbd2ce77e3a016cd51c");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(data));
        //console.log('making call')
        //alert("Your Messsage Successfully Submited")
        clearFunction();
    }
    //}

    function checkForm() {
        var flag = true;
        var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
        var phonelength = /^\d{10}$/;
        var nameRe  = /^\S[A-Za-z]{2,15}$/;
        // var firstName = fname.match(firstRe);
        // var lastName = lname.match(firstRe);
        // var scountry = document.getElementById("country");
        // var selectedcountry = scountry.options[scountry.selectedIndex].value;
        //
        // var sstate = document.getElementById("state");
        // var selectedstate = sstate.options[sstate.selectedIndex].value;
        //
        // console.log(selectedstate);
        if(!nameRe.test(fname))
        {
            document.form.Name.focus() ;
            document.getElementById("errorBox").innerHTML = "This Field is Required example :Jhon";
            return false;
        }

        if(!nameRe.test(lname))
        {
            document.form.LastName.focus() ;
            document.getElementById("errorBox").innerHTML = "This Field is Required example :Paul";
            return false;
        }

        // if (email == "" )
        // {
        //     document.form.Email.focus();
        //     document.getElementById("errorBox").innerHTML = "Enter the email";
        //     return false;
        // }
        if(!emailRegex.test(email))
        {
            document.form.Email.focus();
            document.getElementById("errorBox").innerHTML = "Enter the valid email";
            return false;
        }

        // if (phone == "" )
        // {
        //     document.form.phone.focus();
        //     document.getElementById("errorBox").innerHTML = "Enter the phone number";
        //     return false;
        // }

        if(!phone.match(phonelength))
        {
            //window.alert("Please Enter Valid 10 Digit Number");
            document.form.phone.focus();
            document.getElementById("errorBox").innerHTML = "Enter the valid phone number of ten digits";
            return false;
        }

        if (subject == "" )
        {
            document.form.subject.focus();
            document.getElementById("errorBox").innerHTML = "Enter the subject";
            return false;
        }

        if (message == "" )
        {
            document.form.message.focus();
            document.getElementById("errorBox").innerHTML = "Enter the Message";
            return false;
        }

        if (fname != '' && lname != '' && email != '' && phone != '' && subject != '' && message != '')
        {
            document.getElementById("errorBox").innerHTML = "Form submitted successfully";
            alert(
                "First Name = " +fname+ "\n" +
                "Last Name = " +lname+ "\n" +
                "Email = " +email+ "\n" +
                "Phone = " +phone+ "\n" +
                "Subject = " +subject+ "\n" +
                "Message = " +message+ "\n"

            );

        }
        else
        {
            flag = true;
        }
        return flag;
    }
    function clearFunction(){
        var fname = document.form.Name.value = "",
            lname = document.form.LastName.value = "",
            email = document.form.Email.value = "",
            phone = document.form.phone.value = "",
            subject = document.form.subject.value = "",
            message = document.form.message.value = "";
        document.getElementById("errorBox").innerHTML = " ";
    }
    return false;
}

