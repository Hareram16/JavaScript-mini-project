let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");
 btn.addEventListener("click",function()
{
    let ele=document.createElement("li");
    ele.innerText=inp.value;
    
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("del");
    ele.append(delbtn);
   
    ul.appendChild(ele);
    inp.value="";
    });

// let del=document.querySelectorAll(".del");
// for(delt of del)
// {
//     delt.addEventListener("click",function()
// {
//     let par=this.parentElement;
//     par.remove();

// });
// }
ul.addEventListener("click",function(event)
{
    let par=event.target.parentElement;
    par.remove();
    
})
