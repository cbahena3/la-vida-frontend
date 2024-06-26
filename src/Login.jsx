import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

const jwt = localStorage.getItem("jwt");
if(jwt){
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login(){
  const [errors, setErrors] = useState([]);

  const handleSubmit = (values) => {
    setErrors([]);
    axios.post("http://localhost:3000/sessions.json", values)
      .then((response) => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        window.location.href = "/";
      })
      .catch((error) => {
        setErrors(["Invalid email or password"]);
      });
  }
  return(
    <div>
      <h1>Login</h1>
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
        onFinish={handleSubmit}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        
      >
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
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
          hasFeedback
        >
          <Input.Password placeholder="Password"/>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
          {/* <p>No Account? <Link to = "/signup" className="">Sign Up</Link> Now!</p>  */}
        </Form.Item>

        <Form.Item
          name="signup"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <p>No Account? <Link to = "/signup" className="">Sign Up</Link> Now!</p> 
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}