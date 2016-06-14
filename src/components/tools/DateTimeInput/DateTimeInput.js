import React, { PropTypes, Component } from 'react';

class DateTimeInput extends Component {
  constructor(props) {
    super(props);
    this.limitChange = this.limitChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    
    this.state = {
      disabled: false,
      date: '',
      time: '',
    };
  }
  componentDidMount() {
    const dateChange = this.dateChange;
    const timeChange = this.timeChange;
    $(this.refs.datePicker).pickadate({
      format: 'yyyy-mm-dd',
      onSet: dateChange,
    });
    $(this.refs.timePicker).pickatime({
      format: 'HH:i:00',
      onSet: timeChange,
    });
  }
  limitChange(e) {
    if (e.target.checked) {
      this.setState({
        disabled: true,
        date: '',
        time: '',
      });
    } else {
      const dateValue = this.refs.datePicker.value;
      const timeValue = this.refs.timePicker.value;
      this.setState({
        disabled: false,
        date: dateValue,
        time: timeValue,
      });
    }
  }
  dateChange() {
    const value = this.refs.datePicker.value;
    this.setState({
      date: value,
    });
  }
  timeChange() {
    const value = this.refs.timePicker.value;
    this.setState({
      time: value,
    });
  }
  render() {
    let dateTime = '';
    if (this.state.date && this.state.time) {
      dateTime = `${this.state.date} ${this.state.time}`;
    }
    return (
      <div className="form-group row">
        <input type="hidden" value={dateTime} />
        <label className="col-sm-4 form-control-label text-xs-right">{this.props.labelName}:</label>
        <div className="col-sm-3">
          <input
            required={this.props.required}
            onChange={this.dateChange}
            disabled={this.state.disabled}
            ref="datePicker"
            type="text"
            className="form-control"
            placeholder="YYYY-MM-DD"
          />
        </div>
        <div className="col-sm-3">
          <input
            required={this.props.required}
            onChange={this.timeChange}
            disabled={this.state.disabled}
            ref="timePicker"
            type="text"
            className="form-control"
            placeholder="hh:mm:ss"
          />
        </div>
        <div hidden={!this.props.limit} className="col-sm-2 p-x-0">
          <label className="form-control-label"><input type="checkbox" onChange={this.limitChange} />不限制</label>
        </div>
      </div>
    );
  }
}

DateTimeInput.propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  required: PropTypes.bool,
  limit: PropTypes.bool,
}

DateTimeInput.defaultProps = {
  required: false,
  limit: false,
}

export default DateTimeInput;
