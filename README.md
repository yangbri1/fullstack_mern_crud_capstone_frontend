# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- - -
# Project Name
### Capstone Full Stack (MERN) Web Application --- <em> React (FRONT-END) </em>

## LINK TO BACKEND:
> https://github.com/yangbri1/react_crud_capstone_backend
- - -

## $\color{green}{Project \: Description}$
> Create a full-stack web application using MongoDB, Express, React, and Node.js (MERN).
>>


- - - 

## $\color{lightblue}{Technologies \: Used}$

### React (vite)
#### Built-in React boilerplate, React fragments `<>` (parent container in return block)

### React hooks

> Create state (variable) for functional components with an initial value, managed using its set function
* `useState()` 
> To fetch from the backend/API, perform transitions, animations on that updates the DOM (ex. timer)
* `useEffect()` 
> Access the dynamic parameters (:id -- placeholder) from inputted path URL
* `useParams()` 
> Navigate between different routes in the app
* `useNavigate()`

### React Router Dom
#### Both are navigation components
* `<Link>` component
* `useNavigate()` functional component (when there is not link)

### Axios Library
#### Enact full Create, Read, Update, and Delete capabilities from front-end to backend ...
> Use in retrieval of all documents (animations, literary_works, forums) or one document by is unique "_id". Afterwards populating the browser DOM pages
>> * `axios.get()`

> Create an animation, literary_work, or forum using this Axios HTTP POST request.
>> * `axios.post()`

> Having this in conjunction with `axios.get()` being called beforehand to retrieve the selected document, enables changing parts of the data being received from the server-side backend. 
> **Note: `axios.put()` alternative also works
>> * `axios.patch()`

> Invoking this collects the animation, literary_work, or forum from the dataset by its unique "_id" to the front-end and remove it
>> * `axios.delete()`


### AJAX
#### "Async" function required to make "await" fetch data (Promise)
#### Heading `<h1>`... tags, `<div>` containers, `<footer>`, `<button>`, `<a>`, etc.

### Error-handling 
```
    try(){ 
    ... 
    }
    catch(err){
        console.error(err);
    }
```

### Conditional Rendering
#### Ternary operator `? :` to toggle between invoking loaded() or loading() function
#### If statements -- filter between which API URL path to fetch data from depending on input form
#### Logical AND operator `&&` -- check if retrieved data exists

### React functional component
#### root App() ...

### React Bootstrap Framework -- for styling (partially functioning ...)
#### `<Navbar>`, `<Container>`, `<Button>`, `<Spinner>`
 
### React-Router-Dom
#### <Link> component (navigate to another functional component) was going to use it to re-direct to an external page (like a basic `<a>` so decided not to)

### useEffect()
> * This React hook used multiple times for BOM window.alert() on the "Home" functional component page. 
> * The countdown timer on the "NotFound" page.
> * Fetching of data from the backend on multiple pages and components

**Attempted to use useReducer() hook to try to cut down on the number of handler functions through the use of reducer ACTION's and dispatch function. However it was NOT quite working as well so I consolidated all the handler functions directly in the functional component/page**

**Additionally tried to use a controller function for fetching data from the backend, CRUD operations but ... Perhaps, later when optimizing the code a little more.**

### Git Bash: Linux commands on CLI

### Git version control

* Others: Github add, commits; JS package, VSCode IDE,  NPM JavaScript package manager, vite, 

- - - 

## $\color{lightgreen}{How \: To \: Get \: Started}$

### Install vite
```npm create vite@latest .```
>> * `React`
>> * `JavaScript`
```npm install``` 

### Run the asychronous app
> ```npm run dev```

### *Opens up application on default browser*
> `ctrl + 'http://localhost:5173'` 

### Go back to VS Code IDE
> * Go to `src` directory then to `App.jsx` 
> * Delete boilerplate in `return` block

### Begin

> **"Work Top-Down --- focus on hitting the MVP (functionality over form normally)". Tinker with CSS styling only after full CRUD functionalities are set **

- - - 

## $\color{orange}{Acknowledgements}$

### Front-end: Referred to previous 320.7 (OMDB), 320.8 (crypto), 320.9 (weighted) labs in lecture 320, todo-list lab, warmups, and SBA 320
### Back-end: Referred to SBA 319

### Full Stack CRUD example by
#### https://github.com/comeaudc/ProduceServer
#### https://github.com/comeaudc/320.4_Lecture_Grocery

### 3rd Party API 
 * https://newsapi.org/docs/endpoints/top-headlines

### Lecture Notes
 * https://ps-react-curriculum.herokuapp.com/320/7/lesson/

### Styling
 * https://coolors.co/palettes/popular
 * https://fonts.google.com/
 * https://freefrontend.com/css-glow-text-effects/
 * https://baseline.is/tools/css-gradients/

### .SVG Images 
 * https://www.svgrepo.com/svg/232027/duck-animal
 * https://www.svgrepo.com/vectors/duck/

``` *All used source materals are stored in the "reference" folder of this repo.* ```