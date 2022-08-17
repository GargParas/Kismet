
document.querySelector("button").addEventListener("click",function(){
    
    //player1
    var rand1 = Math.floor(Math.random()*6)+1;
    var img = "images/dice"+rand1+".png";
    document.querySelectorAll("img")[0].setAttribute("src",img);

    //player2
    var rand2 = Math.floor(Math.random()*6)+1;
    img = "images/dice"+rand2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",img);

    //result
    var res = "";
    if(rand1===rand2)
        res = "Draw!";
    else if(rand1>rand2)
        res = "Player1 is the Winner!";
    else
        res = "Player2 is the Winner!";

    document.querySelector("h1").innerHTML = res;
});