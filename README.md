1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
Method	Returns	Notes
getElementById("id")	Single element	Selects an element by its id. Returns only one element.
getElementsByClassName("class")	HTMLCollection (live)	Selects elements by class name. Returns multiple elements. Collection updates automatically if DOM changes.
querySelector("selector")	First matching element	Can use any CSS selector. Returns first match.
querySelectorAll("selector")	NodeList (static)	Can use any CSS selector. Returns all matches as a static list.

2. How to create and insert a new element into the DOM

Steps:

Create a new element using document.createElement().

Add content or attributes using textContent or setAttribute().

Insert it into the DOM using appendChild(), prepend(), or insertBefore().

3. Event Bubbling

Definition:
Event bubbling is when an event starts from the innermost element (target) and bubbles up through parent elements until it reaches the document.

4. Event Delegation

Definition:
Event delegation is a technique where you attach one event listener to a parent element to handle events on its children.

Why useful:

Reduces the number of event listeners.

Works for dynamically added elements.

5. Difference between preventDefault() and stopPropagation()
Method	Purpose
preventDefault()	Stops the default browser action (e.g., prevents a link from navigating).
stopPropagation()	Stops the event from bubbling up to parent elements.
