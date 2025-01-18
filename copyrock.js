let Computer_choice = ' ';
let User_choice = ' ';
let result = ' ';
let autoplayInterval = null;

function pickcomputermove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3 && randomNumber >= 0) {
        Computer_choice = 'Rock';
    }
    if (randomNumber < 2 / 3 && randomNumber >= 1 / 3) {
        Computer_choice = 'Paper';
    }
    if (randomNumber < 1 && randomNumber >= 2 / 3) {
        Computer_choice = 'Scissor';
    }
}
function pickuserrmove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3 && randomNumber >= 0) {
        User_choice = 'Rock';
    }
    if (randomNumber < 2 / 3 && randomNumber >= 1 / 3) {
        User_choice = 'Paper';
    }
    if (randomNumber < 1 && randomNumber >= 2 / 3) {
        User_choice = 'Scissor';
    }
}


const score = {
    wins: 0,
    loses: 0,
    ties: 0,
};
function playgame(){
    pickcomputermove();
    if(User_choice==Computer_choice)
    {
        result='Its a tie';
    }else if(User_choice==='Rock'&& Computer_choice==='Paper')
    {
        result='Computer wins';
    }else if(User_choice==='Paper'&&Computer_choice==='Scissor')
    {
        result='Computer wins';
    }else if(User_choice==='Scissor'&&Computer_choice==='Rock')
    {
        result='Computer wins';
    }else{
        result='User wins!!';
    }
    points();
}

function points() {
    

    if (result === 'Computer wins') {
        score.loses++;
    }
    if (result === 'User wins!!') {
        score.wins++;
    }
    if (result === 'Its a tie') {
        score.ties++;
    }
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-choice').innerHTML = `<h1>You <img src="${User_choice}.png" alt=""> <img src="${Computer_choice}.png" alt=""> Computer</h1>`;
    document.querySelector('.js-score').innerHTML = `Wins:${score.wins},Losses:${score.loses},Ties:${score.ties}`;
}
function autoplay(){
    if(autoplayInterval)
    {
        clearInterval(autoplayInterval);
    }
    autoplayInterval = setInterval(function(){
        pickuserrmove();
          playgame();
    },1000);
}
function stopautoplay(){
    if(autoplayInterval)
    {
        clearInterval(autoplayInterval);
        autoplayInterval=null;
    }
}