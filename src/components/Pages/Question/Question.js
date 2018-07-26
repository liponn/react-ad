import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Status, ImgBox, Card, Pagination} from '../../tools';
import { QUESTION_LIST, QUESTION_ADD, QUESTION_PUT, QUESTION_DEL, QUESTION_ENABLE, QUESTION_DISABLE, QUESTION_INFO } from '../../../constants';
import { showModal, hideModal } from '../../../actions/modal';
import { fetchAction } from '../../../actions/omg';
import { getConfig } from '../../../config/omg';
import hisotry from '../../../core/history';
import AddModal from './AddModal';

class Question extends Component {
  constructor(props) {
    super(props);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
    this.add = this.add.bind(this);
    this.freshData = this.freshData.bind(this);
    this.del = this.del.bind(this);
    this.update = this.update.bind(this);
    this.showAdd = this.showAdd.bind(this);
    this.showUpdate = this.showUpdate.bind(this);
  }
  static items = [];
  componentDidMount() {
    this.freshData(this.props.page);
  }

  componentWillReceiveProps(nextProps) {
    // if (this.props.type !== nextProps.type) {
    //   this.freshData(nextProps.type);
    // }
    if (nextProps.page !== this.props.page) {
      this.freshData(nextProps.page);
    }
  }
  freshData(page) {
    const queryObj = {}
    queryObj.page = page;
    this.props.dispatch(fetchAction({
      type: QUESTION_LIST,
      queryObj,
      key: page,
    }));
  }
  showAdd() {
    const modalView = <AddModal type={this.props.type} submit={this.add}/>;
    this.props.dispatch(showModal(modalView));
  }
  enable(e) {
    const id = e.target.dataset.id;
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: QUESTION_ENABLE,
      method: 'POST',
      formData,
    })).then(() => {
      this.freshData(this.props.page);
    });
  }
  disable(e) {
    const id = $(e.target).data('id');
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: QUESTION_DISABLE,
      method: 'POST',
      formData,
    })).then(() => {
      this.freshData(this.props.page);
    });
  }
  add(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: QUESTION_ADD,
      method: 'POST',
      formData,
    })).then((json) => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.freshData(this.props.page);
      } else {
        this.setState({
          addErrorMsg: json.data.error_msg,
        });
      }
    });
  }

  update(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.dispatch(fetchAction({
      type: QUESTION_PUT,
      method: 'POST',
      formData,
    })).then((json) => {
      if (json.error_code === 0) {
        this.props.dispatch(hideModal(true));
        this.freshData(this.props.page);
      } else {
        this.setState({
          addErrorMsg: json.data.error_msg,
        });
      }
    });
  }
  showUpdate(e) {
    const id = e.target.dataset.id;
    const index = e.target.dataset.index;
    const item = this.items[index] || {};
    const modalView = <AddModal title="编辑" type={this.props.type} item={item} id={id} submit={this.update} />;
    this.props.dispatch(showModal(modalView));
  }
  del(e) {
    const id = $(e.target).data('id');
    if (!confirm(`确认删除 ID:${id} 吗?`)) {
      return;
    }
    const formData = new FormData;
    formData.append('id', id);
    this.props.dispatch(fetchAction({
      type: QUESTION_DEL,
      method: 'POST',
      formData,
    })).then(() => (this.freshData(this.props.page)));
  }

  render() {
    const questions = this.props.questions[this.props.page] || {};
    const btn = (
      <button
        hidden={this.props.modal}
        className="btn btn-info btn-sm pull-xs-right"
        onClick={this.showAdd}
      >添加</button>
    );
    const items = questions.data || [];
    this.items = items;
    return (
      <div>
        <Card title='问题列表' btn={btn}>
          <table className="table m-b-0 table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>名称</th>
                <th>内容</th>
                <th>关联问题</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => {
                let relative = ''
                if (item.relative) {
                  relative = JSON.parse(item.relative).join(',')
                }
                return(<tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{relative}</td>
                <td><Status status={+item.status} /></td>
                <td>
                  <button hidden={+item.status === 1} className="btn btn-sm btn-success-outline" data-id={item.id} onClick={this.enable}>上线</button>
                  <button hidden={+item.status === 0} className="btn btn-sm btn-warning-outline" data-id={item.id} onClick={this.disable}>下线</button>
                  <button className="btn btn-sm btn-success-outline" data-id={item.id} data-index={index} onClick={this.showUpdate}>编辑</button>
                  <button className="btn btn-sm btn-danger-outline" data-id={item.id} onClick={this.del}>删除</button>
                </td>
              </tr>)
            })}
            </tbody>
          </table>
        </Card>
        <Pagination currentPage={questions.current_page} lastPage={questions.last_page} />
      </div>
    );
  }
}

Question.propTypes = {
  questions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
}

Question.defaultProps = {
}

export default connect(state => {
  const { omg } = state;
  const questions = omg[QUESTION_LIST] || {};
  return {
    questions,
  };
})(Question);
