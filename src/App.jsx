import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
const books = ['HTML', 'JavaScript'];
const Home = () => <div>Welcome Home</div>;
const About = () => <div>It's me</div>;
const Book = ({ match: { params } }) => <div>{books[params.index]}</div>;
const Books = () => (
    <div>
        <ol>
            {books.map((book, i) => (
                <li key={i}>
                    <Link to={`/books/${i}`}>{book}</Link>
                </li>
            ))}
        </ol>
    </div>
);

const App = () => (
    <div className="App">
        <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Books">Books</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Books" exact={true} component={Books} />
                <Route path="/Books/:index" component={Book} />
                <Redirect to="/" />
            </Switch>
        </Router>
    </div>
);

export default App;
