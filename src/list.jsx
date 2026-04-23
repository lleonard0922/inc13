import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.name}>
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
