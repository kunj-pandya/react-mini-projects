import React from 'react'
import Accordion from './component/accordion';

const App = () => {

  const faqs = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building UIs."
    },
    {
      id: 2,
      question: "What is JSX?",
      answer: "JSX lets you write HTML-like syntax inside JavaScript."
    },
    {
      id: 3,
      question: "What are Hooks?",
      answer: "Hooks let you use state and other React features without writing a class."
    }
  ];


  return (
    <><Accordion data={faqs} /></>
  )
}

export default App