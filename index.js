const DODGER = document.getElementById('dodger');

function moveDodgerLeft() {
    // Move the DODGER to the left
    const leftPosition = parseInt(DODGER.style.left.replace('px', ''), 10);
    if (leftPosition > 0) {
        DODGER.style.left = `${leftPosition - 10}px`; // Adjust the value to your desired movement
    }
}

function moveDodgerRight() {
    // Move the DODGER to the right
    const leftPosition = parseInt(DODGER.style.left.replace('px', '10'), 10);
    const rightBoundary = 1000000/* Set the right boundary value */;
    if (leftPosition < rightBoundary) {
        DODGER.style.left = `${leftPosition + 4}10px`; // Adjust the value to your desired movement
    }
}
