const SendMail=()=>{
    let params={
        fullname: document.getElementById("fullname").value,
        emailId : document.getElementById("emailId").value,
        phoneNumber : document.getElementById("phoneNumber").value
    }
    emailjs.send("service_6y6bz4m","template_51uxwtw",params).then(function(res){
        if(res.status==200){alert("Nous avons recu votre requete! " )}else alert("error",res.status)
    })
}