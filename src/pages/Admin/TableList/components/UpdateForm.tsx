import {
  ProColumns, ProTable,
} from '@ant-design/pro-components';
import '@umijs/max';
import {Modal} from 'antd';
import React, {useEffect, useRef} from 'react';
import {ProFormInstance} from "@ant-design/pro-form/lib";


export type Props = {
  values:API.InterfaceInfo;
  colums: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  visable: boolean;
};
const UpdateForm: React.FC<Props> = (props) => {
  const {values,colums, visable, onCancel, onSubmit} = props;


  const formRef = useRef<ProFormInstance>();


  useEffect(()=>{
    if(formRef){
      formRef.current?.setFieldsValue(values);
    }
  },[values])


  return <Modal visible={visable} footer={null} onCancel={() => onCancel?.()}>
    <ProTable
      type="form"
      columns={colums}
      formRef={formRef}
      onSubmit={async (value)=>{
        onSubmit?.(value);
      }}
    />
  </Modal>;
};
export default UpdateForm;
