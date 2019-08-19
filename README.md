# Props

## The inuputs of React component

```JSX

const items = ["One Piece", "One Punch-Man", "NARUTO", "Doraemon"];

const List = ({ items }) => (
  <ul>
    <h3>Productions</h3>
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

const App = () => {
  return (
    <div className="App">
      <div className="productions">
        <List items={items} />
      </div>
    </div>
  );
};

```

## Can pass components as children

```JSX
const items = [ "Detective Conan", "Slam Dunk", "YuYu"];

const ListWithChildren = ({ items, children }) => (
  <ul>
      <h3>Productions</h3>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      {children}
  </ul>
);

const App=()=>(
      <ListWithChildren items={items}>
        <h3>I am a child</h3>
      </ListWithChildren>
  )
```

## Change properties in component, will not render again

```JSX
const ChangeProps = ({ name }) => {
  return (
    <h1>
      {name}
      <button
        onClick={() => {
          name = "Parker";
        }}
      >
        Change Name
      </button>
    </h1>
  );
};
```

### Run `npm start` to start
