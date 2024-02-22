// import "./styles.css" assert { type: 'css' };
// import "./styles.css";

// Menu data structure from ALAB Part 3
// var menuLinks = [
//   { text: "about", href: "/about" },
//   { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/orders" },
//   { text: "account", href: "/account" },
// ];

// Menu data structure from RLAB Part 4
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

/*
 * Get HTML head element
 * Create new link Element and set attributes
 * Append link element to HTML head
 */
// let head = document.getElementsByTagName("HEAD")[0];
// let link = document.createElement("link");
// link.rel = "stylesheet";
// link.type = "text/css";
// link.href = "src/styles.css";
// head.appendChild(link);

/* 
Part 1: Getting Started
Start the project by building a main content element using the following steps:
*/

// 1. Select and cache the <main> element in a variable named mainEl.
// let mainEl = document.getElementsByTagName("main")[0];
const mainEl = document.querySelector("main");
// console.log(mainEl);

// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
const root = document.querySelector(":root");
const rootStyle = getComputedStyle(root);
const mainBG = rootStyle.getPropertyValue("--main-bg");
mainEl.style.backgroundColor = mainBG;

// console.log(root);
// console.log(style);
// console.log(`mainBG: ${mainBG}`);
// console.log(mainEl);

// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
const h1 = document.createElement("h1");
h1.textContent = "DOM Manipulation";
mainEl.appendChild(h1);

// 4. Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
h1.classList.add("flex-ctr");

/* 
Part 2: Creating a Menu Bar
Next, create a blank menu bar that we can use to later add some interactivity to the page: 
*/

// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");
// console.log(topMenuEl);

// 2. Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
const topMenuBG = rootStyle.getPropertyValue("--top-menu-bg");
topMenuEl.style.backgroundColor = topMenuBG;

// 4. Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

/* 
Part 3: Adding Menu Buttons
*/

// To continue:
// 1. Iterate over the entire menuLinks array and for each "link" object:
// 2. Create an <a> element.
// 3. On the new element, add an href attribute with its value set to the href property of the "link" object.
// 4. Set the new element's content to the value of the text property of the "link" object.
// 5. Append the new element to the topMenuEl element.
for (let link of menuLinks) {
  newElement = document.createElement("a");
  newElement.href = link.href;
  newElement.textContent = link.text;
  topMenuEl.appendChild(newElement);
}

/* 
  Part 3: Creating the Submenu
*/

// 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector("#sub-menu");

// 2. Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

// 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
const subMenuBG = rootStyle.getPropertyValue("--sub-menu-bg");
subMenuEl.style.backgroundColor = subMenuBG;

// 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// 5. Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// 6. Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = 0;

/* 
  Part 4 Adding Menu Interaction
*/
// 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// 2. Attach a delegated 'click' event listener to topMenuEl.
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  // The second line of code of the function should immediately return if the element clicked was not an <a> element.
  // Log the content of the <a> to verify the handler is working.

// for (let link of menuLinks) {
//   newElement = document.createElement("a");
//   newElement.href = link.href;
//   newElement.textContent = link.text;
//   topMenuEl.appendChild(newElement);
// }



// Final Output
console.log("Final Root");
console.log(root);
