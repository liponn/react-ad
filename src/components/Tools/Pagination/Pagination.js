import React, { PropTypes, Component } from 'react';
import history from '../../../core/history';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.jump = this.jump.bind(this);
    this.state = {
      currentPage: this.props.currentPage,
      lastPage: this.props.lastPage,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentPage !== this.state.currentPage) {
      this.setState({
        currentPage: nextProps.currentPage,
      });
    }
    if (nextProps.lastPage !== this.state.lastPage) {
      this.setState({
        lastPage: nextProps.lastPage,
      });
    }
  }
  jump(e) {
    const page = e.target.dataset.page;
    if (this.props.unurl) {
      return this.props.onClick(page);
    }
    const location = history.getCurrentLocation();
    history.push({ ...location, query: Object.assign({}, location.query, { page }) });
  }
  render() {
    if (!this.state.currentPage || !this.state.lastPage || this.state.lastPage <= 1) {
      return false;
    }
    const { currentPage, lastPage } = this.state;
    const arr = [];
    for (let i = 0; i < lastPage; i++) {
      if ((i < currentPage - 3 && i !== 0) || (i > currentPage + 1 && i !== lastPage - 1)) {
        continue;
      }
      arr.push(i + 1);
    }
    return (
      <nav>
        <ul className="pagination pagination-sm">
          <li className="page-item">
            <button className="page-link" onClick={this.jump} data-page={currentPage > 1 ? currentPage - 1 : 1} aria-label="Previous">
              <span aria-hidden="true" data-page={currentPage > 1 ? currentPage - 1 : 1}>&laquo;</span>
              <span className="sr-only">Previous</span>
            </button>
          </li>
          {arr.map((index) => (
            <li key={index} className={currentPage === index ? 'page-item active' : 'page-item'}><button onClick={this.jump} className="page-link" data-page={index}>{index}</button></li>
          ))}
          <li className="page-item">
            <button className="page-link" onClick={this.jump} data-page={currentPage < lastPage ? currentPage + 1 : lastPage} aria-label="Next">
              <span aria-hidden="true" data-page={currentPage < lastPage ? currentPage + 1 : lastPage}>&raquo;</span>
              <span className="sr-only">Next</span>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  lastPage: PropTypes.number,
  unurl: PropTypes.bool,
  onClick: PropTypes.func,
}

Pagination.defaultProps = {
  unurl: false,
}

export default Pagination;
