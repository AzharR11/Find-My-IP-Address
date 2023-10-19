document.addEventListener("DOMContentLoaded", function() {
    
    function showIP() { // This function is called when the "Submit" button is clicked
    var name = document.getElementById("nameInput").value; // Retrieve the user's name from the input field with the id "nameInput"
    
    if (name === "") { // Checks if the name variable is empty an empty string
        displayTypewriterMessage("Please enter your name.", document.getElementById("greeting")); // If the name is empty, this line changes the HTML content of an element with the ID "greeting" to display the message "Please enter your name."
        return; // Exits the function to prevent any further execution
    }

    fetch('https://ipapi.co/json/') // Fetches data from a REST API in JSON format
        .then(response => response.json()) // Processes the response data and converts it into a JSON object
        .then(data => {
            var ipAddress = data.ip; // Extracts the user's IP address from the JSON data
            var greeting = "Hello " + name + ", your IP address is " + ipAddress; // Generates a greeting message with the user's name and IP address
            document.getElementById("greeting").innerHTML = ""; // Displays the greeting message in the HTML element with the id "greeting"
            typeWriter(greeting, 0, document.getElementById("greeting")); // Start typewriter animation
        })
        .catch(error => console.error('Error fetching IP:', error)); // Handles errors that might occur during the network request and logs an error message to the console
}

    document.getElementById("Submit").addEventListener("click", showIP);

    function typeWriter(text, i, element) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(function() {
                typeWriter(text, i + 1, element);
            }, 35); // Adjust the duration for typing speed
        }
    }

    function displayTypewriterMessage(message, element) {
        element.textContent = "";
        typeWriter(message, 0, element);
    }
});