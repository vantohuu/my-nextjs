import "antd/dist/antd.css";
import { Table, Tag, Space, Modal, Input } from 'antd';
import { useState, useEffect } from "react";


export default function Data() {

  let mdata = [];
  const [n, setn] = useState(parseInt(Math.random() * 100000));
  const [stateEdit, setStateEdit] = useState(false);


  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [face, setFace] = useState('');
  const [_id, set_Id] = useState('');
  const [key, setKey] = useState('');
  let contact =
  {
    _id,
    key,
    email,
    phone,
    face,
  }
  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Facebook',
      dataIndex: 'face',
      key: 'face',
    },

    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        return (
          <Space size="middle">
            <a onClick={() => { onUpdateContact(record)}}>Update </a>
            <a onClick={() => { onDeleteContact(record) }} > Delete </a>
          </Space>
        )
      },
    },
  ];


  const [data, setdata] = useState([]);
  const getData = async () => {
    let response = await fetch('/api/contact',
      {
        method: 'GET',
      });
    mdata = await response.json();
    setdata(mdata);
    //console.log(mdata);
  }
  useEffect(() => { getData() }, [n]);

  
  const onUpdateContact = (record) => {
    
    set_Id(record._id);
    setKey(record.key);
    setStateEdit(true);
  }

  const onUpdateContactOK = async () => {
    await fetch('/api/contact', {
      method: 'PUT',
      body: JSON.stringify(contact),
    });
    
    setStateEdit(false);
  }

  const onDeleteContact = (record) => {
    Modal.confirm({
      title: "Bạn có muốn xóa nó không?",
      onOk: async () => {
        await fetch('/api/contact', {
          method: 'DELETE',
          body: record._id,
        });
        setn(parseInt(Math.random() * 100000));
      }
    })
  }

  

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <Modal title='Update contact'
        okText='Save'
        cancelText='Cancel'
        onOk={() => {onUpdateContactOK(), console.log('OK success'), setn(parseInt(Math.random() * 100000));}}
        onCancel={() => { setStateEdit(false) , console.log(contact); }}
        visible={stateEdit}>
        <div>
          <p> Email</p>
          <Input onChange={(e) => { setEmail(e.target.value) }} value={email} required />
        </div>

        <div>
          <p> Phone Number</p>
          <Input onChange={(e) => { setPhone(e.target.value) }} value={phone} type = 'number' required />
        </div>
        <div>
          <p> Facebook</p>
          <Input onChange={(e) => { setFace(e.target.value) }} value={face} required/>
        </div>
      </Modal>
    </div>
  );
}



