
  
  
  
  // Create the initial button
  const playOnlineButton = document.createElement("button");
  playOnlineButton.textContent = "Play Online";
  playOnlineButton.style.position = "absolute";
  playOnlineButton.style.height = "200px";
  playOnlineButton.style.width = "200px";
  playOnlineButton.style.top = "210px";
  playOnlineButton.style.opacity = "0";
  playOnlineButton.style.left = "270px";
  playOnlineButton.onclick = function () {
    playOnline();
    playOnlineButton.style.display = "none";
  
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
    connectButton.onclick = function () {
      connect();
      connectButton.style.display = "none";
      goBackButton.style.display = "none";
      goBackButton.onclick = function () {
        cancel();
      };
  
      const cancelButton = document.createElement("button");
      cancelButton.textContent = "Cancel";
      cancelButton.style.position = "absolute";

      cancelButton.style.top = "290px";
      cancelButton.style.left = "150px";
    cancelButton.style.height = "80px";
    cancelButton.style.width = "200px";
    cancelButton.style.opacity = "0";
      cancelButton.onclick = cancel;
  
      document.body.appendChild(cancelButton);
    };
  
    document.body.appendChild(goBackButton);
    document.body.appendChild(connectButton);
  };
  
  // Append the initial button to the body
  document.body.appendChild(playOnlineButton);
  