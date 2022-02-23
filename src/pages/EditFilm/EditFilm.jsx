import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useFilmsContext } from '../../context/FilmContext';
import CustomModal from '../../components/Modal';
const token = localStorage.getItem('token');
const EditFilm = () => {
  const [editFilm, setEditFilm] = useState({});
  const { film, getDetailFilmById, handleEditFilmById, isEditFilmSuccess } =
    useFilmsContext();
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;

    const fetchFilm = async () => {
      await getDetailFilmById(id);
    };
    if (mounted) {
      fetchFilm();
    }

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    setEditFilm(film);
  }, [film]);

  const onFinish = (value) => {
    handleEditFilmById(id, token, value);
  };

  if (isEditFilmSuccess) {
    return <CustomModal link="/">Edit Film Successfully!</CustomModal>;
  }

  return (
    <Form
      style={{ overflow: 'hidden', margin: '20px' }}
      wrapperCol={{ span: 24 }}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      fields={[
        {
          name: ['title'],
          value: editFilm.title,
        },
        {
          name: ['quote'],
          value: editFilm.quote,
        },
        {
          name: ['description'],
          value: editFilm.description,
        },
        {
          name: ['banner'],
          value: editFilm.banner,
        },
      ]}
    >
      <Form.Item
        style={{ display: 'flex', flexDirection: 'column' }}
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input film title' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        style={{ display: 'flex', flexDirection: 'column' }}
        label="Quote"
        name="quote"
        rules={[{ required: true, message: 'Please input film quote' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        style={{ display: 'flex', flexDirection: 'column' }}
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input film description' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        style={{ display: 'flex', flexDirection: 'column' }}
        label="Banner"
        name="banner"
        rules={[{ required: true, message: 'Please input film banner' }]}
      >
        <Input />
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
  );
};

export default EditFilm;
