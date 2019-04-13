import React, { Component } from 'react';
import NaviBar from "../src/components/navbar";
import Jumbi from "../src/components/jumbotron";
import BookSearch from "../src/components/bookSearch";

import {
  Table, Button, Form, FormGroup, Label, Input

} from 'reactstrap';


class App extends Component {

  render() {
    return (
        
      
      <div className="App container">
      
      <NaviBar />      
      
      <Jumbi />

      <BookSearch />

       
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>rating</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>This is a test</td>
              <td>3.5</td>
              <td>
                <Button color="success" size="sm" className="mr-2">Edit</Button>
                <Button color="danger" size="sm">Delete</Button>
              </td>
            </tr>
          </tbody>

        </Table>

      </div>
    );
  }
}

export default App;
