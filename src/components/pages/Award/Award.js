import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import history from '../../../core/history';
import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import RedEnvelope from '../../awards/RedEnvelope';
import Interest from '../../awards/Interest';
import { getConfig } from '../../../config/omg';
import { ACTIVITY_GROUP_ADD, ACTIVITY_GROUP_LIST } from '../../../constants';

class Award extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.selectAward = this.selectAward.bind(this);
    console.dir(props);

    const currentType = props.awardType;
    const awardTypes = getConfig('awardTypes');
    this.state = {
      currentType,
      awardTypes,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.awardType !== '') {
      this.setState({
        currentType: nextProps.awardType,
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
    if(!this.props.modal) {
      history.push(`/award/${type}`);
    } else {
      this.setState({
        currentType: type,
      });
    }
  }

  render() {
    console.log(this.state.currentType);
    let awardView = '类型未找到';
    switch (this.state.currentType) {
      case '1':
        awardView = <Interest {...this.props}  activityId={this.props.activityId} />;
        break;
      case '2':
        awardView = <RedEnvelope {...this.props}  activityId={this.props.activityId} />;
        break;
      default:
        awardView = this.state.currentType;
    }
    const { awardTypes, currentType} = this.state;
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
  awardType: PropTypes.string.isRequired,
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
