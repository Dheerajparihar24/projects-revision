# Dynamic Greeting Card

## Topics

- React state management
- Rendering lists using the `map()` function
- Dynamic component rendering.

## Problem Statement

1. **Create a Greeting Card Component:** Design a `GreetingCard` component that accepts greeting (e.g., "Happy Birthday") and name (e.g., "John Doe") as props and displays them in a styled card format.

2. **Render a List of Greeting Cards:** In your `App` component, maintain an array of objects where each object represents a greeting card with a `greeting` and a `name`. Use the `map()` function to iterate over this array and render a `GreetingCard` component for each object.

3. **Styling:** Apply basic CSS styling to your greeting cards to make them visually appealing. This can include borders, padding, margins, and background colors.

## Boiler plate code:

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Template</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
  <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    // Your  code will go here
  </script>
</html>
```
