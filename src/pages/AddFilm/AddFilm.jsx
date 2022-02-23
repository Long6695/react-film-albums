import React, { useEffect } from 'react';
import { Form, Input, Button, Typography } from 'antd';

import CustomModal from '../../components/Modal';

import { useFilmsContext } from '../../context/FilmContext';

const AddFilm = () => {
  const { addFilm, isAddFilmSuccess, setIsAddFilmSuccess } = useFilmsContext();
  const token = localStorage.getItem('token');

  const onFinish = (values) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    addFilm(values, token);
  };

  useEffect(() => {
    setIsAddFilmSuccess(false);
    // eslint-disable-next-line
  }, []);

  if (!token) {
    return (
      <CustomModal link={'/login'}> Please login to add film. </CustomModal>
    );
  }

  if (isAddFilmSuccess) {
    return <CustomModal link={'/'}> Add Film Successfully! </CustomModal>;
  }

  return (
    <div style={{ padding: '10px', overflow: 'hidden' }}>
      <Typography.Title
        level={2}
        style={{ textAlign: 'center', color: '#fff', marginTop: '50px' }}
      >
        Add Film
      </Typography.Title>

      <Form
        style={{ margin: '0 auto', maxWidth: '900px', width: '100%' }}
        name="basic"
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="title"
          rules={[{ required: true, message: 'Please input film title' }]}
        >
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item
          name="quote"
          rules={[{ required: true, message: 'Please input film quote' }]}
        >
          <Input placeholder="Quote" />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[{ required: true, message: 'Please input film description' }]}
        >
          <Input placeholder="Description" />
        </Form.Item>

        <Form.Item
          name="banner"
          rules={[{ required: true, message: 'Please input film banner' }]}
        >
          <Input placeholder="Banner" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddFilm;
