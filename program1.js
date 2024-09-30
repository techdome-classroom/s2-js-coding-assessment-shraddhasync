/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Create a stack to keep track of opening brackets
    const stack = [];
    
    // Map of closing brackets to their corresponding opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate through each character in the string
    for (const char of s) {
        // If the character is a closing bracket
        if (bracketMap[char]) {
            // Pop the top element from the stack if it's not empty, else assign a dummy value
            const topElement = stack.length > 0 ? stack.pop() : '#';
            // Check if the popped element matches the corresponding opening bracket
            if (topElement !== bracketMap[char]) {
                return false; // Mismatched brackets
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
};

module.exports = { isValid };
