
// index.html scripts

let attemptCount = 0;
        
function checkAnswers() {
    let answerScore = 0
    let answerList = 
        ['dummy', 
        ['inventory', 'excess inventory'], 
        ['transportation', 'unnecessary transportation'], 
        ['motion', 'extra motion'], 
        ['waiting', 'waiting time'], 
        ['overproduction', 'over-production'],
        ['overprocessing', 'over-processing', 'over processing', 'extra processing', 'extra-processing', 'excess processing'], 
        ['defects', 'errors'], 
        ['skills', 'talent', 'unused talent', 'non-utilised-talent', 'non utilised talent', 'unutilised talents', 'non-utilized-talent', 'non utilized talent', 'unutilized talents']];
    
    for (let answerCount = 1; answerCount <= 8; answerCount++) { 
        let questionString = "waste" + answerCount;
        console.log(questionString);
        let answerVal = document.getElementById(questionString);
        let answerText = answerVal.value.toLowerCase();
        console.log(answerText);
        
        resultIndex = getIndexOfK(answerList, answerText.trim());
        console.log(resultIndex);
        if (resultIndex != undefined && answerText != "") {
            console.log('found it');
            let answerIndex = resultIndex[0];
            console.log(answerIndex);
            answerList.splice(answerIndex, 1);
            console.log(answerList);
            ++answerScore;
            if (answerScore == 8){
                alert("Well Done! You have completed the quiz. " +
                        "It took you: " + (attemptCount + 1) + " attempts.");
                document.getElementById('buttonNext').style.display = "inline";
                resetAnswers();
                return;
            }
            console.log("Answer Score is: " + answerScore);
        }else {
            console.log('cannot find it');
        }
    }

    ++attemptCount;
    answerSpanText = document.getElementById("answerSpan");
    answerSpanText.innerText = answerScore + " correct - from: " + attemptCount + " attempt(s).";
    
    if (attemptCount == 3){
        if (confirm("Do you need a clue?")) {
            alert("Remember TIMWOODS ...");
            }
    }
    
    if (attemptCount >= 5){
        checkColors();
    }

}

function resetAnswers() {
    attemptCount = 0;
    let answerScore = 0;
    let answerList = ['dummy', 
                        ['inventory', 'excess inventory'], 
                        ['transportation', 'unnecessary transportation'], 
                        ['motion', 'extra motion'], 
                        ['waiting', 'waiting time'], 
                        ['overproduction', 'over-production', 'over production'],
                        ['overprocessing', 'over-processing', 'over processing', 'extra processing', 'extra-processing', 'excess processing'], 
                        ['defects', 'errors'], 
                        ['skills', 'talent', 'unused talent', 'non-utilised-talent', 'non utilised talent', 'unutilised talents', 'non-utilized-talent', 'non utilized talent', 'unutilized talents']];
    console.log(answerList);
    for (let answerCount = 1; answerCount <= 8; answerCount++) { 
        let questionString = "waste" + answerCount;
        let answerVal = document.getElementById(questionString);
        answerVal.value = "";
        document.getElementById(questionString).style.backgroundColor = "white";
    }
    answerSpanText = document.getElementById("answerSpan");
    console.log(answerSpanText);
    answerSpanText.innerText = "";
}

function checkColors() {
    let answerScore = 0;
    let answerList = 
        ['dummy', 
        ['inventory', 'excess inventory'], 
        ['transportation', 'unnecessary transportation'], 
        ['motion', 'extra motion'], 
        ['waiting', 'waiting time'], 
        ['overproduction', 'over-production'],
        ['overprocessing', 'over-processing', 'over processing', 'extra processing', 'extra-processing', 'excess processing'], 
        ['defects', 'errors'], 
        ['skills', 'talent', 'unused talent', 'non-utilised-talent', 'non utilised talent', 'unutilised talents', 'non-utilized-talent', 'non utilized talent', 'unutilized talents']];
    
    for (let answerCount = 1; answerCount <= 8; answerCount++) { 
        let questionString = "waste" + answerCount;
        console.log(questionString);
        let answerVal = document.getElementById(questionString);
        let answerText = answerVal.value.toLowerCase();
        console.log(answerText);
        
        resultIndex = getIndexOfK(answerList, answerText.trim());
        console.log(resultIndex);
        if (resultIndex != undefined && answerText != "") {
            console.log('found it');
            let answerIndex = resultIndex[0];
            console.log(answerIndex);
            answerList.splice(answerIndex, 1);
            console.log(answerList);
            document.getElementById(questionString).style.backgroundColor = "limegreen";
            ++answerScore;
        }else {
            console.log('cannot find it');
        }
    }
    ++attemptCount;
}

function getIndexOfK(arr, k) { //credit to https://jsfiddle.net/wao20/Lct1de56/ via https://stackoverflow.com/questions/16102263/to-find-index-of-multidimensional-array-in-javascript
    for (var i = 0; i < arr.length; i++) {
        var index = arr[i].indexOf(k);
        if (index > -1) {
        return [i, index];
        }
    }
}


// pagetwo.html scripts

let dragOneScore = 0;
let dragTwoScore = 0;
let dragThreeScore = 0;
let dragFourScore = 0;
let dragFiveScore = 0;
let dragSixScore = 0;

function allowDrop(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.preventDefault();
}

function drag(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {// credit to https://www.w3schools.com/HTML/html5_draganddrop.asp
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    console.log(data + ": " + ev.target.id);

    switch (data) {
        case 'drag1': dragOneScore = ev.target.id;
        break;
        case 'drag2': dragTwoScore = ev.target.id;
        break;
        case 'drag3': dragThreeScore = ev.target.id;
        break;
        case 'drag4': dragFourScore = ev.target.id;
        break;
        case 'drag5': dragFiveScore = ev.target.id;
        break;
        case 'drag6': dragSixScore = ev.target.id;
        break;
        default: ;
    }
}

function checkAnswersDnD() {
    if (dragOneScore.startsWith('failure')) {
        console.log("correct");
        document.getElementById("drag1").style.backgroundColor = "green";
        document.getElementById("drag1").style.color = "white";
    }else{
        document.getElementById("drag1").style.backgroundColor = "red";
        document.getElementById("drag1").style.color = "white";
    }
    if (dragTwoScore.startsWith('value')) {
        console.log("correct");
        document.getElementById("drag2").style.backgroundColor = "green";
        document.getElementById("drag2").style.color = "white";
    }else{
        document.getElementById("drag2").style.backgroundColor = "red";
        document.getElementById("drag2").style.color = "white";
    }
    if (dragThreeScore.startsWith('value')) {
        console.log("correct");
        document.getElementById("drag3").style.backgroundColor = "green";
        document.getElementById("drag3").style.color = "white";
    }else{
        document.getElementById("drag3").style.backgroundColor = "red";
        document.getElementById("drag3").style.color = "white";
    }
    if (dragFourScore.startsWith('failure')) {
        console.log("correct");
        document.getElementById("drag4").style.backgroundColor = "green";
        document.getElementById("drag4").style.color = "white";
    }else{
        document.getElementById("drag4").style.backgroundColor = "red";
        document.getElementById("drag4").style.color = "white";
    }
    if (dragFiveScore.startsWith('failure')) {
        console.log("correct");
        document.getElementById("drag5").style.backgroundColor = "green";
        document.getElementById("drag5").style.color = "white";
    }else{
        document.getElementById("drag5").style.backgroundColor = "red";
        document.getElementById("drag5").style.color = "white";
    }
    if (dragSixScore.startsWith('value')) {
        console.log("correct");
        document.getElementById("drag6").style.backgroundColor = "green";
        document.getElementById("drag6").style.color = "white";
    }else{
        document.getElementById("drag6").style.backgroundColor = "red";
        document.getElementById("drag6").style.color = "white";
    }
}

// pagethree.html scripts
//credit to: https://bearnithi.com/2019/12/12/understanding-canvas-draw-a-line-in-canvas-using-mouse-and-touch-events-in-javascript/

