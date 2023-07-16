/* The Geolocation API is accessed via a call to navigator.geolocation; this will cause the user's browser to ask them for permission to access their location data. If they accept, then the browser will use the best available functionality on the device to access this information (for example, GPS). */

//////////////////............Getting the current position
navigator.geolocation.getCurrentPosition((position) => {
   doSomething(position.coords.latitude, position.coords.longitude);
 });

 ///////////////////..............Watching the current position
 const watchID = navigator.geolocation.watchPosition((position) => {
   doSomething(position.coords.latitude, position.coords.longitude);
 });
 /* The watchPosition() method returns an ID number that can be used to uniquely identify the requested position watcher; you use this value in tandem with the clearWatch() method to stop watching the user's location. */
 navigator.geolocation.clearWatch(watchID);

 ////////////////..........Fine tuning the response
 function success(position) {
   doSomething(position.coords.latitude, position.coords.longitude);
 }
 
 function error() {
   alert("Sorry, no position available.");
 }
 
 const options = {
   enableHighAccuracy: true,
   maximumAge: 30000,
   timeout: 27000,
 };
 
 //const watchID = navigator.geolocation.watchPosition(success, error, options);
 

 //////////////////////Examples
 /////HTML:
/*  <button id="find-me">Show my location</button><br />
    <p id="status"></p>
    <a id="map-link" target="_blank"></a>
 */
/////js
function geoFindMe() {
   const status = document.querySelector("#status");
   const mapLink = document.querySelector("#map-link");
 
   mapLink.href = "";
   mapLink.textContent = "";
 
   function success(position) {
     const latitude = position.coords.latitude;
     const longitude = position.coords.longitude;
 
     status.textContent = "";
     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
   }
 
   function error() {
     status.textContent = "Unable to retrieve your location";
   }
 
   if (!navigator.geolocation) {
     status.textContent = "Geolocation is not supported by your browser";
   } else {
     status.textContent = "Locating…";
     navigator.geolocation.getCurrentPosition(success, error);
   }
 }
 
 document.querySelector("#find-me").addEventListener("click", geoFindMe);

 
 //////////https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
