import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Form, TextArea, Container } from "semantic-ui-react";
import { marked } from "marked";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    input: "",
  };
  handleChange = (event) => {
    this.setState(() => ({
      input: event.target.value,
    }));
  };
  render() {
    return (
      <div>
        <Form>
          <h1>Editor</h1>
          <TextArea
            placeholder={"Type anything"}
            id="editor"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </Form>
        <Container>
          <h1>Previewer</h1>
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(this.state.input),
            }}
          />
        </Container>
      </div>
    );
  }
}
