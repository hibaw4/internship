import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '', // Search term
      location: '', // Location for the search
      sortBy: 'best_match', // Default sorting option
    };

    // Move sortByOptions to be a member variable of the class
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };

    // Bind methods to `this`
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  // Method to determine the CSS class for a sorting option
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  // Method to handle changing the sortBy state
  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  // Method to handle changes to the search term input
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  // Method to handle changes to the location input
  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSearch(event) {
    event.preventDefault();
    if (typeof this.props.searchYelp === 'function') {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    } else {
      console.error('searchYelp is not a function');
    }
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      const sortByOptionValue = this.sortByOptions[sortByOption];

      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={() => this.handleSortByChange(sortByOptionValue)}
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
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            value={this.state.term}
            onChange={this.handleTermChange}
          />
          <input
            placeholder="Where?"
            value={this.state.location}
            onChange={this.handleLocationChange}
          />
        </div>
        <div className="SearchBar-submit">
          <a
            href="#"
            onClick={this.handleSearch}
          >
            Let's Go
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
