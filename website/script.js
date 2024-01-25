function signUp(){
   let userName = document.getElementById("nama-id").value
   let password = document.getElementById("password-id").value

   const userSignUp = {
      userName: userName,
      password: password
   };

   fetch('https//:localhost:8080/bookCreator/signUp', {
      method: 'POST',
      header: {
         'content-Type': 'application/json'
      },
      body:JSON.stringify(userSignUp)
   })
   .then(Response => Response.json())
   .then(data => {
      console.log(data);
   })
   .catch(error => {
      console.error('Error:', error);
   });

}



function creatorLogin(){
   let userName = document.getElementById("name-id").value
   let password = document.getElementById("password-id").value

   let isCreator = document.getElementById("creatorId")
}

const creatorLogin = {
   userName: userName,
   password: password,
   isCreator: false,
};

   if (isCreator == true && login == true) {
      fetch('https//:localhost:8080/bookCreator/login ', {
         method:'POST' ,
         header: {
            'content-Type': 'application/json'
         },
         body:JSON.stringify(creatorLogin)
      })
      .then(Response => Response.json())
      .then(data => {
      console.log(data);
   })
      .catch(error => {
         console.error('ERROR:', error)
      })
 }


