//nav love count
document.getElementById("love").addEventListener("click",function(){
    let a = document.getElementById("spn").textContent
    let b = parseInt(a)
    b++
    document.getElementById("spn").textContent = b;
})

//card section
let card_btn = document.getElementsByClassName("btn-card")
console.log(card_btn) 
for(let btn of card_btn)(
    btn.addEventListener("click",function(){
       let p1 = btn.parentNode.parentNode.childNodes[3].textContent
      // console.log(p1)
       let p2 =btn.parentNode.parentNode.childNodes[7].textContent
       //console.log(p2)
       alert(`📞${p1} ${p2}`)
        let coin= document.getElementById("coin").textContent
        let int = parseInt(coin)
        int = int - 20
        document.getElementById("coin").innerText = int;
        if(int === 0){
            alert("❌you dont have enough coin")
            return
        }
        let nw = document.createElement("div")
        nw.innerHTML=` <div class="flex justify-between m-4">
            <div><h1 class="font-bold">${p1}</h1>
                <p>${p2}</p></div>
                <h1>${new Date().toLocaleTimeString()}</h1>
         </div>`
         document.getElementById("side").appendChild(nw)
    })
)
document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("side").innerText =""
})

//love icone
let lv = document.getElementsByClassName("lv");
//console.log(lv)
for(let love of lv){
    love.addEventListener("click",function (){
        let a = document.getElementById("spn").textContent
    let b = parseInt(a)
    b++
    document.getElementById("spn").textContent = b;
    })
}

//copy buttton
let cy = document.getElementsByClassName("cy")
//console.log(cy)
for(let copy of cy){
  copy.addEventListener("click",function(){
    alert("Do you want to copy")
    let a = document.getElementById("to").textContent
    let b = parseInt(a)
    b++
    document.getElementById("to").textContent = b;
    let p2 =copy.parentNode.parentNode.childNodes[7].textContent
    //console.log(p2)
    navigator.clipboard.writeText(p2)
  })
}