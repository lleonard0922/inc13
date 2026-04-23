import React, { Component } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (e) => {
    this.setState({ search: e.target.value.toLowerCase() });
  };

  onFilter = (eventKey) => {
    this.setState({ type: eventKey });
  };

  filterItem = (item) => {
    const matchesSearch =
      item.name.toLowerCase().search(this.state.search) !== -1;

    const matchesType =
      this.state.type === "All" || item.type === this.state.type;

    return matchesSearch && matchesType;
  };

  render() {
    const filteredItems = this.props.items.filter(this.filterItem);

    return (
      <div>
        <Form.Control
          type="text"
          placeholder="Search"
          onChange={this.onSearch}
        />

        <Dropdown onSelect={this.onFilter}>
          <Dropdown.Toggle variant="primary" id="dropdown-filter">
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
            <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <List items={filteredItems} />
      </div>
    );
  }
}

export default FilteredList;
