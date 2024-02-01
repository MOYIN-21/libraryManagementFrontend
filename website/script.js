

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



// let collect = document.getElementById("creatorId")
 //function creatorButton(){
   // if (creator == "Creator") {
   //   alert("You clicked on creators' button")
  // }



// function login(){
//   var isCreator = document.getElementById("creatorId");
//   var isReader = document.getElementById("readerId")

//   if (isCreator.checked) {
//    alert("wow")
//   }
//   else if(isReader.checked){
//    alert("yaya")
//   }

// }


var isCreator = false;
var isReader = false;

function login(){
   // const creator =
   // var isCreator = document.getElementById("creatorId");  
   // var isCreator = document.getElementById("readerId");
   if(isCreator===true){
      alert("YAAY!")
    window.location.href = "./creatorDashBoard.html" 
   }
   else if(isReader===true){
      alert("WOW!")
     window.location.href="./readerDashBoard.html" 
   }
}


function creatorButton(){
   isCreator = true;
   isReader = false;
}

function readerButton(){
   isCreator = false;
   isReader = true;
}























// function login() {
//    var username = document.getElementById('username').value;
//    var password = document.getElementById('password').value; 
//    var radioValue = document.querySelector('input[name="radio"]:checked').value;

//    if (radioValue === 'creator') {
//        window.location.href = './creatorInterface.html';
//        fetch('https//:localhost:8080/bookCreator/creatorLogin ', {
//                method:'POST' ,
//                 header: {
//                    'content-Type': 'application/json'
//                 },
//                 body:JSON.stringify(creatorLogin)
//              })
//                 .then(Response => Response.json())
//                 .then(data => {
//                 console.log(data);
//              })
//                 .catch(error => {
//                 console.error('ERROR:', error)
//              })
  
//    }
// }



// function choose(){
//    let isCreator = creatorId;
//    let isReader = readerId;
//    isCreator == false,
//    isReader == false

//    if(isCreator == true){
//       isReader = false;
//    }
//    else(isReader == true);{
//       isCreator == false;

//    }
// }

// const creatorLogin = {
//    userName: userName,
//    password: password
// };


// function callCreatorApi(){
//    fetch('https//:localhost:8080/bookCreator/creatorLogin ', {
//       method:'POST' ,
//       header: {
//          'content-Type': 'application/json'
//       },
//       body:JSON.stringify(creatorLogin)
//    })
//       .then(Response => Response.json())
//       .then(data => {
//       console.log(data);
//    })
//       .catch(error => {
//       console.error('ERROR:', error)
//    })
// }


// const readerLogin = {
//    userName: userName,
//    password: password
// };

// function callReaderApi(){
//    fetch('https//:localhost:8080/bookReader/readerLogin ', {
//       method:'POST' ,
//       header: {
//          'content-Type': 'application/json'
//       },
//       body:JSON.stringify(readerLogin)
//    })
//       .then(Response => Response.json())
//       .then(data => {
//       console.log(data);
//    })
//       .catch(error => {
//       console.error('ERROR:', error)
//       })
// }
   


