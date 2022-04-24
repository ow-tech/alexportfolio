
// contact paje script

function sendEmail(){
//   alert("been evoked")
    let email = document.getElementById("content_email").value;
    let name = document.getElementById("content_name").value;
    let body = document.getElementById('contact_message').value;
    let inputs = document.querySelectorAll('input')
    let textarea = document.querySelector('textarea')
    // if ((email ==="") && (body ==="")){
        
    //     swal("Alex Advices", "You need to fill your Email and Message fields and Send Again.", "error");
    // }
    // else{
        Email.send({
            
            SecureToken : "5abb9918-3ad8-41b9-88b5-79d1e526d69e",
            To : 'alexbarasa0723@gmail.com',
            From : "alexmulwabarasa@gmail.com",
            Subject : "Potential Client's/Partner's Name : "+ name  +" email : "+ email,
            Body : body,
            })
            alert('am done')
    // }
};
// const inputs = document.querySelectorAll(".input");