//////////////////...A basic fetch request looks like this:

async function logJSONData() {
  const response = await fetch("http://example.com/movies.json");
  const jsonData = await response.json();
  console.log(jsonData);
}

//////////////////...........Supplying request options
// Example POST method implementation:
async function postData(url = "", data = {}) {
   // Default options are marked with *
   const response = await fetch(url, {
     method: "POST",                          // *GET, POST, PUT, DELETE, etc.
     mode: "cors",                             // no-cors, *cors, same-origin
     cache: "no-cache",                     // *default, no-cache, reload, force-cache, only-if-cached
     credentials: "same-origin",                  // include, *same-origin, omit
     headers: {
       "Content-Type": "application/json",
                                               // 'Content-Type': 'application/x-www-form-urlencoded',
     },
     redirect: "follow",                       // manual, *follow, error
     referrerPolicy: "no-referrer",            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin,
                                             //same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     body: JSON.stringify(data),             // body data type must match "Content-Type" header
   });
   return response.json();                    // parses JSON response into native JavaScript objects
 }
 
 postData("https://example.com/answer", { answer: 42 }).then((data) => {
   console.log(data);                      // JSON data parsed by `data.json()` call
 });
 
 ////////////.....................Aborting a fetch
 const controller = new AbortController();
const signal = controller.signal;
const url = "video.mp4";

const downloadBtn = document.querySelector("#download");
const abortBtn = document.querySelector("#abort");

downloadBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(url, { signal });
    console.log("Download complete", response);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
});

abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("Download aborted");
});

////////////////..............Uploading JSON data
async function postJSON(data) {
   try {
     const response = await fetch("https://example.com/profile", {
       method: "POST",                  // or 'PUT'
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     });
 
     const result = await response.json();
     console.log("Success:", result);
   } catch (error) {
     console.error("Error:", error);
   }
 }
 
 const data = { username: "example" };
 postJSON(data);
 
 ///////////////////////..................Uploading a file
 async function upload(formData) {
   try {
     const response = await fetch("https://example.com/profile/avatar", {
       method: "PUT",
       body: formData,
     });
     const result = await response.json();
     console.log("Success:", result);
   } catch (error) {
     console.error("Error:", error);
   }
 }
 
 const formData = new FormData();
 const fileField = document.querySelector('input[type="file"]');
 
 formData.append("username", "abc123");
 formData.append("avatar", fileField.files[0]);
 
 upload(formData);
 
 /////////////..................Uploading multiple files
 async function uploadMultiple(formData) {
   try {
     const response = await fetch("https://example.com/posts", {
       method: "POST",
       body: formData,
     });
     const result = await response.json();
     console.log("Success:", result);
   } catch (error) {
     console.error("Error:", error);
   }
 }
 
 const photos = document.querySelector('input[type="file"][multiple]');
 const formDat = new FormData();
 
 formData.append("title", "My Vegas Vacation");
 
 for (const [i, photo] of Array.from(photos.files).entries()) {
   formDat.append(`photos_${i}`, photo);
 }
 
 uploadMultiple(formDat);

 ///////////////////////................Processing a text file line by line
 async function* makeTextFileLineIterator(fileURL) {
   const utf8Decoder = new TextDecoder("utf-8");
   const response = await fetch(fileURL);
   const reader = response.body.getReader();
   let { value: chunk, done: readerDone } = await reader.read();
   chunk = chunk ? utf8Decoder.decode(chunk) : "";
 
   const newline = /\r?\n/gm;
   let startIndex = 0;
   let result;
 
   while (true) {
     const result = newline.exec(chunk);
     if (!result) {
       if (readerDone) break;
       const remainder = chunk.substr(startIndex);
       ({ value: chunk, done: readerDone } = await reader.read());
       chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
       startIndex = newline.lastIndex = 0;
       continue;
     }
     yield chunk.substring(startIndex, result.index);
     startIndex = newline.lastIndex;
   }
 
   if (startIndex < chunk.length) {
     // Last line didn't end in a newline char
     yield chunk.substr(startIndex);
   }
 }
 
 async function run() {
   for await (const line of makeTextFileLineIterator(urlOfFile)) {
     processLine(line);
   }
 }
 
 run();

 ///////////////////////................Checking that the fetch was successful
 async function fetchImage() {
   try {
     const response = await fetch("flowers.jpg");
     if (!response.ok) {
       throw new Error("Network response was not OK");
     }
     const myBlob = await response.blob();
     myImage.src = URL.createObjectURL(myBlob);
   } catch (error) {
     console.error("There has been a problem with your fetch operation:", error);
   }
 }
 
 ////////////////////.....................Supplying your own request object
 async function fetchImage(request) {
   try {
     const response = await fetch(request);
     if (!response.ok) {
       throw new Error("Network response was not OK");
     }
     const myBlob = await response.blob();
     myImage.src = URL.createObjectURL(myBlob);
   } catch (error) {
     console.error("Error:", error);
   }
 }
 
 const myHeaders = new Headers();
 
 const myRequest = new Request("flowers.jpg", {
   method: "GET",
   headers: myHeaders,
   mode: "cors",
   cache: "default",
 });
 
 fetchImage(myRequest);

 /* Request() accepts exactly the same parameters as the fetch() method. You can even pass in an existing request object to create a copy of it: */
 
 const anotherRequest = new Request(myRequest, myInit);


 //////////////////,,,,,,,,,,,,,,,https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch