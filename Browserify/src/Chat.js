var React = require('react');
const createReactClass = require("create-react-class");
 
var ChatMessage = require('./ChatMessage');
 
module.exports = createReactClass({
  getInitialState: function() {
    return {
      text: '',
      messages: []
    };
  },
 
  submit: function(ev) {
    ev.preventDefault();
 
    var newMessage = <ChatMessage message={this.state.text} />;
 
    this.setState({
      messages: this.state.messages.concat([newMessage]),
      text: ''
    });
  },
 
  updateInput: function(ev) {
    this.setState({
      text: ev.target.value
    });
  },
 
  render: function() {
    return <div>
      <div>{this.state.messages}</div>
      <form onSubmit={this.submit}>
        <input onChange={this.updateInput} value={this.state.text} type="text" placeholder="Your message" />
        <input type="submit" value="Send" />
      </form>
    </div>;
  }
});