# JSX (JavaScript XML)

## React template system

```JavaScript

const element = (
    <div>Hello,JSX</div>
)

```

## Expressions in JSX

With JSX you can write expressions inside curly braces { }.

```JavaScript
    const name = 'Moto';
    const element = <h1>Hello, {name} </h1>;
```

## HTML class

```JavaScript
const element = (
  <div className="App">
    <h1>Hello, {name} </h1>
  </div>
);
```

## Working with array and events

```JavaScript
    const name = 'Moto';

    const onClick = item => {
      alert(item);
    };
    const items = ["A", "B", "C"];
    const element = (
      <div className="App">
        <h1>Hello, {name} </h1>
        {items.map((item, i) => (
          <button disabled={i === 0} onClick={() => onClick(item)} key={i}>
            {item}
          </button>
        ))}
      </div>
    );
```

## JSX is not HTML

```JavaScript
<h1>123</h1>;

React.createElement('h1', null, '123');
```

### Run `npm start` to start
