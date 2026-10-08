let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let renewbtn= document.querySelector("#renew-btn");
let msgContainer=document.querySelector(".msgContainer");
let msg= document.querySelector("#msg");
let turnO =true;//playerX , playerY

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
const resetGame=()=> {
    turnO =true;
enaableBoxes();
msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO===true){ //playerX
        box.innerText="O";
        turnO=false;
        }else{ //playerY
             box.innerText="X";
             turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
}
);
const disableBoxes=()=> {
    for(let box of boxes ){
        box.disabled=true;
    }
}
const enaableBoxes=()=> {
    for(let box of boxes ){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(Winner)=>{
    msg.innerText = `Wohoo! Winner is ${Winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}
const checkWinner= ()=> {
    for(pattern of winPatterns){
        console.log([pattern[0]],[pattern[1]],[pattern[2]]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText);
            let pos1Val=  boxes[pattern[0]].innerText;
            let pos2Val=  boxes[pattern[1]].innerText;
            let pos3Val=  boxes[pattern[2]].innerText;
            if(pos1Val != ""&&pos2Val != ""&&pos3Val !=""){
                if(pos1Val==pos2Val&&pos2Val==pos3Val){
                    console.log("Winner",pos1Val);

                    showWinner(pos1Val);
            
                }
            }
    }
};

renewbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


const themeBtn = document.querySelector("#theme-toggle");

const applyTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
    themeBtn.innerText = theme === "light" ? "🌙" : "☀️";
    try { localStorage.setItem("theme", theme); } catch (e) {}
};

let savedTheme = "dark";
try { savedTheme = localStorage.getItem("theme") || "dark"; } catch (e) {}
applyTheme(savedTheme);

themeBtn.addEventListener("click", () => {
    applyTheme(document.body.getAttribute("data-theme") === "light" ? "dark" : "light");
});




