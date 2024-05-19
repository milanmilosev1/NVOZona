document.addEventListener('DOMContentLoaded', (event) => {
        // Select all elements with the class "hiddenText"
        const hiddenTextElements = document.querySelectorAll('.projekat');

        // Set initial display state for hiddenTextElements
        hiddenTextElements.forEach((element) => {
            element.style.display = 'none';
        });

        // Add an event listener to all elements with the class "strelica"
        const strelicaElements = document.querySelectorAll('.strelica');
        strelicaElements.forEach((divElement) => {
            // Set initial text state for each div element
            let isHidden = true;

            divElement.addEventListener('click', () => {
                // Toggle the text of the div element
                if (isHidden) {
                    divElement.textContent = '⯆';
                } else {
                    divElement.textContent = '⯈';
                }

                // Toggle the display of corresponding hidden text element
                const correspondingTextId = divElement.dataset.correspondingText;
                const correspondingTextElement = document.getElementById(correspondingTextId);
                if (correspondingTextElement.style.display === 'none' || correspondingTextElement.style.display === '') {
                    correspondingTextElement.style.display = 'flex';
                } else {
                    correspondingTextElement.style.display = 'none';
                }

                // Toggle the state
                isHidden = !isHidden;
            });
        });
    });

