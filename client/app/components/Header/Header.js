import React from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">O-zone</Link>
    <Link to="/login">Sign in</Link>
    <hr />
    <nav>
      <Link to="/helloworld">Home</Link>
      <Link to="/helloworld">About us</Link>
      <Link to="/helloworld">Products Portfolio</Link>
      <Link to="/helloworld">Contact</Link>


    </nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    <hr />
  </header>
);

export default Header;
