// import "./styles.css" assert { type: 'css' };

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
// document.mainEl.style.
document.body.style.backgroundColor = "#4a4e4d";
// document.mainEl.style.backgroundColor = "blue";



// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
let h1 = document.createElement('h1');
h1.textContent = "DOM Manipulation"
mainEl.appendChild(h1);


// 4. Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
h1.classList.add('flex-ctr')




