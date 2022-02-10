import React, {useState} from 'react';
// antd
import { Layout, Typography, Menu, List, Image, Carousel  } from 'antd';
import {HomeOutlined, UserOutlined, LoginOutlined} from '@ant-design/icons';
// router
import { Link } from 'react-router-dom';
//hooks
import useIsMobile from '../hooks/useIsMobile';
//style
const styledSider = {
  backgroundColor: '#0d1321'
}

const data = [
  {
    id: 1,
    image: 'https://amp.ex-cdn.com/EXP/media.mgn.vn/resize/560x315/files/news/2020/09/11/review-marvels-avengers-biet-doi-sieu-anh-hung-tap-hop-175749.jpg',
    description: 'Avengers is the best movie',
    title: 'Avengers',
  },
  {
    id: 2,
    image: 'https://media-cdn.laodong.vn/storage/newsportal/2019/8/21/750466/Sinh-Nhat-Mot-Ong-Em-01.jpg',
    description: 'Spider man is the best movie',
    title: 'Spider man',
  },
  {
    id: 3,
    image: 'https://media-cdn.laodong.vn/storage/newsportal/2021/12/10/983341/Phim-The-Witcher-2.jpg?w=720&crop=auto&scale=both',
    description: 'The Witcher is the best movie',
    title: 'The Witcher',
  },
  {
    id: 4,
    image: 'https://a1.cdn.japantravel.com/photo/50097-188699/1440x960!/tokyo-one-piece-halloween-188699.jpg',
    description: 'One piece is the best movie',
    title: 'One piece',
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzGx8UiqR6oLoEsmzhdvCGBQ6Y5OVty5L_w&usqp=CAU',
    description: 'Naruto is the best movie',
    title: 'Naruto',
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9qWHn0FKtj620LkjaxyQa6zaWc-aFeB2og&usqp=CAU',
    description: 'Supperman is the best movie',
    title: 'Supperman',
  },
]


const MainLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false)
  const isMobile = useIsMobile()
  const { Content, Sider } = Layout;
  const {Title} = Typography
  return (
        <Layout hasSider style={{minHeight: '100vh'}}>
          <Sider
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

            <Menu style={styledSider} theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <span>Home</span>
                <Link to="/"/>
              </Menu.Item>

              <Menu.Item key="2" icon={<UserOutlined />}>
                <span>Register</span>
                <Link to="/register"/>
              </Menu.Item>

              <Menu.Item key="3" icon={<LoginOutlined />}>
                <span>Login</span>
                <Link to="/login"/>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={styledSider}>
              <Content>
                {children}
              </Content>
              
              {!isMobile && 
              <Sider width={300}
              style={{overflow: 'auto', position: 'relative', top: '0', right: '0', bottom: '0'}}
              >
                <List
                itemLayout='horizontal'
                dataSource={data}
                renderItem={item => (
                <Link to={`/movie/${item.id}`}>
                  <List.Item style={{padding: '10px'}}>
                    <List.Item.Meta
                      style={{color: '#fff'}}
                      avatar={<Image width={80} src={item.image}/>}
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
