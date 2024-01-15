'use client';
import React, { useState } from 'react';
import { Table, Form, Input, InputNumber, Popconfirm, Typography } from 'antd';
import ButtonComponent from '@/components/buttons/Button';
import { BiPlus } from 'react-icons/bi';
import ModalComponent from '@/components/modal/Modal';
import AddProduct from './AddProductModal';

interface Item {
 key: string;
 product_name: string;
 product_category: number;
 product_amount: string;
 company: string;
}

const originData: Item[] = [
 {
  key: '1',
  product_name: 'John Brown',
  product_category: 32,
  product_amount: 'New York No. 1 Lake Park',
  company: 'www.google.com',
 },
 {
  key: '2',
  product_name: 'Jim Green',
  product_category: 42,
  product_amount: 'London No. 1 Lake Park',
  company: 'www.google.com',
 },
 {
  key: '3',
  product_name: 'Joe Black',
  product_category: 32,
  product_amount: 'Sidney No. 1 Lake Park',
  company: 'www.google.com',
 },
 {
  key: '4',
  product_name: 'Jim Red',
  product_category: 32,
  product_amount: 'London No. 2 Lake Park',
  company: 'www.google.com',
 },
];

const Product: React.FC = () => {
 const [form] = Form.useForm();
 const [data, setData] = useState(originData);
 const [editingKey, setEditingKey] = useState('');
 const [flag, setFlag] = useState(false);

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
    setFlag(true);
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
   title: 'Product Name',
   dataIndex: 'product_name',
   key: 'product_name',
   editable: true,
  },
  {
   title: 'Product Category',
   dataIndex: 'product_category',
   key: 'product_category',
   editable: true,
  },
  {
   title: 'Product Amount',
   dataIndex: 'product_amount',
   key: 'product_amount',
   editable: true,
  },
  {
   title: 'Amount Unit',
   dataIndex: 'amount_unit',
   key: 'amount_unit',
   editable: true,
  },
  {
   title: 'Company',
   dataIndex: 'company',
   key: 'company',
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
    inputType: col.dataIndex === 'product_category' ? 'number' : 'text',
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
     Products
    </h1>
    <div className="flex justify-end items-center ">
     <ModalComponent
      open={open}
      setOpen={setOpen}
      content={
       <AddProduct
        handleClose={handleClose}
        setFlag={setFlag}
        data={data}
        setData={setData}
       />
      }>
      <ButtonComponent className="mb-4  flex bg-gradient rounded-full py-2 px-4">
       <BiPlus className="mr-2 text-2xl text-white " />
       Add Product
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

export default Product;
