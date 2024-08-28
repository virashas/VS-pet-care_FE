import './BasicLayout.css';
import { Layout } from 'antd';
import React, { useState } from 'react';
import {ScheduleOutlined,MenuOutlined,TransactionOutlined,ProductOutlined,TeamOutlined,UserOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { Col, Row } from 'antd';
import { BellOutlined,SettingOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { Avatar } from 'antd';
import SearchBar from './SearchBar';

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  color: 'rgba(0, 0, 0, 0.432)',
  height: 35,
  paddingInline: 0,
  lineHeight: '35px',
  backgroundColor: '#94C973',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#ffffff',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '70px',
  color: '#fff',
  backgroundColor: '#fff',
};

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Transactions',
    icon: <TransactionOutlined />,
    children: [
      { key: '1', label: 'Status' },
      { key: '2', label: 'Expenses' },
      { key: '3', label: 'Incomes' },
    ],
  },
  { key: '4', icon: <TeamOutlined />, label: 'Customers' },
  {
    key: 'sub2',
    label: 'Inventory',
    icon: <ProductOutlined />,
    children: [
      { key: '5', label: 'Medicines' },
      { key: '6', label: 'Petware' },
    ],
  },
  { key: '7', icon: <ScheduleOutlined />, label: 'Calendar' },
  { key: '8', icon: <UserOutlined />, label: 'Employees' }
];

const BasicLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Header style={headerStyle}>
        <Row>
          <Col span={6}><b className='ShopName'>VS Pet Care</b></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col className='BadgesCol' span={6}>
            <Row>
              <Col span={6}></Col>
              <Col span={3}></Col>
              <Col span={3}></Col>
              <Col className='BadgesCol' span={3}>
                <Badge dot>
                  <BellOutlined style={{ fontSize: 14 }} />
                </Badge>
              </Col>
              <Col className='BadgesCol' span={3}><SettingOutlined /></Col>
              <Col className='BadgesCol' span={3}><Avatar size={18} icon={<UserOutlined />} /></Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Layout>
      <Sider
          width="13%"
          style={siderStyle}
          collapsed={collapsed}
          onCollapse={setCollapsed}
        >
          <div>
            <Button icon={<MenuOutlined />} type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}/>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="light"
              inlineCollapsed={collapsed}
              items={items}
            />
          </div>
        </Sider>
        <Content style={contentStyle}>
          <SearchBar/>
          hello
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
