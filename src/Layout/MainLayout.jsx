import React, {useState} from 'react';
// antd
import { Layout, Typography, Menu, List, Image } from 'antd';
import {HomeOutlined, UserOutlined, LoginOutlined} from '@ant-design/icons';
// router
import { Link, useLocation } from 'react-router-dom';
//context
import { useFilmsContext } from '../context/FilmContext';
//hooks
import useIsMobile from '../hooks/useIsMobile';
//style
const styledSider = {
  backgroundColor: '#0d1321'
}

const MainLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false)
  const isMobile = useIsMobile()
  const {Header, Content, Sider } = Layout;
  const {Title} = Typography
  const location = useLocation()
  const {films} = useFilmsContext()

  return (
        <Layout style={{minHeight: '100vh'}}>
          {!isMobile ? (<Sider
            style={styledSider}
            collapsible
            collapsed={collapsed} 
            onCollapse={() => setCollapsed(prev => !prev)}>
            <div>
              <Link to="/">
                <Title level={2} style={{textAlign: 'center', color: '#fff'}}>
                  Film
                </Title>
              </Link>
            </div>

            <Menu style={styledSider} theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline">
              <Menu.Item key="/" icon={<HomeOutlined />}>
                <span>Home</span>
                <Link to="/"/>
              </Menu.Item>

              <Menu.Item key="/register" icon={<UserOutlined />}>
                <span>Register</span>
                <Link to="/register"/>
              </Menu.Item>

              <Menu.Item key="/login" icon={<LoginOutlined />}>
                <span>Login</span>
                <Link to="/login"/>
              </Menu.Item>
            </Menu>
          </Sider>)
          : (
            <Header>
              <Menu theme="dark" defaultSelectedKeys={[location.pathname]} mode="horizontal">
                <Menu.Item key="/" icon={<HomeOutlined />}>
                  <span>Home</span>
                  <Link to="/"/>
                </Menu.Item>

                <Menu.Item key="/register" icon={<UserOutlined />}>
                  <span>Register</span>
                  <Link to="/register"/>
                </Menu.Item>

                <Menu.Item key="/login" icon={<LoginOutlined />}>
                  <span>Login</span>
                  <Link to="/login"/>
                </Menu.Item>
              </Menu>
            </Header>
            )
          }
          <Layout style={styledSider}>
              <Content>
                {children}
              </Content>
              {!isMobile &&
              <Sider 
              width={300}
              >
                <List
                itemLayout='horizontal'
                dataSource={films}
                renderItem={item => (
                <Link to={`/movie/${item._id}`} >
                  <List.Item style={{
                    height: '100px',
                    backgroundColor: '#fff', marginBottom: '20px'}}>
                    <List.Item.Meta
                      style={{color: '#fff'}}
                      avatar={<Image width={80} height={100} src={item.banner}/>}
                      title={item.title}
                      description={item.description}
                    />
                  </List.Item>
                </Link>
                )}
                />
              </Sider>}
          </Layout>
        </Layout>
  )
};

export default MainLayout;
