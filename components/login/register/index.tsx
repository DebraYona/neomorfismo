import { FC, useState } from 'react';
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
} from 'antd';
import { EyeInvisibleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import ButtonRedesSociales from '../../redes-sociales';

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
const Register: FC = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();
  return (
    <>
      <div
        style={{ textAlign: 'center', marginTop: '50px', marginBottom: '20px' }}
      >
        <Text >REGISTRO</Text>
      </div>
      <div>
        <Form
          {...formItemLayout}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
        >
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
            <StyledInput placeholder="Correo electronico" />
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
            <StyledInput
              suffix={<EyeInvisibleOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </StyledItem>
          <StyledItem>
            <StyledItem name="remember" valuePropName="checked" noStyle>
              <Checkbox>He leido y acepto los terminos y condiciones</Checkbox>
            </StyledItem>
          </StyledItem>
          <Col
            span={12}
            style={{
              width: '100%',
              marginLeft: '100px',
              marginRight: '50px',
              paddingBottom: '15px',
            }}
          >
            <StyledItem shouldUpdate>
              {() => (
                <ButtonSubmit
                  type="primary"
                  htmlType="submit"
                  className="register-form-button"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    form.getFieldsError().filter(({ errors }) => errors.length)
                      .length >0
                  }
                >
                  INGRESAR
                </ButtonSubmit>
              )}
            </StyledItem>
          </Col>
        </Form>
      </div>
      <ButtonRedesSociales />
    </>
  );
};
const ButtonRedes = styled(Button)`
  margin: 2px;
  border-radius: 25px;
  background-color: #ffffff;
  border-color: #1da7ff;
  margin-left: 10px;
  margin-right: 5px;
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
  background-color: #1da7ff;
  color: #444444;
  border-radius: 25px;
  width: 200px;
  height: 40px;
`;

export default Register;
