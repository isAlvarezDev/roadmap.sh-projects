export default [
    {
        id: 0,
        question: 'What is the difference between == and === in JavaScript?',
        answer: '== performs a type conversion before comparing the values, while === compares both the value and the data type directly.',
        canShowAnswer: false
    },
    {
        id: 1,
        question: 'What is an event in JavaScript and how is it handled?',
        answer: 'An event is an action or occurrence that happens in an HTML element, such as a click, scroll or page load. To handle an event, a function called an event handler is used.',
        canShowAnswer: false
    },
    {
        id: 2,
        question: 'What is an anonymous function in JavaScript?',
        answer: 'An anonymous function is a function that has no name. It is defined directly where it is used, often as a value assigned to a variable or as an argument to another function.',
        canShowAnswer: false
    },
    {
        id: 3,
        question: 'What is the difference between a function and a method in JavaScript?',
        answer: 'A function is a reusable block of code, while a method is a function that belongs to an object. The key difference is where it is defined and how it is invoked.',
        canShowAnswer: false
    },
    {
        id: 4,
        question: 'What is an infinite loop and how to avoid it?',
        answer: 'An infinite loop is a sequence of instructions that is executed repeatedly without a defined exit condition. To avoid this, make sure that the exit condition can be false, update the variables inside the loop, and avoid logical errors.',
        canShowAnswer: false
    },
    {
        id: 5,
        question: 'What is the DOM? How is the DOM manipulated with JavaScript?',
        answer: 'It\'s a representation of an HTML document in the form of objects. To manipulate it, you can use: querySelector(), textContent , setAttribute(), createElement(), appendChild() and others.',
        canShowAnswer: false
    },
    {
        id: 6,
        question: 'What is JSON and how is it used in JavaScript?',
        answer: 'JSON (JavaScript Object Notation) is a lightweight, easy-to-read text format used for data exchange. A JSON consists of: objects, arrays and values.',
        canShowAnswer: false
    },
    {
        id: 7,
        question: 'What is CommonJS and ES Modules?',
        answer: 'CommonJS and ES Modules are JavaScript module systems designed to organize and reuse code in different files. Both allow you to break your code into smaller, more manageable parts, facilitating collaboration and maintainability of larger projects.',
        canShowAnswer: false
    },
    {
        id: 8,
        question: 'What are the differences between null and undefined in JavaScript?',
        answer: 'Null and undefined represent the absence of a value, but they do it differently. null is an explicit assignment, while undefined is an implicit state.',
        canShowAnswer: false
    },
    {
        id: 9,
        question: 'How are exceptions handled in JavaScript?',
        answer: 'Exception handling in JavaScript is mainly done with the try...catch structure. This allows you to enclose a block of code that could generate an error inside a try. If an error occurs, execution jumps to the catch block, where you can catch the exception.',
        canShowAnswer: false
    },
    {
        id: 10,
        question: 'What is React and what are its main features?',
        answer: 'React is an open source JavaScript library for building user interfaces. Its key features include: components, JSX, virtual DOM, declarative.',
        canShowAnswer: false
    },
    {
        id: 11,
        question: 'What is JSX and why is it used?',
        answer: 'JavaScript XML is a syntax that allows you to write UI structures that look a lot like HTML, but inside your JavaScript code. It is used for clarity, integration and compilation with JS.',
        canShowAnswer: false
    },
    {
        id: 12,
        question: 'What is a pure component in React?',
        answer: 'It\'s a simple function that receives props and returns JSX, handle its own business and same inputs, same output.',
        canShowAnswer: false
    },
    {
        id: 13,
        question: 'What are props and state in React?',
        answer: 'Props are immutable data that are passed from a parent component to a child component. While state is internal data of a component that can change and cause re-renderings.',
        canShowAnswer: false
    },
    {
        id: 14,
        question: 'What are Hooks and why are they used?',
        answer: 'Hooks are functions that allow you to “hook into” React features such as state and side effects without writing classes. Such as useState, useEffect, useContext.',
        canShowAnswer: false
    },
    {
        id: 15,
        question: 'What are the rules of the Hooks?',
        answer: 'They can only be used within functional components and must be called in the higher order of a component.',
        canShowAnswer: false
    },
    {
        id: 16,
        question: 'What is the Virtual DOM and how does it work?',
        answer: 'An in-memory representation of the actual UI. When the state changes, React updates the Virtual DOM and calculates the minimal differences. It then applies only the necessary changes to the actual DOM, which improves performance.',
        canShowAnswer: false
    },
    {
        id: 17,
        question: 'What is reconciliation in React?',
        answer: 'The process of comparing the old Virtual DOM with the new one and applying the minimum necessary updates.',
        canShowAnswer: false
    },
    {
        id: 18,
        question: 'How do you optimize performance in a React application?',
        answer: 'Using memoization (avoid unnecessary re-rendering of components), lazy loading (load components only when necessary) and profiling (identify performance bottlenecks).',
        canShowAnswer: false
    },
    {
        id: 19,
        question: 'What is Redux and when is it used?',
        answer: 'Redux is a state management library used to manage the state of complex JavaScript applications. It provides a predictable and centralized way to manage your application data. It is used for large and complex applications, applications with many asynchronous actions and when you need a way to debug and track changes in state',
        canShowAnswer: false
    },
    {
        id: 20,
        question: 'What is TypeScript and what are its main advantages over JavaScript?',
        answer: 'TypeScript is a superversion of JavaScript that adds features such as optional static typing and object-oriented programming in a more robust way. This means that you can define the data types of your variables and functions, which helps you: catch errors earlier, write cleaner code, and write more robust code.',
        canShowAnswer: false
    },
]