import React, {useState} from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Avatar, Card, Tabs} from 'antd';
import Message from "@/pages/User/Center/components/Message";
import RemoveAccount from "@/pages/User/Center/components/RemoveAccount";
import LoginRecord from "@/pages/User/Center/components/LoginRecord";
import LoginMethod from "@/pages/User/Center/components/LoginMethod";

const { Meta } = Card;

const Center: React.FC = () => {
  const [loading,setLoading] = useState(false);

  return(
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Tabs
          tabPosition={"left"}
          items={[{
                label: `个人中心`,
                key: 'center',
                children: <Message/>,

          },{
            label: `注销账号`,
            key: 'remove',
            children: <RemoveAccount/>,

          },{
            label: `登录记录`,
            key: 'loginRecord',
            children: <LoginRecord/>,

          },{
            label: `登录方式`,
            key: 'loginMethod',
            children: <LoginMethod/>,

          }]}
        />
        <div style={{marginRight: '20px'}}>
          <Card
            loading={loading}
            style={{width: 300}}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting"/>,
              <EditOutlined key="edit"/>,
              <EllipsisOutlined key="ellipsis"/>,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </div>
      </div>
    </>
  )
};

export default Center;
