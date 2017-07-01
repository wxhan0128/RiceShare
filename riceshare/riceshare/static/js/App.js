import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';
import {
    LinkContainer
} from 'react-router-bootstrap';
// import {ChatRoom} from './chatRoom.js'

import {PostArea} from './postArea.js';
import {UserCenter} from './userCenter.js';


class Home extends React.Component {
    render() {
        return (
            <div>
                Home!!!
            </div>
        );
    }
}


class About extends React.Component {
    render() {
        return (
            <div>
                About
            </div>
        );
    }
}


class Topics extends React.Component {
    render() {
        return (
            <div>
                Topics
            </div>
        );
    }
}


class PostHome extends React.Component {
    render() {
        return (
            <div>
                <PostArea />
            </div>
        );
    }
}

class User extends React.Component {
    render() {
        return (
            <div>
                <UserCenter />
            </div>
        )
    }
}


class NavBar extends React.Component {
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            Riceshare
                        </Navbar.Brand>
                    </LinkContainer>
                </Navbar.Header>

                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search"/>
                    </FormGroup>
                    {' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>
                <Nav pullRight>
                    <LinkContainer to="/about"><NavItem eventKey={1}>About</NavItem></LinkContainer>
                    <LinkContainer to="/topics"><NavItem eventKey={2}>Topics</NavItem></LinkContainer>
                    <LinkContainer to="/postArea"><NavItem eventKey={4}>Test</NavItem></LinkContainer>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <LinkContainer to="/userCenter"><MenuItem eventKey={3.1}>My Account</MenuItem></LinkContainer>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>

            </Navbar>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />

                    <hr />

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                    <Route path="/postArea" component={PostHome}/>
                    <Route path="/userCenter" component={User}/>

                </div>
            </Router>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('react-root')
);
