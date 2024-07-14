let userCount = 0;
let compCount = 0;
let Choice = document.querySelectorAll(".buttonLine");
let user = document.querySelector("#user");

const count = () => {
    user.innerText = userCount;
    comp.innerText = compCount;
}

Choice.forEach ( (Choice) => {
    
    Choice.addEventListener( "click" , () =>{
        console.log("user choice is ", Choice.getAttribute("id"));
        let userChoice = Choice.getAttribute("id");
        let comp = compChoise();
        winner(userChoice , comp);
        count();
    })
})

const compChoise = () => {
    let index = Math.floor(Math.random()*3);
    return Choice[index].getAttribute("id");
}

const winner = (userChoice , comp) => {
    let userwin = false;
    if(userChoice == comp){
        console.log("match is Draw");
        noti.innerText = "Draw Match";
        noti.style.backgroundColor = "black";
    }
    else{
        if(comp == "rock"){
            userwin = userChoice == "scissors" ? false : true;
            console.log(userwin);
        }else if(comp == "paper"){
            userwin = userChoice == "rock" ? false : true;
            console.log(userwin);
        }else{
            userwin = userChoice == "paper" ? false : true;
            console.log(userwin);
        }

        if(userwin){
            noti.innerText = `You win! user: ${userChoice} and computer: ${comp}`;
            noti.style.backgroundColor = "green";
            userCount += 1;
        }else{
            noti.innerText = `You Lose! user: ${userChoice} and computer: ${comp}`;
            noti.style.backgroundColor = "red";
            compCount += 1;
        }
    }

}