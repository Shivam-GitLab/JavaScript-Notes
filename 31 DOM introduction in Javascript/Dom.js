console.log("DOM Manipulation");

console.log("");

/*

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document and allows programs to manipulate the document's structure, style, and content.

Here's a brief overview of some key concepts:

DOM Tree: The DOM represents a document as a tree of objects. Each object is a part of the document, such as an element, an attribute of an element, or text within an element. These objects are often called nodes.

Accessing Elements: You can access elements in the DOM using various methods, such as getElementById, getElementsByClassName, getElementsByTagName, and querySelector.

Manipulating Elements: Once you have accessed an element, you can manipulate it using various properties and methods. For example, you can change the text content of an element using the textContent property, or you can change the style of an element using the style property.

Here's an example:

Creating and Adding Elements: You can create new elements using the createElement method, and then add them to the DOM using methods like appendChild and insertBefore.
Here's an example:

Removing Elements: You can remove elements from the DOM using the removeChild method.
Here's an example:

Remember, manipulating the DOM can cause the page to re-render, which can be expensive in terms of performance. Therefore, it's often a good idea to minimize direct DOM manipulation where possible.
*/ // Accessing an element
var element = document.getElementById("myElement");

// Changing the text content of the element
element.textContent = "New text content";

// Changing the style of the element
element.style.color = "blue";

// Creating a new element
var newElement = document.createElement("p");

// Setting the text content of the new element
newElement.textContent = "This is a new paragraph.";

// Adding the new element to the DOM
document.body.appendChild(newElement);

// Accessing an element
var element = document.getElementById("myElement");

// Removing the element from the DOM
element.parentNode.removeChild(element);


