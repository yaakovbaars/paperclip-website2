// soundboard.js

// Function to play the victory sound when the "Add to Cart" button is clicked
document.querySelector('.add-to-cart').addEventListener('click', function() {
    const sound = document.getElementById('victory-sound');
    sound.play();  // Play the victory sound
});
