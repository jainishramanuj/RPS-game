function rpsFun(yourChoice) {

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomRps());
    // console.log(humanChoice, botChoice);

    results = decideWinner(humanChoice, botChoice); //[1,0] or [0,1] or [0.5,0.5]
    // console.log(results);

    message = finalMessage(results); // {message: 'You won', color: 'green'}
    // console.log(message);

    rpsFrontEnd(humanChoice, botChoice, message);
}

function randomRps() {
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(hc, bc) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rpsDatabase[hc][bc];
    var computerScore = rpsDatabase[bc][hc];

    return [yourScore, computerScore];
}

function finalMessage(rslt) {
    if(rslt[0] === 0) {
        return {'message': 'You Loose :(', 'color': 'red'};
    } else if(rslt[0] === 1) {
        return {'message': 'You Won :)', 'color': 'green'};
    } else {
        return {'message': 'You Tied : /', 'color': 'darkgoldenrod'};
    }
}

function rpsFrontEnd(hc, bc, fm){
    var imgDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // removing all the img
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var hdiv = document.createElement('div');
    var bdiv = document.createElement('div');
    var mdiv = document.createElement('div');

    // hdiv is made ineerHtml part to put anywhere.
    hdiv.innerHTML = "<h2 style='background-color: white; padding: 5px 10px 10px; border-radius: 5px; color: #53B8BB; border: 2px solid #53B8BB; font-size: 20px; font-weight: 600;'>Your Choice</h2> <br> <img src='" + imgDatabase[hc] + "' style='box-shadow: -10px 10px 40px black;'>"
    // bdiv is made innerHTMl part to put anywhere.
    bdiv.innerHTML = "<h2 style='background-color: white; padding: 5px 10px 10px; border-radius: 5px; color: #53B8BB; border: 2px solid #53B8BB; font-size: 20px; font-weight: 600;'>Bot's Choice</h2> <br> <img src='" + imgDatabase[bc] + "' style='box-shadow: 10px 10px 40px black;'>"
    // mdiv is amde for....
    mdiv.innerHTML = "<h1 style='color:white; background-color:" + fm['color'] + "; border-radius: 5px; font: 60px bold; padding: 30px; margin: 50px 0 0 0 ; box-shadow: 0 0 30px gray'>" + fm['message'] + "</h1> <br> <button id='ref-btn' onclick='refresh()'>Try Again!</button>"

    document.getElementById('flex-box-id').appendChild(hdiv);
    document.getElementById('flex-box-id').appendChild(mdiv);
    document.getElementById('flex-box-id').appendChild(bdiv);
}

function refresh(){
    location.reload();
}