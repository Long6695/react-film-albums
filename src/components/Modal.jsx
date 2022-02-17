import React, {useState} from 'react'
import { Modal } from 'antd'
import { useNavigate } from 'react-router-dom';

const CustomModal = ({link, children}) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const navigate = useNavigate()

  const handleOk = () => {
    setIsModalVisible(false);
    navigate(link, {replace: true})
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal title="Notice" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p style={{fontSize: "20px"}}>{children}</p>
    </Modal>
  )
}

export default CustomModal