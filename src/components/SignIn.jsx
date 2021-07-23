import React, { Component } from 'react';

export default class sigin extends Component {
  render() {
    return (
      <div className="signin-form">
        <form>
          <input name="userName" />
          <input type="password" name="password" />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
