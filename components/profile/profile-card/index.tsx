import { Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FC } from 'react';
import styled from 'styled-components';

const { Text } = Typography;
const ProfileCard: FC = () => {
  return (
    <Container>
      <Avatar shape="square" size={100} icon={<UserOutlined />} />
      <div>
        <Text>Debra Yoná</Text>
      </div>
      <div>
        <Text type="secondary">debra@twinchat.com.mx</Text>
      </div>
      <div>
        <Text type="secondary">Perfil al 50%</Text>
      </div>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

export default ProfileCard;
