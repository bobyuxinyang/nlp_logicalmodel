import React, { PureComponent } from 'react';
import { Row, Col, Input, Button } from 'antd';

const { TextArea } = Input;

export default class LogicalModelList extends PureComponent {
  state = {
    adding: false,
    // modeList: [],
  };

  render() {
    const LogicalModel = () => {
      return (
        <div>
          <Row>
            <Col span={24}>
              {'背景 '}
              <TextArea autosize />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              目标
              <TextArea autosize />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              效果检验
              <TextArea autosize />
            </Col>
            <Col span={6}>
              输出
              <TextArea autosize />
            </Col>
            <Col span={6}>
              处理
              <TextArea autosize />
            </Col>
            <Col span={6}>
              输入
              <TextArea autosize />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              外部因素
              <TextArea autosize />
            </Col>
          </Row>
        </div>
      );
    };

    const ActionBar = () => {
      const handleCreateModel = e => {
        // todo: set adding new model to "true"
        console.log('handleCreateModel: ', e);
        this.setState({
          adding: true,
        });
      };
      const { adding } = this.state;
      return (
        <Button
          type="primary"
          icon="plus"
          size="large"
          onClick={handleCreateModel}
          disabled={adding}
        >
          创建新的逻辑模型
        </Button>
      );
    };

    return (
      <div>
        <Row>
          <Col span={3} />
          <Col span={18}>{LogicalModel()}</Col>
          <Col span={3} />
        </Row>
        <Row>
          <Col span={3} />
          <Col span={18}>{ActionBar()}</Col>
          <Col span={3} />
        </Row>
      </div>
    );
  }
}
