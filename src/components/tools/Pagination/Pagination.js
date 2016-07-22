import React, { PropTypes, Component } from 'react';
import history from '../../../core/history';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.jump = this.jump.bind(this);
  }
  jump(e) {
    console.log('fakfal');
    const page = e.target.dataset.page;
    const location = history.getCurrentLocation();
    console.dir(location);
    history.push('/fafa');
    history.push({ ...location, search: `?page=${page}` });
  }
  render() {
    return (
      <nav>
        <ul className="pagination pagination-sm">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item"><button onClick={this.jump} className="page-link" data-page="1">1</button></li>
          <li className="page-item"><button onClick={this.jump} className="page-link" data-page="2">2</button></li>
          <li className="page-item"><button onClick={this.jump} className="page-link" data-page="3">3</button></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
//  currentPage: PropTypes.number.isRequired,
//  lastPage: PropTypes.number.isRequired,
}

Pagination.defaultProps = {
}

export default Pagination;
