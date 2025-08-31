let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".image");
document.getElementById("userscore").textContent=userscore;
document.getElementById("compscore").textContent=compscore;
function getcompchoice(){
    let compchoice = Math.floor(Math.random()*3);
    if(compchoice==0){
        return "Rock";
    }
    if(compchoice==1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
function playround(userchoice,compchoice){
    let pyc = document.getElementById("pyc");
    pyc.classList.remove("win","lose");
    if(userchoice===compchoice){
        return "It was a draw You both chose "+compchoice;
    }
    if(userchoice=="Rock"&&compchoice=="Scissors"||userchoice=="Paper"&&compchoice=="Rock"||userchoice=="Scissors"&&compchoice=="Paper")
    {
        pyc.classList.add("win");
        userscore++;
        return "YOU WON!! "+userchoice+" beats "+compchoice;
    }
    else{
        pyc.classList.add("lose");
        compscore++;
        return "YOU LOSE!! "+compchoice+" beats "+userchoice;
    }
}
choices.forEach( choice =>{
choice.addEventListener("click", () =>{
    userchoice=choice.id;
    compchoice=getcompchoice();
    result=playround(userchoice,compchoice);
    document.getElementById("userscore").textContent = userscore;
    document.getElementById("compscore").textContent = compscore;
    document.getElementById("pyc").textContent = result;
});
});