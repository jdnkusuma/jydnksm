document.addEventListener('DOMContentLoaded', (event) => {
    const flashlight = document.querySelector('#home-secondary');
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    const speed = 0.05; // Adjust this value to change the speed (0.1 = slower, 1 = instant)

    document.addEventListener('mousemove', function(event) {
        targetX = event.clientX;
        targetY = event.clientY;
    });

    function animate() {
        // Linear interpolation for smooth movement
        currentX += (targetX - currentX) * speed;
        currentY += (targetY - currentY) * speed;

        flashlight.style.setProperty('--mask', `radial-gradient(circle at ${currentX}px ${currentY}px, black 25%, transparent 0)`);

        // Request the next frame
        requestAnimationFrame(animate);
    }

    // Start the animation loop
    requestAnimationFrame(animate);

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
        if (codebg) {
            codebg.parentNode.removeChild(codebg);
        }
    }

    // Fetch and display the HTML source code when the page loads
    fetchHTMLSourceCode();
});
