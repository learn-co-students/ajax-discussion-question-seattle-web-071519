const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

let btn = document.querySelector(".btn-primary")
btn.addEventListener("click", handleAJAX)

function handleAJAX(e) {
  let data = fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then( function(data) {
      let jsonData = data
      document.querySelector("#cell").textContent = JSON.stringify(jsonData.results[0].cell)
      console.log(jsonData)
    
    })
  // console.log(data)
}
