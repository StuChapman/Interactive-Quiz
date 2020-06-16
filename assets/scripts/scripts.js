
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
        
        resultIndex = getIndexOfK(answerList, answerText);
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
        
        resultIndex = getIndexOfK(answerList, answerText);
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
console.log(ev.target.id);
switch (ev.target.id) {
    case 'valuebox': alert("Well Done!");
    break;
    case 'failurebox': alert("Oops!");
    break;
    default: ;
    }
}