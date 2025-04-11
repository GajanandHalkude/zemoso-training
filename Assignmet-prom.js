// function getData(uId) {
//         return new Promise(function (resolve, reject) {
//           // simulate fetching data from REST endpoint
//           setTimeout(() => {
//             console.log("Fetched the data!");
//             resolve("skc@gmail.com");
//           }, 4000);
//         });
//       }

//       console.log("start");
//       getData("skc")
//         .then((email) => { console.log("Email id of the user id is: " + email)
//         console.log("end")})
    
        function getData(uId) {
          
          return new Promise(function (resolve, reject) {
            // simulate fetching data from REST endpoint
            setTimeout(() => {
              console.log("Fetched the data!");
              resolve("skc@gmail.com");
            }, 4000);
          });
        }

        async function getdata()
        {
          console.log("start");
          let email= await getData("sky")
          console.log("Email id of the user id is: " + email)
          console.log("end")
        }
        getdata()