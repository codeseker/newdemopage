// // fetch api
// // url method -> get post delete put/patch

// // fetch(url).then(),then().catch();

// // async await
// // always use them with functions
// // funtion -> async task -> await

// let result = document.getElementById("result");

// let getData = async () => {
//   let response = await fetch("https://api.github.com/users");
//   let jsonAns = await response.json();

//   jsonAns.forEach((element) => {
//     let str = `<div class="image">
//   <img src="${element.avatar_url}" alt="">
// </div>
// <div class="name">
//   <h4>${element.login}</h4>
// </div>`;

// result.innerHTML += str;
//   });
// };

// getData();


let quote = document.getElementById('quote');

let getQuote = document.getElementById('getQuote');
let url = "https://quotes15.p.rapidapi.com/quotes/random/"
let options = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': 'f2d5629a96msh54d76e6a9ff8185p1b5e79jsneda93256a7d9',
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
  }
}
getQuote.addEventListener('click', async ()=>{


  let response = await fetch(url, options );
  let jsonResponse = await response.json();
 
  quote.innerText = jsonResponse.content;



})
