import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
// import { IoMail} from "react-icons/io";

import { useSignInWithEmailPassword } from "../../react-query";

import styles from './login.module.css';


const LoginCard = ({ redirect }) => {

   const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword();
   const [isRemember, setIsRemember] = useState(false);
   const [form] = Form.useForm();
   const navigate = useNavigate();

   const onFinish = (values) => {
      console.log("Received values of form: ", values);
      mutate(values);
   };

   useEffect(() => {
      if (isSuccess) {
         navigate(redirect);
      }
   }, [isSuccess, redirect]);

   return (
      <Form
         name="normal_login"
         className={styles.loginForm}
         form={form}
         size="large"
         initialValues={{
            isRemember: true,
         }}
         onFinish={onFinish}
      // onFihishFailed={onFinishFailed}
      >
         <Form.Item
            name="email"
            rules={[
               {
                  type: "email",
                  message: "E-Mail格式錯誤",
               },
               {
                  required: true,
                  message: "請輸入E-Mail",
               },
            ]}
            hasFeedback
         >
            <Input
               prefix={<MailOutlined />}
               placeholder="E-Mail"
            />
         </Form.Item>
         <Form.Item
            name="password"
            rules={[
               {
                  required: true,
                  message: "請輸入密碼",
               },
            ]}
            hasFeedback
         >
            <Input.Password
               prefix={<LockOutlined />}
               type="password"
               placeholder="Password"
            />
         </Form.Item>
         <Form.Item>
            <Link className={styles.loginForm__forgot} to={"/"}>
               Forgot password
            </Link>
            <Form.Item name="remember" valuePropName="checked" noStyle>
               <Checkbox onChange={() => setIsRemember(!isRemember)} checked={isRemember}>
                  Remember me
               </Checkbox>
            </Form.Item>
         </Form.Item>

         <Form.Item>
            {isLoading ? (
               <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.loginForm__button}
                  loading
               >
                  Log in
               </Button>
            ) : (
               <Button
                  type="link"
                  size="large"
                  htmlType="submit"
                  className={styles.loginForm__button}
               >
                  登入
               </Button>
            )}
            Or <Link to={`/auth/register?redirect=${redirect}`}>register now!</Link>
            {!isError ? (
               <div></div>
            ) : (
               <div className={styles.loginForm__errorWrap}>
                  <h3 className={styles.loginForm__errorTitle}>
                     <WarningOutlined />
                     {"  "}There was a problem
                  </h3>
                  <p className={styles.loginForm__errorMessage}>{error.message}</p>
               </div>
            )}
         </Form.Item>
      </Form>
   );
};

export default LoginCard;
