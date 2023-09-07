let paragraph=document.getElementById('para');
paragraph.addEventListener("mouseover",(e)=>{
    let list=paragraph.innerText.split(" ");
    list.forEach(element => {
        if(element==element.toUpperCase()){
            const span = document.createElement("span");
            span.textContent = element;
            span.classList.add("mark");
            paragraph.innerHTML = paragraph.innerHTML.replace(element, span.outerHTML);

        }
        
    })

})
paragraph.addEventListener("mouseout",(e)=>{

   paragraph.innerHTML=paragraph.innerText
        }
        
)