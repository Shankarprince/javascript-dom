const firstContainer = document.getElementById("first-container");
firstContainer.innerHTML = "Hello";

const secContainer = document.getElementById("sec-container");
secContainer.innerHTML = "World";

const addContainer = document.getElementById("add-container");
addContainer.innerHTML = "Add";

document.body.append(firstContainer, secContainer, addContainer);

