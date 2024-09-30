/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Create a map for Roman numerals and their values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0; // Initialize total to 0
    
    // Loop through the string
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        // If the current numeral is less than the next, subtract it
        if (next && current < next) {
            total -= current;
        } else {
            total += current; // Otherwise, add it
        }
    }
    
    return total; // Return the final total
};

module.exports = { romanToInt };
