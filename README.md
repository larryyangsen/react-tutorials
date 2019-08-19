# State

## If you want to change your data value, then store it in the state

```JavaScript

const { useState } = React

const App = () => {
   const [name, setName] = useState('Harry');
   return (
       <div>
           {name}
           <button onClick={() => setName('Porter')}>Set to Porter</button>
       </div>
   );
};

```

### [useState](https://reactjs.org/docs/hooks-reference.html#usestate)

Returns a stateful value, and a function to update it.

```JavaScript
const [state, setState] = useState(initialState);

```

### [useRef](https://reactjs.org/docs/hooks-reference.html#useref)

```JavaScript
const refContainer = useRef(initialValue);
```

```JavaScript
const NewItem = ({ onAddNewItem }) => {
  const inputRef = useRef();
  const onSubmit = e => {
    e.preventDefault();
    onAddNewItem(inputRef.current.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input required ref={inputRef} />
      <button>+</button>
    </form>
  );
};
```

-   useRef returns a mutable ref object whose .current property is initialized
    to the passed argument (initialValue). The returned object will persist for
    the full lifetime of the component.

-   useState causes re-render; useRef does not

-   Both useState and useRef remembers their data after a re-render

### [React Hooks](https://reactjs.org/docs/hooks-intro.html)

### Implement two way binding with HTML input

```JavaScript
const TwoWayBindingInput = () =>{
  const [value,setValue] = useState('');
  const onChange =e =>{
    setValue(e.target.value)
  }
  const onClick = (e) =>{
    e.preventDefault();
    alert(value)
  }
  return (
    <form>
       <input required value={value} onChange={onChange}/>
       <button onClick={onClick}>Show Value</button>
    </form>
  )
}
```

### Run `npm start` to start
