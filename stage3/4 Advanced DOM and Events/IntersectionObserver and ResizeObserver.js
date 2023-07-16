//  1. IntersectionObserver:

//  What:

 /* thanks to it you can asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. */

//  Why:

//  You might use it in below cases:

// - Lazy-loading of images
// - Implementing "infinite scrolling"
// - Reporting of visibility of advertisements etc.

//  How:
const elements = document.querySelectorAll('.elt');
const options = {
  root: null,           // set document viewport as root
  rootMargin: '0px',    // margin around root
  threshold: 1.0        // 1.0 means that when 100% of the target is visible 
                        //inside the root, then observer callback is invoked.
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      console.log('in viewport');
    } else {
      console.log('out of viewport');
    }
  });
}, options);

elements.forEach(elt => {
  observer.observe(elt);
});

// 2. MutationObserver
// What:

// It will be helpful if you need to watch for DOM tree changes.

// Why:

/*
    MutationObserver will tell you when the DOM element's child was removed, added or any of attributes of any DOM tree 
    elements was changed. 
 */

// How:
const element1 = document.querySelector("#element");
const options1 = {
  childList: true,                  // listen to listen to children being added or removed
  attributes: true,                 // listen to attributes changes
  subtree: true                     // omit or set to false to observe only changes to the parent node
}

const callback = (mutationList, observer) => {
  mutationList.forEach((mutation) => {
    switch(mutation.type) {
      case 'childList':
                                      // check mutation.addedNodes or mutation.removedNodes
        break;
      case 'attributes':
                                      /* An attribute value changed on the element in
                                         mutation.target; the attribute name is in
                                         mutation.attributeName and its previous value is in
                                         mutation.oldValue */
        break;
    }
  });
}

const observer1 = new MutationObserver(callback);
observer.observe(element, options1);

//3. Resize Observer:

// What:

// It reports about changes of the dimensions of the element.

// Why:

/* 
   It can be useful if you would like to listen to changes of the viewport (portrait vs landscape) or just you have some 
   external content and you would like to react to it changes. 
*/

// How:
const elements2 = document.querySelectorAll('.elt');

const observer2 = new ResizeObserver(entries => {
  entries.forEach(entry => {
    const width = Math.floor(entry.contentRect.width);
    const height = Math.floor(entry.contentRect.height);
                                                          // execute some logic based on width and height params
  })
  });

elements.forEach(elt => {
  observer2.observe(elt);
});

//https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
//https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
//https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver