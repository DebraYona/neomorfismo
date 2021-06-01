/* eslint-disable jsx-a11y/anchor-is-valid */
import { Layout, Menu, Input } from 'antd';
import { useRouter } from 'next/router';
import { DesktopOutlined, SearchOutlined } from '@ant-design/icons';
import { FC, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from './head';

const { Content, Sider } = Layout;
const { SubMenu, Item: MenuItem } = Menu;
const activeClass = 'ant-menu-item-selected';

interface Props extends React.HTMLAttributes<any> {
  readonly children?: React.ReactNode;
  readonly description?: string;
  readonly ogImage?: string;
  readonly url?: string;
}

const MainLayout: FC<Props> = ({
  title,
  description,
  ogImage,
  url,
  children,
}) => {
  const router = useRouter();
  const { asPath } = router;
  const [siderCollapsed, setSiderCollapsed] = useState<boolean>(true);

  const onCollapse = (collapsed: boolean) => {
    setSiderCollapsed(collapsed);
  };

  return (
    <LayoutWrapper>
      <Head
        title={`Twin | ${title}`}
        description={description}
        ogImage={ogImage}
        url={url}
      />
      <FullHeightLayout>
        <Sider
          theme="dark"
          collapsible
          collapsed={siderCollapsed}
          onCollapse={onCollapse}
        >
          <div style={{ height:"20px", margin:"auto"}}></div>
          <div className="logo" style={{ height:"80px", margin:"auto"}} >
          <ButonSider style={{ background:"#3395FF",height:"60px",width: "60px", margin:"auto"}}><IconSider src="twin.svg" /></ButonSider>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <StyledSearch
              
              suffix={
                <SearchOutlined
                  style={{
                    fontSize: '14px',
                    color: '#1da7ff',
                    borderRadius: '2px',
                    background:"f8f8f8"
                  }}
                />
              }
              placeholder="Busqueda..."
            />
          </div>
          
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline"> 
                       
            <MenuItem key="1" icon={<ItemSider name="Buscamos" subname="por ti" icon="./buscamos.svg"></ItemSider>}>
              <Link href="/">
                <a>Buscamos por ti</a>                
              </Link>
            </MenuItem>
            <MenuItem key="2" icon={<ItemSider name="Vendemos" subname="por ti" icon="./vendemos.svg"></ItemSider>}>
              <Link href="/cryptomoneda">
                <a>Vendemos por ti</a>                
              </Link>
            </MenuItem>
            <MenuItem key="3" icon={<ItemSider name="Empresas" subname=""   icon="./empresas.svg"></ItemSider>}>
              <Link href="/transacciones">
                <a>Empresas</a>                
              </Link>
            </MenuItem>
            <MenuItem style={{height:"60px"}} key="4" icon={<ItemSider name="Productos" subname="" icon="./productos.svg"></ItemSider>}>
              <Link href="/marketplace">
                <a>Productos</a>                
              </Link>
            </MenuItem>
            <MenuItem key="5" icon={<ItemSider name="Servicios" subname="" icon="./servicios.svg"></ItemSider>}>
              <Link href="/perfil">
                <a>Servicios</a>                
              </Link>
            </MenuItem>
            <MenuItem key="6" icon={<ItemSider name="Evento" subname="" icon="./eventos.svg"></ItemSider>}>
              <Link href="/logout">
                <a>Evento</a>                
              </Link>
            </MenuItem>
            <MenuItem key="7" icon={<ItemSider name="Subasta" subname="" icon="./subastas.svg"></ItemSider>}>
              <Link href="/logout">
                <a>Subasta</a>                
              </Link>
            </MenuItem>
            <MenuItem key="8" icon={<ItemSider name="Bolsa " subname="de compra" icon="./bolsa-compra.svg"></ItemSider>}>
              <Link href="/logout">
                <a>Bolsa de compra</a>                
              </Link>
            </MenuItem>
            <MenuItem key="10" icon={<ItemSider name="Registro " subname="de marca" icon="./registro.svg"></ItemSider>}>
              <Link href="/logout">
                <a>Registro de marca</a>                
              </Link>
            </MenuItem>
            <MenuItem key="11" icon={<ItemSider name="beneficio" subname="de membresia" icon="./beneficios.svg"></ItemSider>}>
              <Link href="/logout">
                <a>Beneficio de membresia</a>                
              </Link>
            </MenuItem>
            <MenuItem key="12" icon={<ItemSider name="directorio" subname="empresarial" icon="./directorio.svg"></ItemSider>}>
              <Link href="/marketplace">
                <a>Directorio empresarial</a>                
              </Link>
            </MenuItem>
            <MenuItem key="13" icon={<ItemSider name="soporte" subname="" icon="./soporte2.svg"></ItemSider>}>
              <Link href="/soporte">
                <a>Soporte</a>                
              </Link>
            </MenuItem>
            <MenuItem key="14" icon={<ItemSider name="ingresar" subname="" icon="./user.svg"></ItemSider>}>
              <Link href="/logout">
                <a>Ingresar</a>                
              </Link>
            </MenuItem>
            <MenuItem key="15" icon={<ItemSider name="Crear" subname="cuenta" icon="./ingresar.svg"></ItemSider>}>
              <Link href="/logout">
                <a>Crear cuenta</a>                
              </Link>
            </MenuItem>

          </Menu>
        </Sider>
        {/* <CustomNProgress /> */}
        <Layout className="layout">
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <StyledSearch
              suffix={
                <SearchOutlined
                  style={{
                    fontSize: '24px',
                    color: '#1da7ff',
                    borderRadius: '5px',
                  }}
                />
              }
              placeholder="Busqueda..."
            />
          </div>
          <Content>
            <div className="content-body">{children}</div>
          </Content>
        </Layout>
      </FullHeightLayout>
    </LayoutWrapper>
  );
};

interface MenuProps{
  name: string;
  subname: string;
  icon: string;
}

const ItemSider: FC<MenuProps> =({
  name ="TWINCOIN",
  subname ="TWINCOIN",
  icon = "./twin.svg"
}) => {

  return(
    <ElementSider>
        <ButonSider><IconSider src={icon} /></ButonSider>
        <ContainerText>
          <TextSider>{name}</TextSider>
          <TextSider>{subname}</TextSider>
        </ContainerText>
       
     
     
    </ElementSider>

  )
}

const FullHeightLayout = styled(Layout)`
  & .ant-layout {
    background: #fff;
  }
  & .ant-layout-sider{
    min-width: 250px;
  }
  height: 100%;
  & .ant-menu {
    background: #F8F8FC;
  }
  & .ant-layout-sider-trigger{
    background: #F8F8FC;
    min-width: 250px;
    width: 250px;
  }
  & .ant-layout-sider{
    background: #F8F8FC;
    height:200px;
  }
  & .ant-menu-item{
    height:50px;
    margin-top:10px;
    margin-bottom:10px;
  }
  li{ 
    height:60px;
  
  }
`;
const StyledKey = styled.img`
  width: 25px;
  margin-right: 25px;
`;
const StyledSearch = styled(Input)`
  & .ant-input {
    width: 0;
  }
  width: max-content;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 4px;
  margin-right: 20px;
  border-radius: 15px;
  border-color: #ffffff;
  box-shadow: 10px 10px 20px #c7c7c7, -10px -10px 20px #ffffff;
  transition: width 0.3s;
  backface-visibility: hidden;
  &:hover {
    .ant-input {
      display: inline-block;
      width: 400px;
    }
  }
`;
const LayoutWrapper = styled.div`
  position: absolute;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
`;
const WrapperSider = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin: 4px 8px 4px 8px;

  & > div {
    margin-right: 12px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
const ContainerText = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  border-radius: 15px;
  padding-left: 14px;
  padding-right: 16px;
  align-content: center;
`;
const ElementSider = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin-top:5px;
  margin-bottom:6px;

`;
const ButonSider = styled.div`
  background: var(--light) 0% 0% no-repeat padding-box;
  background: #F8F8FC 0% 0% no-repeat padding-box;  
  box-shadow:  4px 4px 4px #d0d0d4, 
             -4px -4px 4px #f8f8f8;
  border-radius: 12px;
  opacity: 1;
  width: 40px;
  height: 40px;
  margin-right: 15px;

`;

const IconSider = styled.img`
  margin: 6px;  
  width: 30px;
`;

const TextSider = styled.div`
  width: 66px;
  text-align: left;
  font: Bold 11px/17px Heebo;
  letter-spacing: 0.44px;
  color: #99A0AF;
  text-transform: uppercase;

`;
export default MainLayout;
