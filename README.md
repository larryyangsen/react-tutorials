# Component

## React is all about components

Creating components using functions, should use capital letter

```JavaScript

function App() {
 return (
   <div className="App">
     <h1>Hello World</h1>
   </div>
 );
}

```

```JavaScript
const App = () => {
 return (
   <div className="App">
     <h1>Hello World</h1>
   </div>
 );
}
```

```JavaScript
const App = () => (
   <div className="App">
     <h1>Hello World</h1>
   </div>
 );
```

### Run `npm start` to start
