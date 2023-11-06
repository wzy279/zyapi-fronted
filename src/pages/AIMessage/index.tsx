import { getlocalmessageUsingGET,testUsingGET } from "@/services/zyapi-backend/xfMessageController";
import { useParams } from "@@/exports";
import { PageContainer } from '@ant-design/pro-components';
import { Breadcrumb,Button,Card,Divider,Form,message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React,{ useEffect,useState } from 'react';
import Markdown from "react-markdown";
import gfm from 'remark-gfm';
import { FloatButton } from 'antd';


const Welcome: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [list, setList] = useState<API.ModelMessageVO[]>([]);

  const params = useParams();
const loadData= async ()=>{
  if(!params.id){
      message.error('参数错误');
  }
  setLoading(true);
  try {
    // @ts-ignore
      const res = await getlocalmessageUsingGET({id:params.id});
    setList(res?.data ?? []);
    setLoading(false);
  } catch (e) {
    setLoading(false);
    message.error('请求失败!');
  }
  }
    const onFinish = async (values: any) => {
        const list2 = list;
        if (!values||!params.id) {
            message.error('参数错误！');
        }
        setLoading2(true)
        message.success("加载时间可能时间较长,请您耐心等待")
        try {
            const res = await testUsingGET({
                id: Number(params.id),
                text:values.text
            });
            console.log(res)
            list2.push({ role:"user",content:values.text });
            list2.push({ role:"assistant",content:res.data });
            setList(list2)
            message.success("调用成功")
            values.text=""
            setLoading2(false)
        } catch (e:any) {
            setLoading2(false)
            message.error('请求失败!'+e.message);
        }
    };




  useEffect(() => {
    loadData();
  }, []);

  return (
    <PageContainer title={'聊天窗口'} loading={loading}>
      <>
        <Breadcrumb
          items={[
            {
              title: <a href="/BigModel">聊天列表</a>,
            },
            {
              title: <a>{params.name}</a>,
            },
          ]}
        />
        <Card loading={loading2}>
          {list.map((item) => {
            return (
              <>
                <Divider orientation="left">{item.role}</Divider>
                <Markdown remarkPlugins={[gfm]}>{item.content}</Markdown>
              </>
            );
          })}
        </Card>
      </>
      <Card title={'发送'}>
        <Form name="basic" layout={'vertical'} onFinish={onFinish}>
          <Form.Item label="请输入想要问的内容" name="text">
            <TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
        <FloatButton.BackTop />
    </PageContainer>
  );
};

export default Welcome;
