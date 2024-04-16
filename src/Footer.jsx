import {
  LinkedinOutlined,
  InstagramOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';


export function Footer(){
  return(
    <div>
      <h4>
        <Space>
          Copyright 2024
          <a href="https://www.linkedin.com/in/cristianbahena/">
            <LinkedinOutlined/>
          </a>
          <a href="https://www.instagram.com/cristianbahen/?hl=en">
            <InstagramOutlined />
          </a>
          <a href="mailto:cris.bahena77@gmail.com">
            <MailOutlined />
          </a>
        </Space>
      </h4>
    </div>
  )
}