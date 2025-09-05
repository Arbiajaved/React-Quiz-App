const questions = {
  easy: [
    { question: "Which hook is used to manage state in React?", options: ["useState", "useEffect", "useReducer", "useMemo"], answer: "useState" },
    { question: "What does JSX stand for?", options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extension"], answer: "JavaScript XML" },
    { question: "Which method is used to render a React component?", options: ["ReactDOM.render()", "renderComponent()", "React.render()", "DOM.render()"], answer: "ReactDOM.render()" },
    { question: "Which keyword is used to create a React component?", options: ["function", "component", "class", "var"], answer: "function" },
    { question: "Which command is used to create a new React app?", options: ["npx create-react-app", "npm new react-app", "react init", "npm react-create"], answer: "npx create-react-app" }
  ],
  medium: [
    { question: "Which hook is used for side effects?", options: ["useReducer", "useContext", "useEffect", "useRef"], answer: "useEffect" },
    { question: "Purpose of React Router?", options: ["State management", "Styling", "Navigation", "Connecting APIs"], answer: "Navigation" },
    { question: "What is a key prop used for?", options: ["Styling elements", "Identifying elements in lists", "Managing state", "Handling events"], answer: "Identifying elements in lists" },
    { question: "Which hook is used to manage global state in React?", options: ["useState", "useEffect", "useReducer", "useContext"], answer: "useContext" },
    { question: "Which method updates state in functional components?", options: ["setState()", "updateState()", "changeState()", "useState()"], answer: "useState()" }
  ],
  hard: [
    { question: "Pass data from parent to child component?", options: ["Context", "Props", "Redux", "useMemo"], answer: "Props" },
    { question: "Hook useful for memoizing values?", options: ["useRef", "useMemo", "useEffect", "useReducer"], answer: "useMemo" },
    { question: "What does React.StrictMode do?", options: ["Adds extra checks in dev", "Optimizes rendering", "Handles errors", "None"], answer: "Adds extra checks in dev" },
    { question: "Which hook helps to persist values without re-rendering?", options: ["useState", "useMemo", "useRef", "useEffect"], answer: "useRef" },
    { question: "Which library is used for state management in large apps?", options: ["Redux", "ReactDOM", "React Router", "Axios"], answer: "Redux" }
  ]
};

export default questions;
