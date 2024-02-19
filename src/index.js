// import "./styles.css" assert { type: 'css' };

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

// Get HTML head element
let head = document.getElementsByTagName('HEAD')[0];
 
// Create new link Element
let link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'src/styles.css';

// Append link element to HTML head
head.appendChild(link);

/* 
Start the project by building a main content element using the following steps:
*/
// 1. Select and cache the <main> element in a variable named mainEl.
let mainEl = document.getElementsByTagName('main')[0]
console.log(mainEl);

// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// let root = document.documentElement
// let root = document.querySelector(':root')
let root = document.querySelector('body')
let style = getComputedStyle(root);
let mainBG = style.getPropertyValue("--main-bg")

console.log(root);
// console.log(style);
console.log(mainBG);
document.body.style.backgroundColor = "#4a4e4d";
// document.mainEl.style.backgroundColor = "blue";



// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
let h1 = document.createElement('h1');
h1.textContent = "DOM Manipulation"
mainEl.appendChild(h1);


// 4. Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
h1.classList.add('flex-ctr')


// Part 2: Creating a Menu Bar
// Next, create a blank menu bar that we can use to later add some interactivity to the page:
// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById('top-menu')
console.log(topMenuEl);


// 2. Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%"


// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "#0e9aa7"


// 4. Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around')

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
    newElement = document.createElement('a')
    newElement.href = link.href
    newElement.textContent = link.text
    console.log(newElement);
    topMenuEl.appendChild(newElement)
}








