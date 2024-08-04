const step1Container = document.querySelector(".step1-container .step1");
const step2Container = document.querySelector(".step2-container .step2");
const result = document.querySelector(".finalContainer .result");
const answers = document.querySelector(".circle-answer-container");

const domain = document.querySelector(".domain");
const range = document.querySelector(".range");
const radiusGiven = document.querySelector(".radiusGiven");
const sign1 = document.querySelector(".sign1");
const sign2 = document.querySelector(".sign2");

 
function transformSF(){
    const xVal = parseFloat(document.querySelector(".h").value);
    const yVal = parseFloat(document.querySelector(".k").value);
    const radius = parseFloat(document.querySelector(".radius").value);
    const result = document.querySelector(".result");

    //NOVALUE
    if(isNaN(xVal) || isNaN(yVal) || isNaN(radius)){
        answers.style.display = "none";
        window.alert("Put the value of your equation!")
    }

    // GIVEN
    sign1.textContent = (xVal > 0) ? "+" : "-";
    sign2.textContent = (yVal > 0) ? "+" : "-";
    domain.textContent = (xVal > 0) ? xVal : xVal / -1;
    range.textContent = (yVal > 0) ? yVal : yVal / -1;
    radiusGiven.textContent = radius;

    const coeffX = xVal * 2;
    const coeffY = yVal * 2;
    const constantOfX = Math.pow(xVal, 2);
    const constantOfY = Math.pow(yVal, 2);
    const radiusOfGf = (constantOfX + constantOfY) + (radius / -1);
 document.querySelector(".circle-answer-container").style.visibility = "visible";

    const step1 = [ {"bothPositive": `(x² + ${coeffX}x + ${constantOfX}) + (y² + ${coeffY}y + ${constantOfY}) = ${radius}`},
                  {"xpositive": `(x² + ${coeffX}x + ${constantOfX}) + (y² ${coeffY}y + ${constantOfY}) = ${radius}`},
                  {"ypositive": `(x² ${coeffX}x + ${constantOfX}) + (y² + ${coeffY}y + ${constantOfY}) = ${radius}`},
                  {"bothNegative": `(x² ${coeffX}x + ${constantOfX}) + (y² ${coeffY}y + ${constantOfY}) = ${radius}`}
                  ];

    const step2 = [
                  {"bothPositive": `x² + y² + ${coeffX}x + ${coeffY}y + ${constantOfX} + ${constantOfY}  ${radius / -1} = 0`},
                  {"xpositive": `x² + y² + ${coeffX}x ${coeffY}y + ${constantOfX} + ${constantOfY}  ${radius / -1} = 0`},
                  {"ypositive": `x² + y² ${coeffX}x + ${coeffY}y + ${constantOfX} + ${constantOfY}  ${radius / -1} = 0`},
                  {"bothNegative": `x² + y² ${coeffX}x ${coeffY}y + ${constantOfX} + ${constantOfY}  ${radius / -1} = 0`}
    ];
 
 /*FOR TRANSFORMING */

    

    if(xVal > 0 && yVal > 0){
        step1Container.textContent =  step1[0].bothPositive;
        step2Container.textContent = step2[0].bothPositive;
        result.textContent = `x² + y² + ${coeffX}x + ${coeffY}y + ${radiusOfGf} = 0`;
    }
    else if(xVal > 0 && yVal !== 0){
        step1Container.textContent =  step1[1].xpositive;
        step2Container.textContent = step2[1].xpositive;
        result.textContent = `x² + y² + ${coeffX}x  ${coeffY}y + ${radiusOfGf} = 0`;
    }
    else if(yVal > 0 && xVal !== 0){
        step1Container.textContent =  step1[2].ypositive;
        step2Container.textContent = step2[2].ypositive;
        result.textContent = `x² + y²  ${coeffX}x + ${coeffY}y ${radiusOfGf} = 0`;
    }
    else if(yVal < 0 && xVal < 0){
        step1Container.textContent =  step1[3].bothNegative;
        step2Container.textContent = step2[3].bothNegative;
        result.textContent = `x² + y²  ${coeffX}x  ${coeffY}y + ${radiusOfGf} = 0`;
    } else if(xVal == 0 && yVal > 0){
        //Given
        sign1.textContent = "";
        sign2.textContent = (yVal > 0) ? "+" : "-";
        domain.textContent = "";
        range.textContent = (yVal > 0) ? yVal : yVal / -1;
        radiusGiven.textContent = radius;   
        //
        step1Container.textContent = `x² + (y² + ${coeffY}y + ${constantOfY}) = ${radius}`;
        step2Container.textContent = `x² + y² + ${coeffY}y + ${constantOfY}  ${radius / -1} = 0`;
        result.textContent = `x² + y² + ${coeffY}y + ${radiusOfGf} = 0`;
    } 
    else if(xVal == 0 && yVal < 0){
        //Given
        sign1.textContent = "";
        sign2.textContent = (yVal > 0) ? "+" : "-";
        domain.textContent = "";
        range.textContent = (yVal > 0) ? yVal : yVal / -1;
        radiusGiven.textContent = radius;   
        //
        step1Container.textContent = `x² + (y² ${coeffY}y + ${constantOfY}) = ${radius}`;
        step2Container.textContent = `x² + y² ${coeffY}y + ${constantOfY}  ${radius / -1} = 0`;
        result.textContent = `x² + y² ${coeffY}y + ${radiusOfGf} = 0`;
    }
    else if(xVal > 0 && yVal == 0){
        //Given
        sign1.textContent = (xVal > 0) ? "+" : "-";
        sign2.textContent = "";
        domain.textContent = (xVal > 0) ? xVal : xVal / -1;
        range.textContent = "";
        radiusGiven.textContent = radius;
        //
        step1Container.textContent = `(x² + ${coeffX}x + ${constantOfX}) + y² = ${radius}`;
        step2Container.textContent = `x² + y² + ${coeffX}x + ${constantOfX} ${radius / -1} = 0`;
        result.textContent = `x² + y² + ${coeffX}x + ${radiusOfGf} = 0`;
    } 
    else if(xVal < 0 && yVal == 0){
        //Given
        sign1.textContent = (xVal > 0) ? "+" : "-";
        sign2.textContent = "";
        domain.textContent = (xVal > 0) ? xVal : xVal / -1;
        range.textContent = "";
        radiusGiven.textContent = radius;
        //
        step1Container.textContent = `(x² ${coeffX}x + ${constantOfX}) + y² = ${radius}`;
        step2Container.textContent = `x² + y² ${coeffX}x + ${constantOfX} ${radius / -1} = 0`;
        result.textContent = `x² + y² ${coeffX}x ${radiusOfGf} = 0`;
    } 
    else { 
        //Given
        sign1.textContent = "";
        sign2.textContent = "";
        domain.textContent = "";
        range.textContent = "";
        radiusGiven.textContent = radius;
        //
    }
} 
 
function expand(){
    const expand = document.querySelector(".expanding");

    if(expand.style.display === "none"){
        expand.style.display = "block";
    } else{
        expand.style.display = "none";
    }
}