// Function to show the GIF for a set duration and then hide it
function showAndHideGif(minTime, maxTime, showTime) {
    var gif = document.getElementById('multo');
    

    setTimeout(function() {
        gif.style.display = 'none'; // Hide the GIF after showing it for a set duration
        
        setTimeout(function() {
            gif.style.display = 'block'; // Show the GIF
            showAndHideGif(minTime, maxTime, showTime); // Repeat the process
        }, Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime); // Wait for a random duration before displaying the GIF again
    }, showTime); // Display the GIF for a specific duration
}

// Initial call to start the loop with customizable time parameters (min and max durations in milliseconds, showTime in milliseconds)
showAndHideGif(0, 20000, 1009); // 1 second and 9 milliseconds