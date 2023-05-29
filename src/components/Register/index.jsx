import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { BsFillPersonFill } from "react-icons/bs";

import { useRegisterWithEmailPassword } from "../../react-query";
import styles from "./register.module.css"

const RegisterCard = ({ redirect }) => {

  const { mutate, error, isLoading, isError, isSuccess, data } = useRegisterWithEmailPassword();

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
      form={form}
      size="large"
      name="register"
      onFinish={onFinish}
      className={styles.registerForm}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="姓名"
        tooltip="提供您的真實姓名以方便取貨"
        rules={[
          {
            required: true,
            message: "請輸入姓名",
            whitespace: true,
          },
        ]}
      >
        {/* <Input /> */}
        <Input
            placeholder="輸入姓名"
        />
      </Form.Item>
      <Form.Item
        name="email"
        label="信箱"
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
      >
        <Input  
          placeholder="example@gmail.com"
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="密碼"
        rules={[
          {
            required: true,
            message: "請輸入密碼",
          },
        ]}
        hasFeedback
      >
        <Input.Password 
          placeholder="至少設定6碼"
        />
      </Form.Item>

      <Form.Item
        name="rePassword"
        label="再次輸入密碼"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "請再次輸入密碼",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("兩次輸入的密碼不一致!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("請閱讀相關條款")),
          },
        ]}
      >
        <Checkbox className="read">
          我已閱讀 <Link to={"/"}>相關條款</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        {isLoading ? (
          <Button
            type="link"
            size="large"
            className={styles.loginForm__button}
            htmlType="submit"
            loading
          >
            確認註冊
          </Button>
        ) : (
          <Button
            type="link"
            size="large"
            className={styles.loginForm__button}
            htmlType="submit"
          >
            確認註冊
          </Button>
        )}
         <div className={styles.join}>
        已經是會員?{" "}
        <Link to={`/auth/login?redirect=${redirect}`}>點此登入</Link>
        </div>
        {!isError ? (
          <div></div>
        ) : (
          <div className={styles.loginForm__errorWrap}>
            <h3 className={styles.loginForm__errorTitle}>
              <WarningOutlined  />
              {"  "}發生錯誤
            </h3>
            <p className={styles.loginForm__errorMessage}>{error.message}</p>
          </div>
        )}
      </Form.Item>
    </Form>
  );
};
export default RegisterCard;
