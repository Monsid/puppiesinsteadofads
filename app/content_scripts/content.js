// Function to hide all iframes
function hideIframes() {
  // Get all iframe elements
  const iframes = document.getElementsByTagName('iframe');

  // Loop through each iframe
  for (let i = 0; i < iframes.length; i++) {
    console.log("reached")
    const iframe = iframes[i];

    // Hide the iframe
    iframe.style.display = 'none';
  }
}

// Call the function when the page loads
window.onload = hideIframes;