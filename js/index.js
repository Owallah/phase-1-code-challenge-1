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

/*
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
*/

function generatePoints(event) {
    event.preventDefault()

    //get the value entered bty the user
    let speed = document.getElementById("speed-input").value

    //parse the value entered to a floating point number
    let speedFloat = parseFloat(speed)

    //variable to store the result of our control structure
    let result = ""
    
//firdt check if the speed is less than or equal to 70
    if (speedFloat <= 70) {
        result = "Ok"
    }
    /*if not, use the formular speedFloat-70/5 => to get the value of the points.
    then calculate if the points are more than 12 to suspend the license
    */
    else {
        result = `Points: ${(speedFloat-70)/5}`
        if (((speedFloat-70)/5)>12) {
            result = "License suspended"
        }
    }
    //return the result to be displayed in the output area
    return document.querySelector("#points-output").innerHTML = result
}
//call the function
generatePoints()

/*
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

*/

function generateNetSalary(event) {
    event.preventDefault()

    let grossInput = parseFloat(document.getElementById("gross-input").value)
    let benefitsInput = parseFloat(document.getElementById("benefits-input").value)

    let tax = 0
    let nssf = grossInput * (6/100)
    let result = ""

    if (grossInput <= 24000) {
        tax = (grossInput * (10/100))
    }
    else if (grossInput > 24000 && grossInput <= 32333) {
        tax = (grossInput * (25/100))
    }
    else if (grossInput > 32333) {
        tax = (grossInput * (30/100))
    }
    else if (grossInput < 0) {
        result = "Invalid input"
    }

    let nhif = calculateNHIF(grossInput)
    let deductions = tax + nhif + nssf
    let netSalary = grossInput + benefitsInput - deductions
    result = `Your net salary is: ${netSalary}`

    return document.querySelector("#salary-output").innerHTML = result

}

function calculateNHIF(grossInput) {

    let nhif = 0
    let result = ""

    if (grossInput <= 5999) {
        nhif = 150
    }
    else if (grossInput > 5999 && grossInput <= 7999) {
        nhif = 300
    }
    else if (grossInput > 7999 && grossInput <= 11999) {
        nhif = 400
    }
    else if (grossInput > 11999 && grossInput <= 14999) {
        nhif = 500
    }
    else if (grossInput > 14999 && grossInput <= 19999) {
        nhif = 600
    }
    else if (grossInput > 19999 && grossInput <= 24999) {
        nhif = 750
    }
    else if (grossInput > 24999 && grossInput <= 29999) {
        nhif = 850
    }
    else if (grossInput > 29999 && grossInput <= 34999) {
        nhif = 900
    }
    else if (grossInput > 34999 && grossInput <= 39999) {
        nhif = 950
    }
    else if (grossInput > 39999 && grossInput <= 44999) {
        nhif = 1000
    }
    else if (grossInput > 44999 && grossInput <= 49999) {
        nhif = 1100
    }
    else if (grossInput > 49999 && grossInput <= 59999) {
        nhif = 1200
    }
    else if (grossInput > 59999 && grossInput <= 69999) {
        nhif = 1300
    }
    else if (grossInput > 69999 && grossInput <= 79999) {
        nhif = 1400
    }
    else if (grossInput > 79999 && grossInput <= 89999) {
        nhif = 1500
    }
    else if (grossInput > 89999 && grossInput <= 99999) {
        nhif = 1600
    }
    else if (grossInput > 99999) {
        nhif = 1700
    }
    else if (grossInput < 0) {
        result = "Invalid input"
    }

    return nhif;
}

generateNetSalary()
