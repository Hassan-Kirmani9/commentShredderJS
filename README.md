# comment-shredder-js-react-js

Welcome to **comment-shredder-js-react-js**! This extension is designed to help you quickly remove comments from JavaScript, React, and Next.js code. It will clean up both single-line (`//`) and multi-line (`/* */`) comments, making your code ready for production or sharing.

## Features

- **Remove single-line comments**: Removes comments starting with `//`.
- **Remove multi-line comments**: Strips comments wrapped in `/* */`.
- **React.js support**: The extension is specifically designed to handle JavaScript code, including React.js syntax.

## How to Use

1. Open any JavaScript or React file in VS Code.
2. Press **`Ctrl+K Ctrl+M`** to trigger the comment removal command.
3. The extension will remove all comments in your active file and display a confirmation message.

### Example

Before:

```javascript
// This is a single-line comment
const result = add(5, 3); /* This is a multi-line comment */

/* 
    Another multi-line comment 
    spanning multiple lines
*/

After:

const result = add(5, 3);
