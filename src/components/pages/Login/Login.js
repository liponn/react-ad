import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Input, Card, Submit, Alert } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { ACCOUNT_LOGIN } from '../../../constants';
import history from '../../../core/history';


class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      errorMsg: '',
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
        history.push('/');
      } else {
        this.setState({
          errorMsg: json.data.error_msg,
        });
      }
    });
  }
  render() {
    return (
      <div className="row m-t-3" >
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
}

Login.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const login = omg[ACCOUNT_LOGIN] || {};
  return {
    login,
  };
})(Login);
