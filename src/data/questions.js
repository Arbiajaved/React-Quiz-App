const questions = {
  easy: [
    { question: "Which hook is used to manage state in React?", options: ["useState", "useEffect", "useReducer", "useMemo"], answer: "useState" },
    { question: "What does JSX stand for?", options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extension"], answer: "JavaScript XML" },
    { question: "Which method is used to render a React component?", options: ["ReactDOM.render()", "renderComponent()", "React.render()", "DOM.render()"], answer: "ReactDOM.render()" },
    { question: "Which keyword is used to create a React component?", options: ["function", "component", "class", "var"], answer: "function" },
    { question: "Which command is used to create a new React app?", options: ["npx create-react-app", "npm new react-app", "react init", "npm react-create"], answer: "npx create-react-app" },
    { question: "Which attribute is used to add a class in JSX?", options: ["className", "class", "classID", "classRef"], answer: "className" },
    { question: "How do you embed JavaScript expressions in JSX?", options: ["{}", "[]", "<>", "$"], answer: "{}" },
    { question: "What is the default port when running 'npm start'?", options: ["3000", "8080", "5000", "4000"], answer: "3000" },
    { question: "Which company developed React?", options: ["Google", "Facebook", "Microsoft", "Apple"], answer: "Facebook" },
    { question: "React is mainly used for building?", options: ["Databases", "UI", "Servers", "APIs"], answer: "UI" }
  ],
  medium: [
    { question: "Which hook is used for side effects?", options: ["useReducer", "useContext", "useEffect", "useRef"], answer: "useEffect" },
    { question: "Purpose of React Router?", options: ["State management", "Styling", "Navigation", "Connecting APIs"], answer: "Navigation" },
    { question: "What is a key prop used for?", options: ["Styling elements", "Identifying elements in lists", "Managing state", "Handling events"], answer: "Identifying elements in lists" },
    { question: "Which hook is used to manage global state in React?", options: ["useState", "useEffect", "useReducer", "useContext"], answer: "useContext" },
    { question: "Which method updates state in functional components?", options: ["setState()", "updateState()", "changeState()", "useState()"], answer: "useState()" },
    { question: "How do you pass data between sibling components?", options: ["Props", "State", "Context API", "useReducer"], answer: "Context API" },
    { question: "What is 'lifting state up' in React?", options: ["Moving state to parent", "Deleting state", "Using Redux", "Using hooks"], answer: "Moving state to parent" },
    { question: "Which hook is used for storing a mutable value without re-rendering?", options: ["useState", "useRef", "useEffect", "useMemo"], answer: "useRef" },
    { question: "What does React.Fragment do?", options: ["Wraps elements without extra nodes", "Creates a new DOM node", "Manages state", "None"], answer: "Wraps elements without extra nodes" },
    { question: "Which lifecycle hook is equivalent to componentDidMount in functional components?", options: ["useEffect(() => {}, [])", "useState()", "useReducer()", "useMemo()"], answer: "useEffect(() => {}, [])" }
  ],
  hard: [
    { question: "Pass data from parent to child component?", options: ["Context", "Props", "Redux", "useMemo"], answer: "Props" },
    { question: "Hook useful for memoizing values?", options: ["useRef", "useMemo", "useEffect", "useReducer"], answer: "useMemo" },
    { question: "What does React.StrictMode do?", options: ["Adds extra checks in dev", "Optimizes rendering", "Handles errors", "None"], answer: "Adds extra checks in dev" },
    { question: "Which hook helps to persist values without re-rendering?", options: ["useState", "useMemo", "useRef", "useEffect"], answer: "useRef" },
    { question: "Which library is used for state management in large apps?", options: ["Redux", "ReactDOM", "React Router", "Axios"], answer: "Redux" },
    { question: "What is the difference between controlled and uncontrolled components?", options: ["State vs Ref", "Props vs State", "useState vs useEffect", "None"], answer: "State vs Ref" },
    { question: "What does reconciliation mean in React?", options: ["DOM diffing and update", "Data fetching", "Routing", "CSS styling"], answer: "DOM diffing and update" },
    { question: "Which hook allows optimizing expensive computations?", options: ["useMemo", "useCallback", "useState", "useEffect"], answer: "useMemo" },
    { question: "Which hook is used to optimize function references?", options: ["useMemo", "useCallback", "useEffect", "useReducer"], answer: "useCallback" },
    { question: "How do you prevent unnecessary re-renders of child components?", options: ["React.memo", "useState", "useEffect", "useRef"], answer: "React.memo" }
  ]
};

export default questions;
