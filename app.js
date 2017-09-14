$(() =>{
    $(document).ready(function(){
        var msg = prompt("Write your player name", "Name");
        if(msg !== null){
            msg = msg.toUpperCase();
            document.getElementById('player').innerHTML = msg + "'S" + " SCORE " + ":";
        }
    })
    let playerScore = document.getElementById('number');
     playerScore = parseInt("0");
    
$('.tenI').click(function() {
    $('.tenI').css('color', 'rgba(9,86,209,1)');
    let question = prompt('Introduced in 1964, this famous Ford model has been in uninterrupted production since.', 'What is...' );
    question = question.toLowerCase();
    if(question === 'mustang'){
        alert('Correct!');
        playerScore += 10; 
         document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
         playerScore -= 10;
         document.getElementById('number').innerHTML = playerScore;
    } 
})
$('.twentyI').click(function() {
    $('.twentyI').css('color', 'rgba(9,86,209,1)');
    let question = prompt('The German manufacturer first to market the Wankel engine in 1964?', 'Who is..');
    question = question.toLowerCase();
    if(question === 'nsu'){
        alert("Correct!");
        playerScore += 20;
        document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 20;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.thirtyI').click(function() {
   $('.thirtyI').css('color', 'rgba(9,86,209,1)');
   let question = prompt("What famous British auto maker produced engines for the venerable Spitfire during WWII?", "Who is...");
   question = question.toLowerCase();
   if(question === 'rolls-royce' || question === 'rollsroyce'){
   alert('Correct!');
   playerScore +=30;
   document.getElementById('number').innerHTML = playerScore;
   }else{
       alert("Wrong answer");
       playerScore -= 30;
       document.getElementById('number').innerHTML = playerScore;
   }
})
$('.fourtyI').click(function() {
    $('.fourtyI').css('color', 'rgba(9,86,209,1)');
    let question = prompt("Founded in 1926. What General Motors Brand was shut down after 84 years?", "Who is...");
    question = question.toLowerCase();
    if(question === 'pontiac'){
    alert('Correct!');
    playerScore +=40;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 40;
        document.getElementById('number').innerHTML = playerScore;
    } 
})
$('.fiftyI').click(function() {
    $('.fiftyI').css('color', 'rgba(9,86,209,1)');
    let question = prompt("What Auto manufacturer can lay claim to Formula One Racing's most successful racing team?", "Who is...");
    question = question.toLowerCase();
    if(question === 'ferrari'){
    alert('Correct!');
    playerScore +=50;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 50;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.tenII').click(function() {
    $('.tenII').css('color', 'rgba(9,86,209,1)');
    let question = prompt("What actor starred as Lloyd Christmas in 1994's Dumb and Dumber?", "Who is...");
    question = question.toLowerCase();
    if(question === 'jim carrey'){
    alert('Correct!');
    playerScore += 10;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 10;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.twentyII').click(function() {
    $('.twentyII').css('color', 'rgba(9,86,209,1)');
    let question = prompt("Michael Keaton, Ben Afflec, and Christian Bale ", "Who is...");
    question = question.toLowerCase();
    if(question === 'batman'){
    alert('Correct!');
    playerScore += 20;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 20;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.thirtyII').click(function() {
    $('.thirtyII').css('color', 'rgba(9,86,209,1)');
    let question = prompt("The Dude abides. Name that movie.", "What is ...");
    question = question.toLowerCase();
    if(question === 'the big lebowski'){
    alert('Correct!');
    playerScore += 30;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 30;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.fourtyII').click(function() {
    $('.fourtyII').css('color', 'rgba(9,86,209,1)');
    let question = prompt("This 1971 classic starred James Taylor and Dennis Wilson", "What is ...");
    question = question.toLowerCase();
    if(question === 'two-lane blacktop' || question === 'two lane blacktop'){
    alert('Correct!');
    playerScore += 40;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 40;
        document.getElementById('number').innerHTML = playerScore;
    }
})    
$('.fiftyII').click(function() {
    $('.fiftyII').css('color', 'rgba(9,86,209,1)');
    let question = prompt("Christian Slater and Patricia Arquette played unlikely lovers in this 1993 cult classic?", "What is...");
    question = question.toLowerCase();
    if(question === 'true romance'){
    alert('Correct!');
    playerScore += 50;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 50;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.tenIII').click(function() {
    $('.tenIII').css('color', 'rgba(9,86,209,1)');
    let question = prompt('The Johnny Cash hit "A Boy Named Sue" was released in what year?', 'What is...');
    question = question.toString();
    if(question === '1969'){
    alert('Correct!');
    playerScore += 10;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 10;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.twentyIII').click(function() {
    $('.twentyIII').css('color', 'rgba(9,86,209,1)');
    let question = prompt("Land of 1000 Dances was performed by what artist?", "Who is...");
    question = question.toLowerCase();
    if(question === 'wilson pickett'){
    alert('Correct!');
    playerScore += 20;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 20;
        document.getElementById('number').innerHTML = playerScore;
    }
})    
$('.thirtyIII').click(function() {
    $('.thirtyIII').css('color', 'rgba(9,86,209,1)');
    let question = prompt("Gordon Lightfoot released this hit in 1974", "What is....");
    question = question.toLowerCase();
    if(question === 'sundown'){
    alert('Correct!');
    playerScore += 30;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 30;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.fourtyIII').click(function() {
    $('.fourtyIII').css('color', 'rgba(9,86,209,1');
    let question = prompt("The King of Pop began his solo career in 1971", "Who is...");
    question = question.toLowerCase();
    if(question === 'michael jackson'){
    alert('Correct!');
    playerScore += 40;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 40;
        document.getElementById('number').innerHTML = playerScore;
    }
})    
$('.fiftyIII').click(function() {
    $('.fiftyIII').css('color', 'rgba(9,86,209,1)');
    let question = prompt("This five time grammy award winner got more out of rehab than she expected", "Who is...");
    question = question.toLowerCase();
    if(question === 'amy winehouse'){
    alert('Correct!');
    playerScore += 50;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 50;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.tenIV').click(function() {
    $('.tenIV').css('color', 'rgba(9,86,209,1)');
    let question = prompt("The birthplace of basketball", "What is...");
    question = question.toLowerCase();
    if(question === 'springfield, massachusetts' || 'springfield massachusetts'){
    alert('Correct!');
    playerScore += 10;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 10;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.twentyIV').click(function() {
    $('.twentyIV').css('color', 'rgba(9,86,209,1)');
    let question = prompt("This Missouri city shares the same name as Mary Shelley novel.", "What is...");
    question = question.toLowerCase();
    if(question === 'frankenstien'){
    alert('Correct!');
    playerScore += 20;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 20;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.thirtyIV').click(function() {
    $('.thirtyIV').css('color', 'rgba(9,86,209,1)');
    let question = prompt('The 1979 nuclear accident on Three Mile Island is located where?', "What is...");
    question = question.toLowerCase();
    if(question === 'londonderry township'){
    alert('Correct!');
    playerScore += 30;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 30;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.fourtyIV').click(function() {
    $('.fourtyIV').css('color', 'rgba(9,86,209,1)');
    let question = prompt("This Wyoming city is known for the smallest population in the US.", "What is...");
    question = question.toLowerCase();
    if(question === 'buford'){
    alert('Correct!');
    playerScore += 40;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 40;
        document.getElementById('number').innerHTML = playerScore;
    }
})    
$('.fiftyIV').click(function() {
    $('.fiftyIV').css('color', 'rgba(9,86,209,1)');
    let question = prompt("The first ferris wheel was displayed at the 1893 Worlds Fair in this city.", "What is...");
    question = question.toLowerCase();
    if(question === 'chicago'){
    alert('Correct!');
    playerScore += 50;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 50;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.tenV').click(function() {
    $('.tenV').css('color', 'rgba(9,86,209,1)');
    let question = prompt("This sale of this backyard game was banned by the Consumer Product Safety Comission in 1988", "What is...");
    question = question.toLowerCase();
    if(question === 'yard darts' || 'lawn darts'){
    alert('Correct!');
    playerScore += 10;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 10;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.twentyV').click(function() {
    $('.twentyV').css('color', 'rgba(9,86,209,1)');
    let question = prompt("A popular pool game sharing the name of a 13th century Venetian trader", "Who is...");
    question = question.toLowerCase();
    if(question === 'marco polo'){
    alert('Correct!');
    playerScore += 20;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 20;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.thirtyV').click(function() {
    $('.thirtyV').css('color', 'rgba(9,86,209,1)');
    let question = prompt("This board game features well know characters such as Colonel Mustard", "What is...");
    question = question.toLowerCase();
    if(question === 'clue'){
    alert('Correct!');
    playerScore += 30;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 30;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.fourtyV').click(function() {
    $('.fourtyV').css('color', 'rgba(9,86,209,1)');
    let question = prompt("Played with cards. To win this game of chance the player must get as close to 21 without going over", "What is...");
    question = question.toLowerCase();
    if(question === 'black jack'){
    alert('Correct!');
    playerScore += 40;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 40;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.fiftyV').click(function() {
    $('.fiftyV').css('color', 'rgba(9,86,209,1)');
    let question = prompt("Often played with cars. This game has dire consequesces if neiter player yeilds", "What is...");
    question = question.toLowerCase();
    if(question === 'chicken'){
    alert('Correct!');
    playerScore += 50;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 50;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.tenVI').click(function() {
    $('.tenVI').css('color', 'rgba(9,86,209,1)');
    let question = prompt("The most visited country in the world", "What is...");
    question = question.toLowerCase();
    if(question === 'france'){
    alert('Correct!');
    playerScore += 10;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 10;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.twentyVI').click(function() {
    $('.twentyVI').css('color', 'rgba(9,86,209,1');
    let question = prompt("If you would like to see the only royal palace in the US, you might want to plan a trip to this exotic local", "What is...");
    question = question.toLowerCase();
    if(question === 'honolulu'){
    alert('Correct!');
    playerScore += 20;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 20;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.thirtyVI').click(function() {
    $('.thirtyVI').css('color', 'rgba(9,86,209,1)');
    let question = prompt("The San Alfonso del Mar resort in what country has the worlds largest swimming pool", "What is...");
    question = question.toLowerCase();
    if(question === 'chile'){
    alert('Correct!');
    playerScore +=30;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 30;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.fourtyVI').click(function() {
    $('.fourtyVI').css('color', 'rgba(9,86,209,1)');
    let question = prompt("Once a French territory, this North African country is home to a large portion of the Saharan Desert", "What is...");
    question = question.toLowerCase();
    if(question === 'morocco'){
    alert('Correct!');
    playerScore += 40;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 40;
        document.getElementById('number').innerHTML = playerScore;
    }
})
$('.fiftyVI').click(function() {
    $('.fiftyVI').css('color', 'rgba(9,86,209,1)');
    let question = prompt("The largest country in the world whose flag is red, white, and blue", "What is...");
    question = question.toLowerCase();
    if(question === 'russia'){
    alert('Correct!');
    playerScore += 50;
    document.getElementById('number').innerHTML = playerScore;
    }else{
        alert("Wrong answer");
        playerScore -= 50;
        document.getElementById('number').innerHTML = playerScore;
    }
})
});
/*function click() {
    butClicks = 0;
    
}
}*/

































    
