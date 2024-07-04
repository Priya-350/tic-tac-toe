const cells=document.querySelectorAll(".cell");
const statustext=document.getElementById("status");
const bt=document.querySelector("#bt");

const wincondition=[
    [0 ,1 , 2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
];
let options=["","","","","","","","",""];
let currentplayer='X';
let running=false;
initialise()
function initialise(){
        cells.forEach(cell=> cell.addEventListener("click",cellclicked));
        bt.addEventListener("click",restart);
        statustext.textContent=`${currentplayer}'s turn`;
        running=true;

}
function cellclicked(){
    const cellindex=this.getAttribute("cellin");
    if(options[cellindex]!="" || !running){
        return;
    }
    updatecell(this,cellindex);
    checkwinner();
}
function updatecell(cell,cellindex){
       options[cellindex]=currentplayer;
       cell.textContent=currentplayer;
      
}
function checkwinner(){

   let win=false;

   for(let i =0;i<wincondition.length;i++){
      const condition=wincondition[i];
      const cella=options[condition[0]];
      const cellb=options[condition[1]];
      const cellc=options[condition[2]];

     if(cella=="" ||cellb==""||cellc==""){
        continue;
     }
      if(cella==cellb && cellb==cellc){
        win=true;
        break;
      }
   }

   if(win){
    statustext.textContent=`${currentplayer} wins!`;
    statustext.classList.add("greentext");
    running=false;

   }
   else if(!options.includes("")){
    statustext.textContent=`Draw!`;
    statustext.classList.add("redtext");
    running=false;
   }
   else{
    changeply();
   }

}
function changeply(){
         currentplayer=(currentplayer=='X')?'O':'X';
         statustext.textContent=`${currentplayer}'s turn`;
}
function restart(){
    statustext.classList.remove("greentext","redtext");
    currentplayer='X';
    options=["","","","","","","","",""];
     
     statustext.textContent=`${currentplayer}'s turn`;
     cells.forEach(cell => cell.textContent="");
     running=true;
   
   
}


