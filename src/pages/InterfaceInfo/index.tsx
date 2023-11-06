import {getByIdUsingGET, invokeInterfaceUsingPOST} from '@/services/zyapi-backend/interfaceInfoController';
import { useParams } from '@@/exports';
import { PageContainer } from '@ant-design/pro-components';
import {Button, Card, Descriptions, Form, message} from 'antd';
import React, { useEffect, useState } from 'react';
import TextArea from "antd/es/input/TextArea";
import {addInterfaceInfoUsingPOST1} from "@/services/zyapi-backend/userInterfaceInfoController";

const InterfaceInfo: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [Buttonloading, setButtonloading] = useState(false);
  const [invokeloading, setinvokeLoading] = useState(false);
  const [data, setData] = useState<API.InterfaceInfo>();
  const [invokeRes, setinvokeRes] = useState<API.InterfaceInfo>();

  const params = useParams();

  const loadData = async () => {
    if (!params.id) {
      message.error('参数错误！');
    }
    setLoading(true);
    try {
      const res = await getByIdUsingGET({
        id: Number(params.id),
      });
      setData(res.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      message.error('请求失败!');
    }
  };

  const onFinish = async (values: any) => {
    if (!values||!params.id) {
      message.error('参数错误！');
    }
    setinvokeLoading(true);
    try {
      const res = await invokeInterfaceUsingPOST({
        id: Number(params.id),
        ...values
      });
      setinvokeRes(res.data);
      message.success("调用成功")
      setinvokeLoading(false);
    } catch (e:any) {
      setinvokeLoading(false);
      message.error('请求失败!'+e.message);
    }
  };

  const getLeftNum = async (values:any)=>{
    if (!values||!params.id) {
      message.error('参数错误！');
    }
    setButtonloading(true);
    try {
      const res = await addInterfaceInfoUsingPOST1({
        id: Number(params.id),
      });
      if(res.message==="ok"){
        message.success("申请成功!")
      }
      setButtonloading(false);
    } catch (e:any) {
      message.error('申请失败!'+e.message);
      setButtonloading(false);
    }
  }


  useEffect(() => {
    loadData();
  }, []);

  return (
    <PageContainer title={'查看接口'} loading={loading}>
      {data ? (
        <Card>
          <Descriptions title={data.name} column={1} extra={<Button loading={Buttonloading} onClick={()=>{getLeftNum(data?.id)}}>申请调用</Button>}>
            <Descriptions.Item label="描述">{data.description}</Descriptions.Item>
            <Descriptions.Item label="请求地址">{data.url}</Descriptions.Item>
            <Descriptions.Item label="请求方法">{data.method}</Descriptions.Item>
            <Descriptions.Item label="请求头">{data.requestHeader}</Descriptions.Item>
            <Descriptions.Item label="相应头">{data.responseHeader}</Descriptions.Item>
            <Descriptions.Item label="请求参数">{data.requestBody}</Descriptions.Item>
            <Descriptions.Item label="返回响应">{data.responseBody}</Descriptions.Item>
            <Descriptions.Item label="接口状态">{data.status ?'开启':'关闭'}</Descriptions.Item>
            <Descriptions.Item label="创建时间">
              {data.description}
            </Descriptions.Item>
            <Descriptions.Item label="更新时间">
              {data.updateTime}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      ) : (
        <>接口不存在</>
      )}
    <Card title={"在线测试"}>
      <Form
        name="basic"
        layout={"vertical"}
        onFinish={onFinish}
      >
        <Form.Item
          label="请求参数"
          name="requestBody"
          rules={[{  message: '请输入请求体' }]}
        >
          <TextArea/>
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
      <Card title={"返回结果"} loading={invokeloading}>
        {invokeRes}
      </Card>
    </PageContainer>
  );
};

export default InterfaceInfo;
