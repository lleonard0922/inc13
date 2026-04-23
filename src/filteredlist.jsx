import React, { Component } from 'react';
import { FormControl, DropdownButton, MenuItem } from 'react-bootstrap';
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
        <FormControl
          type="text"
          placeholder="Search"
          onChange={this.onSearch}
        />

        <DropdownButton title="Filter" onSelect={this.onFilter}>
          <MenuItem eventKey="All">All</MenuItem>
          <MenuItem eventKey="Fruit">Fruit</MenuItem>
          <MenuItem eventKey="Vegetable">Vegetables</MenuItem>
        </DropdownButton>

        <List items={filteredItems} />
      </div>
    );
  }
}

export default FilteredList;
