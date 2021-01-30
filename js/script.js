const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//console.log(cats);

//uestion 1:
const Cat = {complain: function catFunct() {
    console.log("MeoW!");
}
};

Cat.complain();

//console.log(Cat.complain());



//Question 2:
const Heading = document.querySelector("h3");

Heading.innerHTML = "Updated heading";


//Question 3:
Heading.style.fontSize = "2em";

//Question 4:
Heading.classList.add("subheading");

//console.log(Heading);

//Question 5:
const Paragraphs = document.querySelectorAll("p");
for (let para of Paragraphs) {
    para.style.color = "red";
} 


//Question 6:
const ResultsContainer = document.querySelector("div.results");

ResultsContainer.innerHTML = "<p>New paragraph</p>";
ResultsContainer.style.backgroundColor = "yellow";

//Question 7:
function thisList(list) {
    for(i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}
thisList(cats);

//Question 8:
const CatContainer = document.querySelector("div.cat-container");

//I chose to change the name of the parameter in the function
//createCats to "list" to avoid confusion when working with the
//function in this question.
//console.log(CatContainer);



function createCats(list) {
    let catDiv = "";
    for(i = 0; i < list.length; i++) {
        catDiv += `<div>
            <h5> Name: ${list[i].name}</h5>
            </div>`; 
        if(!isNaN(cats[i].age)) {
            catDiv += `<div>
            <p> Age: ${list[i].age}</p>
        </div>`; 
        } else {
            catDiv += `<div>
            <p> Age: Age unknown</p>
        </div>`; 
        }
    }
    return  CatContainer.innerHTML = catDiv;
}


createCats(cats);







