
// contact paje script

function sendEmail(){
//   alert("been evoked")
    let email = document.getElementById("content_email").value;
    let name = document.getElementById("content_name").value;
    let body = document.getElementById('contact_message').value;
    let inputs = document.querySelectorAll('input')
    let textarea = document.querySelector('textarea')
    // Swal.fire(
    //     'Good job!',
    //     'You clicked the button!',
    //     'success'
    //   )
    // if ((email ==="") && (body ==="")){
        // console.log(email, name, body)
        
    //     swal("Alex Advices", "You need to fill your Email and Message fields and Send Again.", "error");
    // }
    // else{
        // Email.send({
            
        //     SecureToken : "fb7d7c70-2d88-4db8-915e-585379cbf799",
        //     To : 'alexbarasa0723@gmail.com',
        //     From : "alexmulwabarasa@gmail.com",
        //     Subject : "portfolio email from. Name : "+ name  +" email : "+ email,
        //     Body : body,
        //     })
        //     alert('am done')
    // }
};
// const inputs = document.querySelectorAll(".input");