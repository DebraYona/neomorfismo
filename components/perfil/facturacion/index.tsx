import { FC, useState } from 'react';
import {
  Form,
  Input,
  Typography,
  Progress,
  Select,
  Row,
  Col,
  Avatar,
  Button,
  AutoComplete,
} from 'antd';
import { QuestionCircleOutlined, UserOutlined } from '@ant-design/icons';

import styled from 'styled-components';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const { Text } = Typography;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Profile: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name="profile"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item>
          <Input.Password placeholder="contraseña" />
        </Form.Item>
        <Form.Item
          name="firma"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <StyledInput placeholder="Firma Electronica" />
        </Form.Item>
        <Form.Item
          name="direccion"
          rules={[{ required: false, message: 'Please input your Username!' }]}
        >
          <StyledInput placeholder="Direccion Completa(Opcional)" />
        </Form.Item>
        <Form.Item
          name="rfc"
          rules={[{ required: false, message: 'Please input your Username!' }]}
        >
          <StyledInput placeholder="RFC (Opcional)" />
        </Form.Item>
        <Form.Item
          style={{ width: '50%', margin: 'auto', paddingBottom: '10px' }}
        >
          <ButtonSubmit type="primary" htmlType="submit">
            Guardar
          </ButtonSubmit>
        </Form.Item>
      </Form>
    </>
  );
};

const StyledProgress = styled(Progress)`
  & .ant-progress-inner {
    background-color: #9e9e9e;
    color: #9e9e9e;
  }
  & .ant-progress-bg {
    background-color: #1da7ff;
  }
  margin: 2px;
`;
const StyledAvatar = styled(Avatar)`
  height: 200px;
  width: 300px;
  margin: auto;
`;
const StyledInput = styled(Input)`
  & .ant-form-item-control-input {
    background-color: #ffffff;
    color: #9e9e9e;
  }
  & .ant-input {
    background-color: #ffffff;
    color: #9e9e9e;
  }
  background-color: #ffffff;
  border-radius: 13px;
  color: #eeeeee;
  box-shadow: 5px 3px #eeeeee;
`;
const ButtonSubmit = styled(Button)`
  background-color: #1da7ff;
  color: #ffffff;
  border-radius: 25px;
  width: 150px;
`;
export default Profile;
