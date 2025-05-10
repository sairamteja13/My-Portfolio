var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
let text = document.querySelector('#changingText');

let textItems = ['Java Script Developer-I','Data Cloud Consultant','AI Associate']

// const myProjects = [
//     {

//     }
// ]

// previousButton.addEventListener('click',function() {
//     console.log('handle previous');   
// });

// nextButton.addEventListener('click',function() { 
//     console.log('handle Next');   
// })

const skillIcons = [
    
]

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let textIndex = 0;
let charIndex = 0;
let currentText = "";
const textElement = document.getElementById("changingText");

function typeEffect() {
    if (charIndex < textItems[textIndex].length) {
        currentText += textItems[textIndex].charAt(charIndex);
        text.textContent = currentText;
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(deleteEffect, 1000);
    }
}

function deleteEffect() {
    if (charIndex > 0) {
        currentText = currentText.slice(0, -1);
        text.textContent = currentText;
        charIndex--;
        setTimeout(deleteEffect, 100);
    } else {
        textIndex = (textIndex + 1) % textItems.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

const workList = document.querySelector(".worklist");
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const technologies = ['Salesforce', 'LWC', 'Apex', 'Integrations', 'SOQL', 'Flows','GitHub','Java Script'];

const techContainer = document.getElementById('techContainer');

technologies.forEach(tech => {
    const card = document.createElement('div');
    card.className = 'tech-card';
    card.textContent = tech;
    techContainer.appendChild(card);
});