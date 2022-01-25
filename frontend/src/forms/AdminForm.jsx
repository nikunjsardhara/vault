import { React, useEffect } from "react";
import { Form, Input, Select } from "antd";
import { crud } from "@/redux/crud/actions";
import { useSelector, useDispatch } from "react-redux";

export default function AdminForm({ isUpdateForm = false }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(crud.list('role'));
  }, []);

  return (
    <>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      {!isUpdateForm && (
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input type="password" autoComplete="off" />
        </Form.Item>
      )}

      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="surname"
        name="surname"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
    </>
  );
}
