document.addEventListener('mousemove', function(event) {
    const flashlight = document.querySelector('#home-secondary');
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    flashlight.style.setProperty('--mask', `radial-gradient(circle at ${mouseX}px ${mouseY}px, black 25%, transparent 0)`);
});

// Function to fetch the HTML source code of the current page
function fetchHTMLSourceCode() {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                const sourceCode = httpRequest.responseText;
                displaySourceCode(sourceCode);
            } else {
                console.error('Error fetching HTML source code:', httpRequest.status);
                displayError();
            }
        }
    };
    httpRequest.open('GET', window.location.href);
    httpRequest.send();
}

// Function to display the HTML source code on the webpage
function displaySourceCode(html) {
    const sourceCodeElement = document.getElementById('source-code');
    sourceCodeElement.textContent = html;
}

// For the local editing process, so that it looks better for the while
function displayError() {
    const background = document.getElementById('home-secondary');
    const codebg = document.getElementById('code-bg');
    background.style.setProperty('background-image', "url('https://media.istockphoto.com/id/1047259374/photo/programming-source-code-abstract-background.jpg?s=612x612&w=0&k=20&c=07DAFiujCb58Zgu5ZArLprHiSKew5pCGqbTnop9GclA=')");
    codebg.parentNode.removeChild(codebg);
}


// Fetch and display the HTML source code when the page loads
window.onload = function() {
    fetchHTMLSourceCode();
};

