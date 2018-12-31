let guineaPig = document.getElementById("guinea-pig")

function toggleClass (newClass) {
  guineaPig.classList.toggle(newClass)
  console.log("guineaPig.classList", guineaPig.classList)
}

document.querySelector("body").addEventListener("click", function() {
    // console.log(event.target, event.currentTarget);
    console.log("Event target id: ", event.target.id);

    let eventId = event.target.id;
    if(eventId === "make-large") {
      toggleClass("large");
    } else if(eventId === "add-border") {
      toggleClass("bordered");
    } else if(eventId === "add-color") {
      toggleClass("blue");
    } else if(eventId === "add-rounding") {
      toggleClass("rounded");
    }
})

// document.getElementById("add-color").addEventListener("click", function() {
//   toggleClass("blue")
// })

// document.getElementById("make-large").addEventListener("click", function() {
//     toggleClass("large")
// })

// document.getElementById("add-border").addEventListener("click", function() {
//     toggleClass("bordered")
// })

// document.getElementById("add-rounding").addEventListener("click", function() {
//     toggleClass("rounded")
// })


//create articleContainer, append to document body
let articleContainer = document.createElement("article-container")
articleContainer.setAttribute("id", "article-container")
document.body.appendChild(articleContainer)

//create two articles, with unique ids. append to articleContainer
let article1 = document.createElement("article")
article1.setAttribute("id", "article1")
article1.textContent = "One"

let article2 = document.createElement("article")
article2.setAttribute("id", "article2")
article2.textContent = "Two"

articleContainer.appendChild(article1)
articleContainer.appendChild(article2)

//add EventListener that listens for keyup in input field and mirrors those strokes in the two articles
document.getElementById("message").addEventListener("keyup", function(event) {
    let article1 = document.getElementById("article1")
    let article2 = document.getElementById("article2")
    article1.textContent = event.target.value;
    article2.textContent = event.target.value;
});