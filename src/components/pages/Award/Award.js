import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import history from '../../../core/history';
import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import RedEnvelope from '../../awards/RedEnvelope';
import Interest from '../../awards/Interest';
import Coupon from '../../awards/Coupon';
import Experience from '../../awards/Experience';
import { getConfig } from '../../../config/omg';
import { AWARD_LIST, ACTIVITY_GROUP_ADD, ACTIVITY_GROUP_LIST } from '../../../constants';

class Award extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.selectAward = this.selectAward.bind(this);
    const currentType = props.type;
    const awardTypes = getConfig('awardTypes');
    this.state = {
      currentType,
      awardTypes,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== '') {
      this.setState({
        currentType: nextProps.type,
      });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { dispatch } = this.props;
    dispatch(commonFetch(ACTIVITY_GROUP_ADD, 'POST', formData))
      .then(code => {
        if (code === 0) {
          dispatch(hideModal());
          dispatch(commonFetch(ACTIVITY_GROUP_LIST))
        }
      });
  }
  selectAward(e) {
    const type = e.target.value;
    if (!this.props.modal) {
      history.push(`/award/${type}`);
    } else {
      this.setState({
        currentType: type,
      });
    }
  }

  render() {
    let awardView = '类型未找到';
    switch (this.state.currentType) {
      case '1':
        awardView = <Interest type={this.state.currentType} {...this.props} />;
        break;
      case '2':
        awardView = <RedEnvelope type={this.state.currentType} {...this.props} />;
        break;
      case '3':
        awardView = <Experience type={this.state.currentType} {...this.props} />;
        break;
      case '6':
        awardView = <Coupon type={this.state.currentType} {...this.props} />;
        break;
      default:
        awardView = this.state.currentType;
    }
    const { awardTypes, currentType } = this.state;
    return (
      <div>
        {Object.keys(awardTypes).map(key => {
          return (
            <label key={`redio-${key}`} className="c-input c-radio">
              <input
                checked={key === currentType}
                name="award-add"
                value={key}
                type="radio"
                onChange={this.selectAward}
              />
              <span className="c-indicator"></span>
              {awardTypes[key]}
            </label>
          );
        })}
        <hr />
        {awardView}
      </div>
    );
  }
}
Award.propTypes = {
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

Award.defaultProps = {
  modal: false,
}

export default connect(state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[ACTIVITY_GROUP_ADD] || '';
  return {
    errorMsg,
  };
})(Award);
