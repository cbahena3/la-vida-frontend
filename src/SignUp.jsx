import axios from "axios"
import { useState } from "react"
import ImgCrop from 'antd-img-crop';
import { Button, Checkbox, Form, Input, Upload} from 'antd';



export function SignUp(){
  const [errors, setErrors] = useState([]);

  const handleFormSubmit = (formData) => {
    const event = { preventDefault: () => {} }; 
    handleSubmit(event, formData);
  };
  const handleSubmit = (event, formData) => {
    event.preventDefault();
    setErrors([]);
    
    const params = new FormData(); 
   
    for (const key in formData) {
      params.append(key, formData[key]);
    }
    
    axios.post("http://localhost:3000/users.json", params)
      .then((response) => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };
  

  const [fileList, setFileList] = useState([
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return(
    <div>
      <h1>Sign Up</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleFormSubmit}
        autoComplete="off"
        
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Password Confirmation"
          name="password_confirmation"
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Profile Photo"
          name="image"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <ImgCrop rotationSlider>
            <Upload
              action="http://localhost:3000/users.json"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length === 0 && '+ Upload'}
            </Upload>
          </ImgCrop>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" >
            Sign Up
          </Button>
        </Form.Item>
      </Form>

    </div>
  )
}