
export const texts = [
    "Web Development",
    "Fronted Development",
    "Backend Development",
    "UI Designer"
];


export function animateText(element, texts) {
    let textIndex = 0;
    let charIndex = 0;
    let increment = true;

    function updateText() {
        const text = texts[textIndex];
        if (increment) {
            element.textContent = text.slice(0, charIndex) + '|';
            charIndex++;
            if (charIndex > text.length) {
                increment = false;
                setTimeout(updateText, 1000); // Hold the full text for a second
                return;
            }
        } else {
            charIndex--;
            element.textContent = text.slice(0, charIndex) + '|';
            if (charIndex === 0) {
                increment = true;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(updateText, 1000); // Hold the empty state for a second
                return;
            }
        }
        setTimeout(updateText, 100);
    }

    updateText();
}