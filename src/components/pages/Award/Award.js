import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import history from '../../../core/history';
import { commonFetch } from '../../../actions/omg';
import { hideModal } from '../../../actions/modal';
import RedEnvelope from '../../awards/RedEnvelope';
import { ACTIVITY_GROUP_ADD, ACTIVITY_GROUP_LIST } from '../../../constants';

class Award extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.selectAward = this.selectAward.bind(this);

    const awardType = props.awardType === '' ? 'redEnvelope' : props.awardType;
    this.state = {
      awardType,
      awardTypes: [
        {
          name: '红包',
          value: 'redEnvelope',
        }, {
          name: '加息券',
          value: 'interest',
        }, {
          name: '体验金',
          value: 'experience',
        }, {
          name: '优惠券',
          value: 'coupon',
        }, {
          name: '实物奖',
          value: 'entity',
        },
      ],
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.awardType !== '') {
      this.setState({
        awardType: nextProps.awardType,
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
    const ruleName = e.target.value;
    if(!this.props.modal) {
      history.push(`/award/${ruleName}`);
    } else {
      this.setState({
        awardType: ruleName,
      });
    }
  }

  render() {
    let currentAward = '类型未找到';
    console.log(this.state.awardType);
    switch (this.state.awardType) {
      case 'redEnvelope':
        currentAward = <RedEnvelope {...this.props}  activityId={this.props.activityId} />;
        break;
      default:
        currentAward = this.state.awardType;
    }
    return (
      <div>
        {this.state.awardTypes.map(award => {
          let checked = false;
          if (this.state.awardType === award.value) {
            checked = true;
          }
          return (
            <label key={`redio-${award.value}`} className="c-input c-radio">
              <input
                checked={checked}
                name="award-add"
                value={award.value}
                type="radio"
                onChange={this.selectAward}
              />
              <span className="c-indicator"></span>
              {award.name}
            </label>
          );
        })}
        <hr />
        {currentAward}
      </div>
    );
  }
}
Award.propTypes = {
  dispatch: PropTypes.func.isRequired,
  awardType: PropTypes.string,
}

Award.defaultProps = {
  modal: false,
  awardType: '',
}

export default connect(state => {
  const { omg } = state;
  const errorMsg = omg.errorMsg[ACTIVITY_GROUP_ADD] || '';
  return {
    errorMsg,
  };
})(Award);
