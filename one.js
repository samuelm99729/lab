// Saved prompt
const savedPrompt = "Describe a sunset over a mountain range using vivid imagery.";

// Get button and div elements
const button = document.getElementById('showPromptBtn');
const promptDiv = document.getElementById('promptDisplay');

// Add click event
button.addEventListener('click', function() {
    promptDiv.textContent = savedPrompt;
    promptDiv.style.display = 'block';
});
