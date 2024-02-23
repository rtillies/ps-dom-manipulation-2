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
Part 1: Getting Started
Start the project by building a main content element using the following steps:
*/

// 1. Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
const root = document.querySelector(":root");
const rootStyle = getComputedStyle(root);
const mainBG = rootStyle.getPropertyValue("--main-bg");
mainEl.style.backgroundColor = mainBG;

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

/* 
  1. Iterate over the entire menuLinks array and for each "link" object:
  2. Create an <a> element.
  3. On the new element, add an href attribute with its value set to the href property of the "link" object.
  4. Set the new element's content to the value of the text property of the "link" object.
  5. Append the new element to the topMenuEl element.
 */
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
const topMenuLinks = []
for (const node of topMenuEl.childNodes) {
  topMenuLinks.push(node)
}

// 2. Attach a delegated 'click' event listener to topMenuEl.
/*
  * The first line of code of the event listener function should call the event object's preventDefault() method.
  * The second line of code of the function should immediately return if the element clicked was not an <a> element.
  * Log the content of the <a> to verify the handler is working.
*/

/*
  1. The event listener should add the active class to the <a> element that was clicked, unless it was
  already active, in which case it should remove it.
  2. The event listener should remove the active class from each other <a> element
  in topMenuLinks - whether the active class exists or not.
    * Hint: Removing a non-existent class from an element does not cause an error!
*/

/* 
  Part 5 Adding Submenu Interaction
*/

/*
  1. Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was
  inactive when clicked):
    a. If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do,
  except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
    b. Otherwise, set the CSS top property of subMenuEl to 0.
      * Hint: Caching the "link" object will come in handy for passing its subLinks array later.
*/
topMenuEl.addEventListener('click', (event) => {
  event.preventDefault()
  const target = event.target
  if (!(target.tagName === 'A')) return;

  const content = target.textContent
  console.log(content);

  target.classList.toggle('active')
  
  topMenuLinks.forEach((link) => {
    if (target !== link) {
      link.classList.remove('active')
    }
  })

  const linkObject = menuLinks.find(link => {
    return link.text === content;
  })

  if (linkObject.subLinks && target.classList.contains('active')) {
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = 0;
  }

  function buildSubmenu(subLinks) {
    if (!subLinks) {
      h1.textContent = content
      return;
    }
    
    subMenuEl.textContent = ''
    
    subLinks.forEach(link => {
      const a = document.createElement('a')
      a.href = link.href
      a.textContent = link.text
      subMenuEl.appendChild(a)
    })
  }
  buildSubmenu(linkObject.subLinks)
})

subMenuEl.addEventListener('click', (event) => {
  event.preventDefault()
  const target = event.target
  if (!(target.tagName === 'A')) return;
  const content = target.textContent
  console.log(content);

  subMenuEl.style.top = 0;
  
  topMenuLinks.forEach((link) => {
    link.classList.remove('active')
  })

  h1.textContent = content
})

// Final Output
// console.log("Final Root");
// console.log(root);
