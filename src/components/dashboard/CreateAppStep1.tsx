import { Button, Divider, Form, Input } from 'antd';
import React from 'react';

import { CreateAppResponse } from '@/types/appType';

type CreateAppStep1Props = {
  setCurrent: (value: 0 | 1) => void;
  setCreateAppDrawerVisible: (visible: boolean) => void;
  setCurrentAppDetail: (value: CreateAppResponse) => void;
};

export default function CreateAppStep1({
  setCurrent,
  setCreateAppDrawerVisible,
}: CreateAppStep1Props) {
  const [form] = Form.useForm();
  const FormItem = Form.Item;

  const handleCreate = () => {
    // TODO create app api
    // "appName": "My App" // A-Z|a-z|0-9
    // setCurrentAppDetail();
    setCurrent(1);
  };

  return (
    <Form
      form={form}
      layout='vertical'
      className='mt-6'
      onFinish={() => handleCreate()}
    >
      <FormItem
        name='appName'
        label='Name'
        rules={[{ required: true, message: 'Please input app name!' }]}
      >
        <Input placeholder='App name' className='rounded-md' maxLength={20} />
      </FormItem>
      <Divider />
      <FormItem className='text-center'>
        <Button
          size='large'
          className='border-blue-link text-blue-link mr-[4%] w-[48%]'
          onClick={() => setCreateAppDrawerVisible(false)}
        >
          Cancel
        </Button>
        <Button
          size='large'
          className='w-[48%]'
          type='primary'
          htmlType='submit'
        >
          Next
        </Button>
      </FormItem>
    </Form>
  );
}
