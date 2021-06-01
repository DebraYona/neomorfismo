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
  Card,
} from 'antd';

import { UserOutlined } from '@ant-design/icons';

import styled from 'styled-components';
import ProfileCard from 'components/profile/profile-card';

const { Meta } = Card;

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
    <StyledItem name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </StyledItem>
  );
  return (
    <>
      <StyledCard>
        <ProfileCard />
        <StyledProgress percent={50} showInfo={false} />
      </StyledCard>
      <div>
        <Form form={form} name="profile" onFinish={onFinish} scrollToFirstError>
          <StyledItem
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <StyledInput placeholder="Nombre" />
          </StyledItem>
          <StyledItem
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <StyledInput placeholder="Apellidos" />
          </StyledItem>
          <StyledItem
            name="phone"
            rules={[
              { required: true, message: 'Please input your phone number!' },
            ]}
          >
            <StyledInput placeholder="Teléfono Movil" />
          </StyledItem>
          <StyledItem
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your Name',
              },
            ]}
          >
            <StyledInput placeholder="correo electronico" />
          </StyledItem>
          <StyledItem
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <StyledInput type="password" placeholder="contraseña" />
          </StyledItem>
          <StyledItem
            name="firma"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <StyledInput placeholder="Firma Electronica" />
          </StyledItem>
          <StyledItem
            name="direccion"
            rules={[
              { required: false, message: 'Please input your Username!' },
            ]}
          >
            <StyledInput placeholder="Direccion Completa(Opcional)" />
          </StyledItem>
          <StyledItem
            name="rfc"
            rules={[
              { required: false, message: 'Please input your Username!' },
            ]}
          >
            <StyledInput placeholder="RFC (Opcional)" />
          </StyledItem>
          <StyledItem>
            <ButtonSubmit type="primary" htmlType="submit">
              Guardar
            </ButtonSubmit>
          </StyledItem>
        </Form>
      </div>
    </>
  );
};
const StyledForm = styled(Form)``;
const StyledProgress = styled(Progress)`
  & .ant-progress-inner {
    background-color: #9e9e9e;
    color: #9e9e9e;
    width: 400px;
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
const StyledItem = styled(Form.Item)`
  &.ant-row {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  & .ant-form-item {
  }
  & .ant-form-item-control-input-content {
    display: flex;
    justify-content: center;
  }
`;
const StyledInput = styled(Input)`
  & .ant-form-item-control-input {
    background-color: #ffffff;
    color: #9e9e9e;
  }
  & .ant-input-password,
  & .ant-input {
    background-color: #ffffff;
    margin-top: 4px;
    margin-bottom: 4px;
    color: #9e9e9e;
    width: 400px;
  }
  padding: 8px;
  background-color: #ffffff;
  border-color: #ffffff;
  border-radius: 10px;
  color: #444444;
  box-shadow: 10px 10px 20px #c7c7c7, -10px -10px 20px #ffffff;
`;
const ButtonSubmit = styled(Button)`
  background-color: #1da7ff;
  color: #ffffff;
  border-radius: 25px;
  width: 150px;
  height: 40px;
`;
const StyledCard = styled(Card)`
  justify-content: center;
  border-color: #ffffff;
  width: 60%;
  margin: auto;
  font-size: 18px;
  height: 40%;
  & .ant-typography {
    color: #444444;
  }
`;
export default Profile;
