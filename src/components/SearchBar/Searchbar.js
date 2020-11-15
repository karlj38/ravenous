import React from "react";
import "./SearchBar.css";

class SortByOptions extends React.Component {
  constructor(props) {
    super(props);
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
      Distance: "distance",
    };
    // this.handleSortbyChange = this.handleSortbyChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      term: "",
      location: "",
      sortBy: this.sortByOptions["Best Match"],
    };
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? "active" : "";
  }

  handleSortbyChange(sortByOption) {
    this.setState({ sortBy: sortByOption }, () => {
      if (this.state.location) {
        this.props.searchYelp(
          this.state.term,
          this.state.location,
          this.state.sortBy
        );
      }
    });
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSearch(event) {
    if (this.state.location) {
      this.props.searchYelp(
        this.state.term,
        this.state.location,
        this.state.sortBy
      );
      if (event) {
        event.preventDefault();
      }
    }
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortbyChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <form>
          <div className="SearchBar-fields">
            <input
              placeholder="Search Businesses"
              onChange={this.handleTermChange}
            />
            <input placeholder="Where?" onChange={this.handleLocationChange} />
          </div>
          {/* <div class="SearchBar-submit" onClick={this.handleSearch}>
            <a>Let's Go</a>
          </div> */}
          <button className="SearchBar-submit" onClick={this.handleSearch}>
            Let's Go!
          </button>
        </form>
      </div>
    );
  }
}

export default SortByOptions;
