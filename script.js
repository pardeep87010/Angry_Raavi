let noClickCount = 0;
let isYesClicked = false;
const bgMusic = document.getElementById('bgMusic');
const yesMusic = document.getElementById('yesMusic'); 


const images = [
    "no2.gif", // First image
    "no3.gif", // Second image
    "no4.gif", // Third image
    "no5.gif", // Fourth image
    "yes.jpg" // Final image for "Yes" click
];

const texts = [
    "Please...........",
    "Please don't be mad! It was a mistake!",
    "I promise I'll make it right!",
    "Can we please talk and resolve this?"
];

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("bgMusic");
    audio.play().catch(function(error) {
        console.log("Autoplay was prevented:", error);
    });
});


window.onload = () => {
    
    
    document.querySelector('.container').style.opacity = 1;
    document.querySelector('.container').style.filter = 'blur(40)';
    setTimeout(() => {
        document.querySelector('.buttons').style.opacity = 1;
        document.querySelector('.buttons').style.filter = 'blur(40)';
    }, 2000); // Delay for showing buttons

     // Start background music on page load
     bgMusic.play();
};

bgMusic.play();

function noClicked() {
    bgMusic.play(); 
    
    if (noClickCount < 4) {
        document.getElementById('mainImage').src = images[noClickCount];
        document.getElementById('mainText').innerText = texts[noClickCount];
    } else {
        const noButton = document.getElementById('noButton');
        noButton.style.position = "absolute";
        noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + "px";
        noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + "px";
    }
    
    noClickCount++;
    if (noClickCount === 6) {
        document.getElementById('mainImage').src = "no6.gif";
        document.getElementById('mainText').innerText = "Do you think you can win against me?";
    }
}

function yesClicked() {
    yesMusic.currentTime = 120;
    yesMusic.play();
    bgMusic.pause();

    // Hide buttons
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';

    setTimeout(() => {
        document.getElementById('mainImage').src = "yes1.gif"; // Final image
        document.getElementById('mainText').innerHTML = `Yay! Mission Completed`;
    }, 0);

    setTimeout(() => {
        document.getElementById('mainImage').src = "yes2.gif"; // Final image
        document.getElementById('mainText').innerHTML = `
        Miss me<br>
        <button style="border: none;">
            <a href="https://wa.me/9466503764" class="whatsapp-link" style="text-decoration: none; color: white;">
                Here I am
            </a>
        </button>
    `;
         }, 4000);
}
