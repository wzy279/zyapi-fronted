import CreateForm from '@/pages/Admin/TableList/components/CreateForm';
import {
  addInterfaceInfoUsingPOST,
  deleteInterfaceUsingPOST,
  getInterfacelistUsingPOST,
  offlineInterfaceUsingPOST,
  onlineInterfaceUsingPOST,
  updateInterfaceUsingPOST,
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
   * @en-US Add node
   * @zh-CN 添加节点
   * @param fields
   */
  const handleAdd = async (fields: API.InterfaceInfo) => {
    const hide = message.loading('正在添加');
    try {
      await addInterfaceInfoUsingPOST({
        ...fields,
      });
      hide();
      message.success('创建成功');
      handleModalOpen(false);
      return true;
    } catch (error) {
      hide();
      message.error('添加失败');
      return false;
    }
  };

  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param selectedRows
   */
  const handleRemove = async (record: API.InterfaceInfo) => {
    const hide = message.loading('正在删除');
    if (!record) return true;
    try {
      await deleteInterfaceUsingPOST({
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
   * @zh-CN 上线接口
   *
   * @param selectedRows
   */
  const onlineInterface = async (record: API.IdRequest) => {
    const hide = message.loading('上线检查中...');
    if (!record) return true;
    try {
      await onlineInterfaceUsingPOST({
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
  const offlineInterface = async (record: API.IdRequest) => {
    const hide = message.loading('接口下线中...');
    if (!record) return true;
    console.log(record);
    try {
      await offlineInterfaceUsingPOST({
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
  const handleUpdate = async (fields: API.InterfaceInfo) => {
    const hide = message.loading('修改中');
    try {
      await updateInterfaceUsingPOST({
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
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */

  const columns: ProColumns<API.InterfaceInfo>[] = [
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
          dataIndex: 'name',
          valueType: 'text',
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
          title: '描述',
          dataIndex: 'description',
          valueType: 'textarea',
      },
      {
          title: 'URL地址',
          dataIndex: 'url',
          valueType: 'textarea',
          hideInTable:true,
      },
      {
          title: '请求头',
          dataIndex: 'requestHeader',
          valueType: 'textarea',
          hideInTable:true,
      },
      {
          title: '响应头',
          dataIndex: 'responseHeader',
          valueType: 'textarea',
          hideInTable:true,
      },
      {
          title: '请求参数',
          dataIndex: 'requestBody',
          valueType: 'textarea',
          hideInTable:true,
      },
      {
          title: '响应参数',
          dataIndex: 'responseBody',
          valueType: 'textarea',
          hideInTable:true,
      },
      {
          title: '接口请求状态',
          dataIndex: 'status',
          hideInForm: true,
          valueEnum: {
              0: {
                  text: '关闭',
                  status: 'Default',
              },
              1: {
                  text: '运行中',
                  status: 'Processing',
              },
              2: {
                  text: '已上线',
                  status: 'Success',
              },
              3: {
                  text: '异常',
                  status: 'Error',
              },
          },
      },
      {
          title: '请求类型',
          dataIndex: 'method',
          valueType: 'radio',
          valueEnum:{
              'GET':{
                  text:'GET'
              },
              'POST':{
                  text:'POST'
              }
          },
      },
      {
          title: '创建人',
          dataIndex: 'createBy',
          valueType: 'textarea',
          hideInForm: true,
      },
      {
          title: '创建时间',
          dataIndex: 'createTime',
          valueType: 'date',
          hideInForm: true,
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
                  编辑
              </a>,
              record.status === 1 ? (
                  <a
                      key="config"
                      onClick={() => {
                          offlineInterface(record);
                      }}
                  >
                      下线
                  </a>
              ) : (
                  <a
                      key="config"
                      onClick={() => {
                          onlineInterface(record);
                      }}
                  >
                      上线
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
      <ProTable<API.BaseResponsePageInterfaceInfo_>
        headerTitle={'接口列表'}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={async (values: API.InterfaceInfo) => {
          console.log(values);
          const res = await getInterfacelistUsingPOST({
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
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项 &nbsp;&nbsp;
              <span>
                服务调用次数总计 {selectedRowsState.reduce((pre, item) => pre + item.id!, 0)} 万
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )}

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
          handleAdd(values);
        }}
        visable={createModalOpen}
      />
    </PageContainer>
  );
};
export default TableList;
