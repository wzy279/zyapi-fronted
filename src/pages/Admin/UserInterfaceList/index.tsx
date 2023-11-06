import CreateForm from '@/pages/Admin/TableList/components/CreateForm';
import {
  getInterfacelistUsingPOST, offlineInterfaceUsingPOST, onlineInterfaceUsingPOST,
} from '@/services/zyapi-backend/interfaceInfoController';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {
  FooterToolbar,
  PageContainer,
  ProDescriptions,
  ProTable,
} from '@ant-design/pro-components';
import '@umijs/max';
import { Button, Drawer, message } from 'antd';
import React, { useRef, useState } from 'react';
import UpdateForm from './components/UpdateForm';
import {
    allowCallUsingGET,
    banCallUsingGET,
    deleteInterfaceUsingPOST1,
    getInterfacelistUsingPOST1, updateInterfaceUsingPOST1
} from "@/services/zyapi-backend/userInterfaceInfoController";

const TableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.InterfaceInfo>();
  const [selectedRowsState, setSelectedRows] = useState<API.InterfaceInfo[]>([]);




  /**
   * @zh-CN 上线接口
   *
   * @param selectedRows
   */
  const allowInterface = async (record: API.IdRequest) => {
    const hide = message.loading('上线检查中...');
    if (!record) return true;
    try {
      await allowCallUsingGET({
        id: record.id,
      });
      hide();
      message.success('上线成功');
      actionRef.current?.reload();
      return true;
    } catch (error) {
      hide();
      message.error('失败！请检查接口是否正确');
      return false;
    }
  };
  /**
   * @zh-CN 下线接口
   *
   * @param selectedRows
   */
  const banInterface = async (record: API.IdRequest) => {
    const hide = message.loading('接口下线中...');
    if (!record) return true;
    console.log(record);
    try {
      await banCallUsingGET({
        id: record.id,
      });
      hide();
      message.success('上线成功');
      actionRef.current?.reload();
      return true;
    } catch (error) {
      hide();
      message.error('失败！请检查接口是否正确');
      return false;
    }
  };

  /**
   * @en-US Update node
   * @zh-CN 更新节点
   *
   * @param fields
   */
  const handleUpdate = async (fields: API.UserInterfaceInfo) => {
    const hide = message.loading('修改中');
    try {
      //TODO
      await updateInterfaceUsingPOST1({
        ...fields,
      });
      hide();
      message.success('修改成功');
      return true;
    } catch (error) {
      hide();
      message.error('操作失败');
      return false;
    }
  };


  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param selectedRows
   */
  const handleRemove = async (record: API.UserInterfaceInfoVo) => {
    const hide = message.loading('正在删除');
    if (!record) return true;
    try {
      await deleteInterfaceUsingPOST1({
        id: record.id,
      });
      hide();
      message.success('删除成功');
      actionRef.current?.reload();
      return true;
    } catch (error) {
      hide();
      message.error('删除失败');
      return false;
    }
  };


  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */


  const columns: ProColumns<API.UserInterfaceInfoVo>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'textarea',
      hideInTable: true,
      readonly: true,
      hideInSearch:true
    },
    {
      title: '接口名称',
      dataIndex: 'interfaceName',
      valueType: 'text',
      hideInForm:true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请填写接口名称!',
          },
        ],
      },
    },
    {
      title: 'URL地址',
      dataIndex: 'url',
      valueType: 'textarea',
      hideInTable:true,
      hideInForm:true,
    },
    {
      title: '接口id',
      dataIndex: 'interfaceinfoId',
      valueType: 'textarea',
      hideInTable:true,
      hideInForm:true,
    },
    {
      title: '用户昵称',
      dataIndex: 'userName',
      valueType: 'textarea',
      hideInForm:true,
    },
    {
      title: '用户id',
      dataIndex: 'userId',
      valueType: 'textarea',
      hideInTable:true,
      hideInForm:true,
    },
    {
      title: '总调用次数',
      dataIndex: 'totalNum',
      valueType: 'textarea',
      hideInForm:true,
    },
    {
      title: '剩余调用次数',
      dataIndex: 'leftNum',
      valueType: 'text',
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType:'radio',
      valueEnum: {
        0: {
          text: '正常',
          status: 'Processing',
        },
        1: {
          text: '禁用',
          status: 'Default',
        },
      },
        hideInForm:true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
            key="config"
            onClick={() => {
              handleUpdateModalOpen(true);
              setCurrentRow(record);
            }}
        >
          调整次数
        </a>,
        record.status === 1 ? (
            <a
                key="config"
                onClick={() => {
                  allowInterface({
                    id:record.interfaceinfoId
                  })
                }}
            >
              启用
            </a>
        ) : (
            <a
                key="config"
                onClick={() => {
                  banInterface({
                    id:record.interfaceinfoId
                  })
                }}
            >
              禁用
            </a>
        ),
        <a
            key="config"
            onClick={() => {
              handleRemove(record);
            }}
        >
          删除
        </a>,
      ],
    },
  ];
  // @ts-ignore
  return (
    <PageContainer>
      <ProTable<API.UserInterfaceInfoVo>
        headerTitle={'接口列表'}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
        ]}
        request={async (values: API.UserInterfaceInfoVo) => {
          console.log(values);
          const res = await getInterfacelistUsingPOST1({
            ...values,
          });
          // alert(res);
          if (res?.data) {
            return {
              data: res.data.records || [],
              success: true,
              total: res.data.total || 0,
            };
          } else {
            return {
              data: [],
              success: false,
              total: 0,
            };
          }
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            getInterfacelistUsingPOST(selectedRows);
          },
        }}
      />

      <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        visable={updateModalOpen}
        values={currentRow || {}}
        colums={columns}
      />

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.InterfaceInfo>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProColumns<API.InterfaceInfo>[]}
          />
        )}
      </Drawer>
      <CreateForm
        colums={columns}
        onCancel={() => {
          handleModalOpen(false);
        }}
        onSubmit={(values) => {
          // handleAdd(values);
        }}
        visable={createModalOpen}
      />
    </PageContainer>
  );
};
export default TableList;
