(()=>{
    "use strict";
    const e = new class{
        create(e){
            const t=document.createElement("h1");
            t.innerText=e,
            t.classList.add("main-title"),
            document.querySelector("body").appendChild(t)
        }};
        
        e.create("Primeira página")
        e.create("Segunda página")
})();