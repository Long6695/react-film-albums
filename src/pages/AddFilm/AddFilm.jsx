import React from 'react'
import { Form, Input, Button } from 'antd'

import CustomModal from '../../components/Modal';

import {useFilmsContext} from '../../context/FilmContext'

const AddFilm = () => {
  const { addFilm, isAddFilmSuccess } = useFilmsContext()
  const token = localStorage.getItem('token')

  
  const onFinish = (values) => {
    const token = localStorage.getItem('token')
    if(!token) return

    addFilm(values, token)
  }
  
  if(!token) {
    return <CustomModal link={'/login'}> Please login to add film. </CustomModal>
  }

  if(isAddFilmSuccess) {
    return <CustomModal link={'/'}> Add Film Successfully! </CustomModal>
  }

  return (
    <Form
      style={{margin: '20px'}}
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >

      <Form.Item
      label="Title"
      name="title"
      rules={[{required: true, message: 'Please input film title'}]}
      >
        <Input />
      </Form.Item>

      <Form.Item
      label="Quote"
      name="quote"
      rules={[{required: true, message: 'Please input film quote'}]}
      >
        <Input />
      </Form.Item>

      <Form.Item
      label="Description"
      name="description"
      rules={[{required: true, message: 'Please input film description'}]}
      >
        <Input />
      </Form.Item>

      <Form.Item
      label="Banner"
      name="banner"
      rules={[{required: true, message: 'Please input film banner'}]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 20,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

    </Form>
  )
}

export default AddFilm