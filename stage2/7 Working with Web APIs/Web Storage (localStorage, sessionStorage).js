/* The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. */

//The following snippet accesses the current domain's local Storage object and adds a data item to it using Storage.setItem().

localStorage.setItem("myCat", "Tom");

//The syntax for reading the localStorage item is as follows:

const cat = localStorage.getItem("myCat");

//The syntax for removing the localStorage item is as follows:

localStorage.removeItem("myCat");

//The syntax for removing all the localStorage items is as follows:

localStorage.clear();

//If they were any other type, like a number, or an object, they would get converted to a string automatically:

localStorage.user = {name: "John"};
alert(localStorage.user); // [object Object]

///////////We can use JSON to store objects though:

localStorage.user = JSON.stringify({name: "John"});

// sometime later
let user = JSON.parse( localStorage.user );
alert( user.name ); // John

/////////////Also it is possible to stringify the whole storage object, e.g. for debugging purposes:

// added formatting options to JSON.stringify to make the object look nicer
alert( JSON.stringify(localStorage, null, 2) );

//////////////////Summary
//Web storage objects localStorage and sessionStorage allow to store key/value pairs in the browser.

//.Both key and value must be strings.
//.The limit is 5mb+, depends on the browser.
//.They do not expire.
//.The data is bound to the origin (domain/port/protocol).

/* 
   localStorage	                                              
   Shared between all tabs and windows with the same origin  	 
   Survives browser restart	
 */                                  

/* 
   sessionStorage
   Visible within a browser tab, including iframes from the same origin
   Survives page refresh (but not tab close) 
*/

///https://javascript.info/localstorage