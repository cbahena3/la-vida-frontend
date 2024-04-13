import { useEffect, useState } from "react";
import axios from "axios"
import { Login } from "./Login";
import ImgCrop from 'antd-img-crop';
import { Button, Checkbox, Form, Input, InputNumber, Upload} from 'antd';


/* eslint-disable react/prop-types */
export function RecipesNew(props){
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
    
    axios.post("http://localhost:3000/recipes.json", params)
      .then((response) => {
        window.location.href = "/recipes";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  const [jwt, setJwt] = useState(localStorage.getItem("jwt") !== null ? true : false);
  useEffect(() => {
    localStorage.getItem("jwt") !== null ? setJwt(true) : setJwt(false);
  }, []);

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
      {jwt === true ? (
        <div>
          <h1> Create Recipe </h1>
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
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input recipe name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: 'Please input your recipe description!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Ingredients"
              name="ingredients"
              rules={[
                {
                  required: true,
                  message: 'Please input your recipe ingredients!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Instructions"
              name="instructions"
              rules={[
                {
                  required: true,
                  message: 'Please input your recipe instructions!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Time"
              name="time"
              rules={[
                {
                  required: true,
                  message: 'Please input your recipe time!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Servings"
              name="servings"
              rules={[
                {
                  required: true,
                  message: 'Please input your recipe servings!',
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="User ID"
              name="user_id"
              rules={[
                {
                  required: true,
                  message: 'Please input User ID!',
                },
              ]}
            >
              <InputNumber />
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
                Create Recipe
              </Button>
            </Form.Item>
          </Form>
          

        </div>
      ) : (
        <div>
          <h1>Must Be Logged In To Create A Recipe</h1>
          <Login/>
        </div>
      )}
    </div>
  )
}
