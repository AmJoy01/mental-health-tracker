console.log("This is working")

//Select all 3 lightbulds
let firstBulb = document.querySelector("#lightbulb1")
console.log(firstBulb)

let secondBulb = document.querySelector("#lightbulb2")
console.log(secondBulb)

let thirdBulb = document.querySelector("#lightbulb3")
console.log(thirdBulb)

firstBulb.addEventListener("click", (e)=>{
  // console.log("clicked")
  // console.log(firstBulb.classList)
  // // If the bulb is on turn it off
  // if(firstBulb.classList.contains("active")){
  //   firstBulb.classList.remove("active")
  // }else{
  //   firstBulb.classList.add("active")
  // }
  firstBulb.classList.toggle("active")

})

//Code the remaining 2 bulbs

secondBulb.addEventListener("click", (e)=>{
  console.log("clicked")
  if(secondBulb.classList.contains("active")){
    secondBulb.classList.remove("active")
  }else{
    secondBulb.classList.add("active")
  }
})

thirdBulb.addEventListener("click", (e)=>{
  console.log("clicked")
  if(thirdBulb.classList.contains("active")){
    thirdBulb.classList.remove("active")
  }else{
    thirdBulb.classList.add("active")
  }
})