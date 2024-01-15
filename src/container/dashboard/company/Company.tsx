'use client';
import React, { useState } from 'react';
import { Table, Form, Input, InputNumber, Popconfirm, Typography } from 'antd';
import ButtonComponent from '@/components/buttons/Button';
import { BiPlus } from 'react-icons/bi';
import ModalComponent from '@/components/modal/Modal';
import AddCompany from './AddCompanyModal';

interface Item {
 key: string;
 company_name: string;
 incorporation_country: number;
 company_legal_number: string;
 company_website: string;
}

const originData: Item[] = [
 {
  key: '1',
  company_name: 'John Brown',
  incorporation_country: 32,
  company_legal_number: 'New York No. 1 Lake Park',
  company_website: 'www.google.com',
 },
 {
  key: '2',
  company_name: 'Jim Green',
  incorporation_country: 42,
  company_legal_number: 'London No. 1 Lake Park',
  company_website: 'www.google.com',
 },
 {
  key: '3',
  company_name: 'Joe Black',
  incorporation_country: 32,
  company_legal_number: 'Sidney No. 1 Lake Park',
  company_website: 'www.google.com',
 },
 {
  key: '4',
  company_name: 'Jim Red',
  incorporation_country: 32,
  company_legal_number: 'London No. 2 Lake Park',
  company_website: 'www.google.com',
 },
];

const Company: React.FC = () => {
 const [form] = Form.useForm();
 const [data, setData] = useState(originData);
 const [editingKey, setEditingKey] = useState('');

 const isEditing = (record: Item) => record.key === editingKey;

 const edit = (record: Item) => {
  form.setFieldsValue({ ...record });
  setEditingKey(record.key);
 };

 const cancel = () => {
  setEditingKey('');
 };

 const save = async (key: React.Key) => {
  try {
   const row = (await form.validateFields()) as Item;

   const newData = [...data];
   const index = newData.findIndex((item) => key === item.key);

   if (index > -1) {
    newData[index] = { ...newData[index], ...row };
    setData(newData);
    setEditingKey('');
   } else {
    newData.push(row);
    setData(newData);
    setEditingKey('');
   }
  } catch (errInfo) {
   console.error('Validate Failed:', errInfo);
  }
 };

 const handleDelete = (key: React.Key) => {
  const newData = [...data];
  const index = newData.findIndex((item) => key === item.key);
  newData.splice(index, 1);
  setData(newData);
  setEditingKey('');
 };

 const columns = [
  {
   title: 'Company Name',
   dataIndex: 'company_name',
   key: 'company_name',
   editable: true,
  },
  {
   title: 'Incorporation Country',
   dataIndex: 'incorporation_country',
   key: 'incorporation_country',
   editable: true,
  },
  {
   title: 'Company Legal Number',
   dataIndex: 'company_legal_number',
   key: 'company_legal_number',
   editable: true,
  },
  {
   title: 'Company Website',
   dataIndex: 'company_website',
   key: 'company_website',
   editable: true,
  },
  {
   title: 'Action',
   key: 'operation',
   fixed: 'right' as const,
   width: 150,
   render: (_: any, record: any) => {
    const editable = isEditing(record);
    return editable ? (
     <span>
      <Typography.Link
       onClick={() => save(record.key)}
       style={{ marginRight: 8 }}>
       Save
      </Typography.Link>
      <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
       <a>Cancel</a>
      </Popconfirm>
      <Popconfirm
       title="Sure to delete?"
       onConfirm={() => handleDelete(record.key)}>
       <a style={{ marginLeft: 8, color: 'red' }}>Delete</a>
      </Popconfirm>
     </span>
    ) : (
     <span>
      <Typography.Link
       disabled={editingKey !== ''}
       onClick={() => edit(record)}>
       Edit
      </Typography.Link>
      <Popconfirm
       title="Sure to delete?"
       onConfirm={() => handleDelete(record.key)}>
       <a style={{ marginLeft: 8, color: 'red' }}>Delete</a>
      </Popconfirm>
     </span>
    );
   },
  },
 ];

 const mergedColumns = columns.map((col) => {
  if (!col.editable) {
   return col;
  }

  return {
   ...col,
   onCell: (record: Item) => ({
    record,
    inputType: col.dataIndex === 'incorporation_country' ? 'number' : 'text',
    dataIndex: col.dataIndex,
    title: col.title,
    editing: isEditing(record),
   }),
  };
 });

 const [open, setOpen] = useState(false);

 const handleClose = () => {
  setOpen(false);
 };

 return (
  <div className="m-52">
   <div className=" bg-white  rounded-md shadow-lg p-16 ">
    <h1 className="text-xl text-black text-center font-semibold mb-4">
     Companies
    </h1>
    <div className="flex justify-end items-center ">
     <ModalComponent
      open={open}
      setOpen={setOpen}
      content={<AddCompany handleClose={handleClose} />}>
      <ButtonComponent className="mb-4  flex bg-gradient rounded-full py-2 px-4">
       <BiPlus className="mr-2 text-2xl text-white " />
       Add Company
      </ButtonComponent>
     </ModalComponent>
    </div>
    <Form form={form} component={false}>
     <Table
      components={{
       body: {
        cell: EditableCell,
       },
      }}
      bordered
      dataSource={data}
      columns={mergedColumns}
      rowClassName="editable-row"
     />
    </Form>
   </div>
  </div>
 );
};

const EditableCell: React.FC<EditableCellProps> = ({
 editing,
 dataIndex,
 title,
 inputType,
 record,
 index,
 children,
 ...restProps
}) => {
 const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

 return (
  <td {...restProps}>
   {editing ? (
    <Form.Item
     name={dataIndex}
     style={{ margin: 0 }}
     rules={[
      {
       required: true,
       message: `Please Input ${title}!`,
      },
     ]}>
     {inputNode}
    </Form.Item>
   ) : (
    children
   )}
  </td>
 );
};

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
 editing: boolean;
 dataIndex: string;
 title: any;
 inputType: 'number' | 'text';
 record: Item;
 index: number;
 children: React.ReactNode;
}

export default Company;
