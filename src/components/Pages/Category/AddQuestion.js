import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Status, Card, } from '../../tools';
import { QUESTION_LIST } from '../../../constants';
import { showModal, hideModal } from '../../../actions/modal';
import { fetchAction } from '../../../actions/omg';
import { getConfig } from '../../../config/omg';
import hisotry from '../../../core/history';

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchAction({
      type: QUESTION_LIST,
    }));

    // const { questions } = this.props;
    // if (questions.data) {
    //   this.setState({items: questions.data});
    // }
  } 

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    const { questions } = nextProps;
    if (questions.data) {
      this.setState({items: questions.data});
    }
  }
  render() {
    const items = this.state.items
    const qids = this.props.qids ? this.props.qids.split(',') : [];
    return (
      <div>
        <Card title='问题列表'>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>名称</th>
                <th>内容</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => {
              const id = item.id;
              let added = false;
              if (qids.find((value) => (id == value))) {
                added = true;
              }
              return (<tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td><Status status={+item.status} /></td>
                <td>
                    <button hidden={!item.status || added} className="btn btn-sm btn-info-outline" data-id={item.id} onClick={this.props.handleAdd}>添加</button>
                    <button hidden={!item.status || !added} className="btn btn-sm btn-danger-outline" data-id={item.id} onClick={this.props.handleDel}>删除</button>
                </td>
              </tr>)
            })}
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
}

AddQuestion.propTypes = {
  questions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

AddQuestion.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const questions = omg[QUESTION_LIST] || {};
  return {
    questions,
  };
})(AddQuestion);
