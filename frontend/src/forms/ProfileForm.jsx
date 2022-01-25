import React from "react";
import { Form, Input, Image } from "antd";

export default function ProfileForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="First Name"
        name="firstname"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastname"
        rules={[
          {
            required: true,
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
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Display Name"
        name="displayname"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Profile Picture"
        name="profile_picture_url"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Profile Banner"
        name="profile_banner_url"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>



    </>
  );
}
