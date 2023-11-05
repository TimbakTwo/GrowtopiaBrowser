




var allowGoBack = 0;



// This will happen if the play Online is clicked

function playOnline() {
  
    const targetTime = 2.007; // Time to jump back to (in seconds)
  
    allowGoBack = 1;
      video.currentTime = targetTime;
      video.play();
      console.log('test')
    
  }




  // Get the video element
const video = document.getElementById('videoGT');


// Function to check the video time and jump back to 2 seconds
function jumpToTime() {

    if (allowGoBack === 0) {
        const targetTime = 1.200; // Time to jump back to (in seconds)
  if (video.currentTime > 2.007) {
    video.currentTime = targetTime;
    video.play();
  }
    }
  
}

// Listen for time updates in the video
if (allowGoBack  === 0) {
    video.addEventListener('timeupdate', jumpToTime);
}





// This will happen if back is clicked
function goBack() {
    window.location.reload();
}




// This will happen if the video is at 3:19 mark seconds

let loginPhasePause = 0;

function pauseAtSpecificTime() {
    const targetTime = 3.709; // 3 seconds and 9 milliseconds

    if (loginPhasePause === 0) {

        if (video.currentTime >= targetTime) {
            console.log('test')
            video.pause();
            loginPhasePause = 1;
          }

    }
    
  }

  // Listen for time updates in the video
 
  video.addEventListener('timeupdate', pauseAtSpecificTime);


function connect() {
  connectButton.style.display = "none";
}



  // This will happen when connect is pressed 
  function connect() {
    
    if (video.currentTime > 7.022) {
      window.location.reload();
    }
    
    video.play();
    

    //GUI

    
    
  }








  // This will happen if the video is at 5:03 mark seconds

let connectPhasePause = 0;

function pauseAtSpecificTime2() {
    const targetTime = 5.003; // 3 seconds and 9 milliseconds

    if (connectPhasePause === 0) {

        if (video.currentTime >= targetTime) {
            console.log('test')
            video.pause();
            connectPhasePause = 1;
          }

    }
    
  }

  // Listen for time updates in the video
 
  video.addEventListener('timeupdate', pauseAtSpecificTime2);









  // This will happen if cancel is clicked
function cancel() {
  //GUI
  


  const targetTime = 3.012; // Time to jump back to (in seconds)
  
    video.currentTime = targetTime;
    video.play();
    loginPhasePause = 0;
    connectPhasePause = 0;
    


  //GUI

  console.log("cancel function activated");
    // Your code for cancel function here
    // This function will restore the initial state with 2 buttons goBack and connect
    const goBackButton = document.createElement("button");
    goBackButton.textContent = "Go Back";
    goBackButton.style.position = "absolute";
    goBackButton.style.top = "290px";
    goBackButton.style.left = "100px";
    goBackButton.style.height = "80px";
    goBackButton.style.width = "200px";
    goBackButton.style.opacity = "0";
    goBackButton.onclick = goBack;
  
    const connectButton = document.createElement("button");
    connectButton.textContent = "Connect";
    connectButton.style.position = "absolute";
    connectButton.style.top = "310px";
    connectButton.style.left = "400px";
    connectButton.style.height = "80px";
    connectButton.style.width = "200px";
    connectButton.style.opacity = "0";
    connectButton.onclick = connect;
  
    document.body.appendChild(goBackButton);
    document.body.appendChild(connectButton);
  
      
    cancelButton.style.display = "none";
    


    
        
    
  
}






// This will happen if the video is at 7:22 mark seconds

let finalPhasePause = 0;

function pauseAtSpecificTimeFinal() {
    const targetTime = 7.022; // 3 seconds and 9 milliseconds

    if (finalPhasePause === 0) {

        if (video.currentTime >= targetTime) {
            console.log('test')
            video.pause();
            finalPhasePause = 1;
          }

    }
    
  }

  // Listen for time updates in the video
 
  video.addEventListener('timeupdate', pauseAtSpecificTimeFinal);









