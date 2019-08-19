# [Context](https://reactjs.org/docs/context.html)

## Share state between components

Context provides a way to pass data through the component tree without having to
pass props down manually at every level.

```JSX

const { createContext } = React;
export const context = createContext({items:[]});
const { Provider } = context;

<Provider value={{items}}>{children}</Provider>

```

### [createContext](https://reactjs.org/docs/context.html#reactcreatecontext)

Creates a Context object. When React renders a component that subscribes to this
Context object it will read the current context value from the closest matching
Provider above it in the tree.

```JSX
const MyContext = React.createContext(defaultValue);

```

### [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

Accepts a context object (the value returned from React.createContext) and
returns the current context value for that context. The current context value is
determined by the value prop of the nearest <MyContext.Provider> above the
calling component in the tree.

```JSX
const value = useContext(MyContext);
```

### Run `npm start` to start
