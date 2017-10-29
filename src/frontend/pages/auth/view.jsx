import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Form, Icon, Input, Button, Row, Col } from 'antd';

const FormItem = Form.Item;

const { Header, Content } = Layout;

class NormalLoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err && values) {
        // console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const userNameDecorator = getFieldDecorator('userName', {
      rules: [{ required: true, message: 'Please input your username!' }],
    });
    const passwordDecorator = getFieldDecorator('password', {
      rules: [{ required: true, message: 'Please input your Password!' }],
    });
    const userNameInput = userNameDecorator(<Input
      prefix={<Icon type="user" style={{ fontSize: 13 }} />}
      placeholder="Username"
    />);
    const passwordInput = passwordDecorator(<Input
      prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
      type="password"
      placeholder="Password"
    />);
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {userNameInput}
        </FormItem>
        <FormItem>
          {passwordInput}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

NormalLoginForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFields: PropTypes.func,
  }).isRequired,
};

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const AuthComponent = () => (
  <Layout>
    <Header>
      <Row>
        <Col span={12} offset={10}>
          <span style={{ fontSize: '24px', color: 'white' }}>
            {'Welcome to Twister'}
          </span>
        </Col>
      </Row>
    </Header>
    <Content style={{ height: 'calc(100vh - 68px)' }}>
      <div style={{ width: '300px', marginTop: '170px', marginLeft: '40%' }}>
        <WrappedNormalLoginForm />
      </div>
    </Content>
  </Layout>
);

export default AuthComponent;
