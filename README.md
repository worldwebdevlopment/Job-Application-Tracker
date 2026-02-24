getElementById("id")` → single element
getElementsByClassName("class")` → HTMLCollection (multiple) 
querySelector("sel")` → first match 
querySelectorAll("sel")` → all matches (NodeList)
const el = document.createElement("div");
el.textContent = "Hello";
document.body.appendChild(el);
Event Bubbling:Event goes from target → parents → top.
Event Delegation:One listener on parent handles all children.
preventDefault() vs stopPropagation():

preventDefault() → stop default browser action

stopPropagation() → stop bubbling to parents
