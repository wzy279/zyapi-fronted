import { PageContainer } from '@ant-design/pro-components';
import {List, message, Card, FloatButton} from "antd";
import React,{ useEffect,useState } from 'react';
import {getlistUsingGET} from "@/services/zyapi-backend/xfMessageController";
import {PlusOutlined} from "@ant-design/icons";
import { history } from 'umi';



const Welcome: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<API.BigModelListVO[]>([]);
const loadData= async ()=>{
  setLoading(true);
  try {
    const res = await getlistUsingGET();
    setList(res?.data ?? []);
    setLoading(false);
  } catch (e) {
    setLoading(false);
    message.error('请求失败!');
  }
  }




  useEffect(() => {
    loadData();
  }, []);

  return (
      <PageContainer title={"大模型聊天窗口"}>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={list}
          loading={loading}

          renderItem={(item) => (
            <List.Item>
              <Card
                hoverable={true}
                onClick={()=>{
                    const apiLink = `/ModelMessage/${item.id}/${item.name}`;
                    history.push(apiLink);
                    }
                }
                title={item.name}>
                {item.name}
              </Card>
            </List.Item>
          )}
        />
        <FloatButton icon={<PlusOutlined />} onClick={() => console.log('click')} tooltip={<div>新建对话</div>}/>
      </PageContainer>
  );
};

export default Welcome;
