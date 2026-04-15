// Get the calculator display element
const display = document.getElementById('display');

// Get all the buttons
const buttons = document.querySelectorAll('button');

// Loop through each button and add a click event listener
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Get the value of the button that was clicked
        const value = event.target.value;

        // If 'AC' (All Clear) is clicked, empty the display
        if (value === 'all-clear') {
            display.value = '';
        } 
        
        // If 'DEL' (Delete) is clicked, remove the last character
        else if (value === 'delete') {
            if (display.value === 'Error') {
                display.value = '';
            } else {
                display.value = display.value.slice(0, -1);
            }
        } 
        
        // If '=' is clicked, calculate the result
        else if (value === '=') {
            try {
                // We use eval() to calculate the math expression string (e.g. "5+5*2")
                if (display.value !== '') {
                    display.value = eval(display.value);
                }
            } catch (error) {
                // If the user entered bad math (like "5++"), show 'Error'
                display.value = 'Error';
            }
        } 
        
        // For all other buttons (Numbers, Operators, Decimal Point)
        else {
            // First, if it says "Error", clear it off
            if (display.value === 'Error') {
                display.value = '';
            }
            // Add the clicked value to the display
            display.value += value;
        }
    });
});
