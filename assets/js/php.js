function emailSend() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;

    var courseName = document.getElementById("c-course_name").value;
    var courseMode = document.getElementById("course_mode").value;
    var batchDate = document.getElementById("c-batch_date").value;

    var body = "Name: " + name + "<br>";
    body += "Mobile: " + mobile + "<br>";
    body += "Email: " + email + "<br>";
    body += "Course Name: " + courseName + "<br>";
    body += "Course Mode: " + courseMode + "<br>";
    body += "Batch Date: " + batchDate + "<br>";
    
    

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "pihicika@clip.lat",
        Password: "E38E2136FE2C426285E1FBBF9BE25E6721A2",
        To: "vcampustech@gmail.com",             
        Subject: "New Enrollment Form Submission",
        Body: body,
        From: "vcampustech@gmail.com"
    }).then(
        message => {
            alert("Form submitted. Thank you!");
            // Optionally, close the modal after submission
            $('#myModal').modal('hide');
        }
    ).catch(
        error => alert("Error submitting form. Please try again later.")
    );
}

document.getElementById("data-science-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    emailSend();
});
