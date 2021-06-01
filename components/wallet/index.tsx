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

const { Text, Link } = Typography;
const Wallet: FC = () => {
  return (
    <>
      <StyledCoin src="./logo.png" />
      <StyledWallet>
        <Text>New Tc wallet</Text>
        <Text>Twc</Text>
        <Text>Saldo disponible</Text>
        <Text>0</Text>
      </StyledWallet>
    </>
  );
};

const StyledCoin = styled.img`
  width: 25px;
  height: 25px;
  margin: auto;
  margin-left: 10px;
`;
const StyledWallet = styled.div`
  width: 400px;
  height: 50px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;

export default Wallet;
