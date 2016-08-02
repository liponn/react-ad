import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Input, Card, Submit, Alert } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { ACCOUNT_LOGIN, ACCOUNT_PROFILE } from '../../../constants';
import history from '../../../core/history';


class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      errorMsg: '',
      fetching: false,
    }
  }
  componentDidMount() {

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
        this.setState({
          errorMsg: json.data.error_msg,
        });
      }
    });
  }
  render() {
    return (
      <div className="row m-t-3" hidden={this.props.profile.id || (!this.state.fetching && this.props.fetching)} >
        <div className="col-md-offset-4 col-md-4" >
          <Card title="登录">
            <Alert msg={this.state.errorMsg} />
            <form className="m-t-1" onSubmit={this.submit}>
              <Input labelName="手机号" name="username" />
              <Input labelName="密码" type="password" name="password" />
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
}

Login.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const login = omg[ACCOUNT_LOGIN] || {};
  const profile = omg[ACCOUNT_PROFILE] || {};
  const fetchingList = omg.isFetching || {};
  const fetching = fetchingList[ACCOUNT_PROFILE] || false;
  return {
    profile,
    fetching,
    login,
  };

})(Login);
