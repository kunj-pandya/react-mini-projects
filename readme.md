# React Mini Projects

A collection of small yet useful React projects built to strengthen my understanding of **React fundamentals**, **hooks**, and **component-based architecture**.

Each project focuses on a specific concept — from event handling to state management and controlled components.

---

## Projects Included

### 1. Background Color Changer
A simple app that dynamically changes the background color when a user clicks a button or selects a color option.

**Concepts Used:**
- `useState` for color state management  
- Event handling and dynamic rendering  

Folder: `background-color-changer/`

---

### 2. Password Generator
A utility app to generate secure, customizable passwords based on user preferences (length, symbols, numbers, etc.).

**Concepts Used:**
- React state and form handling  
- Conditional rendering  
- Clipboard API (`navigator.clipboard.writeText`)  
- Input range and checkbox controls
- used Hooks `useState`, `useCallback`, `useEffect`, `useRef`  

 Folder: `password-generator/`

---

### 3. Luxora Real Estate

A modern and responsive real estate web application built with React and Vite.
It showcases elegant property listings, smooth navigation, and a fast user experience — designed to help users explore homes, apartments, and luxury spaces effortlessly.

**Concepts Used:**

- Component-based architecture
- Routing and page structure
- Reusable UI components
- Props and state management

 Folder: `luxora-real-estate/`

---

 ### 4. To-Do List
A simple and interactive to-do list app that helps users manage daily tasks.  
Users can add, mark as complete, or delete tasks — demonstrating the power of React’s reactivity and conditional rendering.

**Concepts Used:**
- `useState` for task management  
- Conditional rendering for completed tasks  
- Dynamic list rendering with `.map()`  
- Local state updates and user interactivity  

Folder: `to-do-list/`

---
### 5. Form Validation App
A user-friendly form with real-time validation logic to ensure accurate input before submission.  
This project demonstrates custom validation logic without relying on HTML’s default `required` behavior.

**Concepts Used:**
- Controlled components (`value` and `onChange`)  
- Custom validation for email and password fields  
- Dynamic error messages  
- Conditional rendering for validation feedback  
- Hooks: `useState`, `useEffect`  

Folder: `form-validation/`

---

### 6. Weather Application
A sleek and modern weather app that fetches real-time weather data using the **OpenWeatherMap API**.  
It allows users to search any city and view its current temperature and weather conditions, with a dark and minimal UI built using Tailwind CSS.

**Concepts Used:**
- `useState` for city, weather, and error state  
- `fetch()` and `async/await` for API calls  
- Conditional rendering for data display  
- Error handling for invalid cities  
- Secure API key storage using `.env`  
- Tailwind CSS for modern dark theme styling  

Folder: `weather-application/`

---

 ### 7. Accordion Component
An elegant and interactive Accordion App built with React and Tailwind CSS.
It displays a list of FAQs where users can expand or collapse each question to reveal its answer, featuring smooth transitions and a modern design.

**Concepts Used:**
- useState for managing active accordion item
- Conditional rendering for toggling answers
- Reusable Accordion component pattern
- Event handling for open/close logic
- React Icons (FaChevronUp, FaChevronDown) for visual cues
- Tailwind CSS for responsive and modern UI

Folder: `accordion-app/`

---

### 8. AutoComplete Recipe Search App
A simple and interactive React.js project that implements an autocomplete search bar to fetch and display recipe data from a public API.  
It dynamically fetches and displays recipe suggestions from an API (https://dummyjson.com/recipes/search?q=) as the user types.
Users can select a recipe from the search results to view its detailed information instantly.

**Concepts Used:**

- useState and useEffect for state and side-effect management
- Debouncing using setTimeout for efficient API calls
- Caching results to prevent redundant API requests
- Conditional rendering for showing and hiding results dynamically
- Event handling (onFocus, onBlur, and onMouseDown) for smooth UX
- Dynamic data display on selecting a recipe

Folder: `autocomplete-searchbar`

## How to Run Locally

1. **Clone the repo**
   ```bash
    git clone https://github.com/<your-username>/react-mini-projects.git
    cd react-mini-projects

2. **Navigate to a project folder**

   ```bash
    Copy code
    cd background-color-changer
    # or
    cd password-generator
   ```

3. **Install dependencies**

   ```bash
    npm install
   ```  


4. **Run the app**

   ```bash
    npm run dev
    # or
    npm start
   ```  