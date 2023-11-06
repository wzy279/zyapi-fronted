import { getInterfacelistUsingPOST } from "@/services/zyapi-backend/interfaceInfoController";
import { PageContainer } from '@ant-design/pro-components';
import { List,message } from "antd";
import React,{ useEffect,useState } from 'react';



const Welcome: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<API.InterfaceInfo[]>([]);
  const [total,setTotal]=useState<number>(0);

const loadData= async (current:number, pageSize: number)=>{
  setLoading(true);
  try {
    const res = await getInterfacelistUsingPOST({current,pageSize});
    setList(res?.data?.records ?? []);
    setTotal(res?.data?.total ?? 0);
    setLoading(false);
  } catch (e) {
    setLoading(false);
    message.error('请求失败!');
  }
  }


  useEffect(() => {
    loadData(1,10);
  }, []);

  return (
      <PageContainer title={"在线接口开放平台"}>
        <List
          className="my-list"
          loading={loading}
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item) => {
              const apiLink = `/InterfaceInfo/${item.id}`;
              return(
                  <List.Item
                      actions={[<a key={item.id} href={apiLink}>查看</a>]}
                  >
                      <List.Item.Meta
                          title={<a href={apiLink}>{item.name}</a>}
                          description={item.description}
                      />
                      <div>content</div>
                  </List.Item>
              )
          }}
          pagination={
          {
            pageSize:10,
            total,
            onChange(page:number,pageSize:number){
              loadData(page,pageSize);
          }
          }
        }
        />
      </PageContainer>
  );
};

export default Welcome;
