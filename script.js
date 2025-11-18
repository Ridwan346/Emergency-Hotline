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
       console.log(p1)
       let p2 =btn.parentNode.parentNode.childNodes[7].textContent
       console.log(p2)
       alert(`${p1}
        ${p2}`)
        let coin= document.getElementById("coin").textContent
        let int = parseInt(coin)
        int = int - 20
        document.getElementById("coin").innerText = int;
        let nw = document.createElement("div")
        nw.innerHTML=` <div class="flex justify-between m-4">
            <div><h1 class="font-bold">${p1}</h1>
                <p>${p2}</p></div>
                <h1>${new Date().toLocaleTimeString()}</h1>
         </div>`
         document.getElementById("side").appendChild(nw)
    })
)
