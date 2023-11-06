import {
    ProColumns, ProTable,
} from '@ant-design/pro-components';
import '@umijs/max';
import {Modal} from 'antd';
import React from 'react';


export type Props = {
    colums: ProColumns<API.InterfaceInfo>[];
    onCancel: () => void;
    onSubmit: (values: API.InterfaceInfo) => Promise<void>;
    visable: boolean;
};
const CreateForm: React.FC<Props> = (props) => {
    const {colums, visable, onCancel, onSubmit} = props;
    return <Modal visible={visable} footer={null} onCancel={() => onCancel?.()}>
        <ProTable
            type="form"
            columns={colums}
            onSubmit={async (value)=>{
              onSubmit?.(value);
            }}
        />
    </Modal>;
};
export default CreateForm;
