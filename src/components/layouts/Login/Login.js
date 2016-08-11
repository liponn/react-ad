import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Input, Card, Submit, Alert } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { ACCOUNT_LOGIN, ACCOUNT_PROFILE, ACCOUNT_CAPTCHA } from '../../../constants';

class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.refreshCaptcha = this.refreshCaptcha.bind(this);
    this.state = {
      errorMsg: '',
      fetching: false,
    }
  }
  componentDidMount() {
    this.refreshCaptcha();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile && !nextProps.profile.id && nextProps.profile.id !== this.props.profile.id) {
      this.refreshCaptcha();
    }
  }
  refreshCaptcha() {
    this.props.dispatch(fetchAction({
      type: ACCOUNT_CAPTCHA,
    }));
  }
  submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: ACCOUNT_LOGIN,
      method: 'POST',
      formData,
    })).then(json => {
      if (json.error_code === 0) {
        this.setState({
          fetching: true,
        });
        this.props.dispatch(fetchAction({
          type: ACCOUNT_PROFILE,
        })).then(() => {
          this.setState({
            fetching: false,
          });
        });
      } else {
        this.refreshCaptcha();
        this.setState({
          errorMsg: json.data.error_msg,
        });
      }
    });
  }
  render() {
    if (this.props.profile.id || (!this.state.fetching && this.props.fetching)) {
      return false;
    }
    return (
      <div className="row m-t-3" hidden={this.props.profile.id || (!this.state.fetching && this.props.fetching)} >
        <div className="col-md-offset-4 col-md-4" >
          <Card title="登录">
            <Alert msg={this.state.errorMsg} />
            <form className="m-t-1" onSubmit={this.submit}>
              <input type="hidden" name="img_key" value={this.props.captcha.key} />
              <Input labelName="手机号" name="username" />
              <Input labelName="密码" type="password" name="password" />
              <div className="form-group row">
                <label
                  className="col-sm-4 form-control-label text-xs-right"
                >验证码:</label>
                <div className="col-sm-3">
                  <input
                    type="text"
                    name="img_code"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-3 p-l-0">
                  <img title="点击刷新" style={{ width: '100%', height: '38px' }} alt="点击刷新" onClick={this.refreshCaptcha} src={this.props.captcha.img_src} />
                </div>
              </div>
              <Submit value="登录" />
            </form>
          </Card>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  captcha: PropTypes.object,
}

Login.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const login = omg[ACCOUNT_LOGIN] || {};
  const captcha = omg[ACCOUNT_CAPTCHA] || {};
  const profile = omg[ACCOUNT_PROFILE] || {};
  const fetchingList = omg.isFetching || {};
  const fetching = fetchingList[ACCOUNT_PROFILE] || false;
  return {
    profile,
    fetching,
    login,
    captcha,
  };

})(Login);
