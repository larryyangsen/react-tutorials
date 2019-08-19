# [Router](https://reacttraining.com/react-router/)

## Navigate your components with router

### `npm install react-router-dom`

### Basic Use

```JSX
import { BrowserRouter as Router , Route ,Link} from 'react-router-dom';

const Home = () => <div>Welcome Home</div>;
const About = () => <div>It's me</div>;


const App = () => (
    <div className="App">
        <Router>
            <Route path="/" component={Home} />
            <Route path="/About" component={About} />
        </Router>
    </div>
);
```

### Params

```JSX

const Book = ({ match: { params } }) => <div>{books[params.index]}</div>;

<Route path="/Books/:index" component={Book} />

```

### Run `npm start` to start
