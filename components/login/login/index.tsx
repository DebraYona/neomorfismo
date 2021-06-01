import { FC, useState, useEffect } from 'react';
import {
  Form,
  Input,
  Typography,
  Progress,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Avatar,
} from 'antd';
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

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
const Ingresar: FC = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  return (
    <>
      <div style={{ margin: 'auto' }}>
        <StyledLogo src="./twinexchange.png" />
      </div>
      <div
        style={{ textAlign: 'center', marginTop: '50px', marginBottom: '20px' }}
      >
        <Text >INGRESAR</Text>
      </div>
      <div>
        <Form
          {...formItemLayout}
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          form={form}
        >
          <StyledItem
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <StyledInput
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </StyledItem>
          <StyledItem
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <StyledInput
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </StyledItem>
          <StyledItem>
            <StyledItem
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[{ required: false }]}
            >
              <Checkbox>Recuerdame</Checkbox>
            </StyledItem>
          </StyledItem>

          <StyledItem shouldUpdate>
            {() => (
              <ButtonSubmit
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={
                  !form.isFieldsTouched(true) ||
                  form.getFieldsError().filter(({ errors }) => errors.length)
                    .length >0
                }
              >
                INICIAR SESÍON
              </ButtonSubmit>
            )}
          </StyledItem>
        </Form>
      </div>

      <div
        style={{ display: 'grid', alignContent: 'center', marginTop: '20px' }}
      >
        <div style={{ margin: 'auto' }}>
          <ButtonRedes icon={<FaFacebookF color="#3b5998" />} size="large" />
          <ButtonRedes icon={<TwitterOutlined />} size="large" />
          <ButtonRedes icon={<FcGoogle />} size="large" />
        </div>
      </div>
      <div style={{ display: 'grid', marginTop: '30px' }}>
        <ButtonSubmit htmlType="submit" className="login-form-button">
          RECUPERAR CONTRASEÑA
        </ButtonSubmit>
      </div>
    </>
  );
};

const ButtonRedes = styled(Button)`
  margin: 2px;
  background-color: #eeeeee;
  margin-left: 10px;
  margin-right: 5px;

  box-shadow: 10px 10px 20px #c7c7c7, -10px -10px 20px #ffffff;
  &.ant-btn {
    border-radius: 12px;
    height: 50px;
    width: 50px;
  }
`;
const StyledLogo = styled.img`
  height: 100px;
  margin: auto;
  display: grid;
`;
const StyledAvatar = styled(Avatar)`
  max-width: 360px;
  height: 200px;
  width: 300px;
  margin: auto;
`;
const StyledItem = styled(Form.Item)`
  &.ant-row {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  & .ant-form-item {
  }
  & .ant-form-item-control {
    display: flex;
    justify-content: center;
    margin: auto;
  }
  & .ant-form-item-control-input-content {
    display: flex;
  }
`;
const StyledInput = styled(Input)`
  & .ant-form-item-control-input {
    background-color: #eeeeee;
    align-content: center;
    display: grid;
  }
  & .ant-input {
    background-color: #eeeeee;
  }
  & .ant-form-item-control {
    margin: auto;
  }
  background-color: #eeeeee;
  border-radius: 13px;
  height: 40px;
  width: 450px;
`;
const ButtonSubmit = styled(Button)`
  background-color: #eeeeee;
  color: #444444;
  border-radius: 25px;
  width: 200px;
  height: 40px;
  margin: auto;
`;

export default Ingresar;
