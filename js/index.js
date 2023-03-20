/*
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
*/

//document.querySelector("#score-output").innerHTML = `The student's grade is: `
function generateGrade(event) {

    //preventing the default refresh of the page
    event.preventDefault()

    //get the value entered on the score input area
    let score = document.getElementById("score-input").value;

    /*
    value entered is a string, therefore we need to convert it to a floating point value
    */
    let scoreNumber = parseFloat(score)

    // this variable will hold our grade
    let output = ""
    
    /*
    this control structure checks the condition of our scores entered.
    This is as stipulated on the question
    */
    if (scoreNumber > 79 && scoreNumber <= 100) {
        output = `A`;
    }
    else if (scoreNumber >= 60 && scoreNumber <= 79) {
        output = `B`;
    }
    else if (scoreNumber >= 49 && scoreNumber <= 59) {
        output = `C`;
    }
    else if (scoreNumber >= 40 && scoreNumber < 49) {
        output = `D`;
    }
    else if (scoreNumber >= 0 && scoreNumber < 40) {
        output = `E`;
    }
    //any value that's not within this range is flaged as invalid
    else{
        output = `Invalid`
    }
    return document.querySelector("#score-output").innerHTML = `The student's grade is: ${output}`;
}
//calling the function
generateGrade();
