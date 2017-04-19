import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Input, Card, Submit, Alert } from '../../tools';
import { fetchAction } from '../../../actions/omg';
import { ACCOUNT_LOGIN, ACCOUNT_PROFILE, ACCOUNT_CAPTCHA } from '../../../constants';
import { authentication } from '../../../config';

class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.refreshCaptcha = this.refreshCaptcha.bind(this);
    this.state = {
      errorMsg: '',
      fetching: false,
      showCaptcha: false,
      particles: {
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#bbbbbb',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#cccccc',
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#bbbbbb',
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 4,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      },
    };
  }
  componentDidMount() {
    this.refreshCaptcha();
    if ( typeof particlesJS !== 'undefined') {
      window.particlesJS('app', this.state.particles);
    }
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
      } else if(json.error_code === 1002) {
        this.refreshCaptcha();
        this.setState({
          errorMsg: json.data.error_msg,
          showCaptcha: true,
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
    if (!authentication || this.props.profile.id || (!this.state.fetching && this.props.fetching)) {
      if(typeof window !== 'undefined') {
        if (window["pJSDom"] instanceof Array && window["pJSDom"].length > 0) {
          for (let i = 0; i < window["pJSDom"].length; i++)
            window["pJSDom"][i].pJS.particles.move.speed = 1;
        }
      }
      return false;
    }else{
      if(typeof window !== 'undefined') {
        if (window["pJSDom"] instanceof Array && window["pJSDom"].length > 0) {
          for (let i = 0; i < window["pJSDom"].length; i++){
            window["pJSDom"][i].pJS.particles.move.speed = 4;
          }
        }
      }
    }
    return (
      <div>
        <div
          className="row m-t-3"
          hidden={this.props.profile.id || (!this.state.fetching && this.props.fetching)}
        >
          <div className="col-md-offset-4 col-md-4" >
            <Card title="登录">
              <Alert msg={this.state.errorMsg} />
              <form className="m-t-1" onSubmit={this.submit}>
                <input type="hidden" name="img_key" value={this.props.captcha.key} />
                <Input labelName="手机号" name="username" />
                <Input labelName="密码" type="password" name="password" />
                <div hidden={!this.state.showCaptcha} className="form-group row">
                  <label
                    className="col-sm-4 form-control-label text-xs-right">验证码:</label>
                  <div className="col-sm-3">
                    <input
                      type="text"
                      name={this.state.showCaptcha ? 'img_code' : ''}
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-3 p-l-0">
                    <img
                      title="点击刷新"
                      style={{ width: '100%', height: '38px' }}
                      alt="点击刷新"
                      onClick={this.refreshCaptcha}
                      src={this.props.captcha.img_src}
                    />
                  </div>
                </div>
                <Submit value="登录" />
              </form>
            </Card>
          </div>
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
