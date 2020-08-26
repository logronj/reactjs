import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: []
  };

//   constructor(){
//       super();
//       this.handleIncrement = this.handleIncrement.bind(this);
//       this.handleDecrement = this.handleDecrement.bind(this);
//   }

  renderTags(){
      if(this.state.tags.length === 0) return <p>Tags are empty</p>;
      return this.state.tags.map(tag => <li key={tag}>{tag}</li>);

  }


  handleIncrement = () => {
      this.setState({count : this.state.count + 1});
  }

  handleDecrement = () => {
      this.setState({count : this.state.count - 1});
}

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-success btn-sm">Increment</button>
            <button onClick={this.handleDecrement} className="btn btn-danger btn-sm" >Decrement</button>
                <ul>{this.renderTags()}</ul>
                {this.state.tags.length === 0 && "Please create new tags"}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
