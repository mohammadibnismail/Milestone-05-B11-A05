// Background Color Change
document.getElementById("bg-theme").addEventListener("click", function() {
    // Array of 10 predefined colors
    let colors = [
      "rgba(255, 99, 71, 0.4)",   // Tomato
      "rgba(135, 206, 235, 0.4)", // Sky Blue
      "rgba(255, 165, 0, 0.4)",   // Orange
      "rgba(144, 238, 144, 0.4)", // Light Green
      "rgba(173, 216, 230, 0.4)", // Light Blue
      "rgba(255, 192, 203, 0.4)", // Pink
      "rgba(221, 160, 221, 0.4)", // Plum
      "rgba(240, 230, 140, 0.4)", // Khaki
      "rgba(210, 180, 140, 0.4)", // Tan
      "rgba(188, 143, 143, 0.4)"  // Rosy Brown
    ];
  
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    document.getElementById("body").style.backgroundColor = randomColor;
  });


// Blog's Page
document.getElementById("blog-page").addEventListener("click", function() {
    window.location.href = "blog.html";
  });


// Current Date
document.getElementById("current-date").innerText = new Date().toDateString();


// Clear History
document.getElementById("btn-clear-history").addEventListener("click", function() {
    document.getElementById("history-log").innerHTML = "";
  });

