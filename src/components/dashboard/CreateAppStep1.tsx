import { Button, Divider, Form, Input, message } from 'antd';
import React, { useCallback } from 'react';

import { createApp } from '@/api/requestApp';

import { CreateAppResponse } from '@/types/appType';

type CreateAppStep1Props = {
  setCurrent: (value: 0 | 1) => void;
  setCreateAppDrawerVisible: (visible: boolean) => void;
  currentAppDetail: CreateAppResponse;
  setCurrentAppDetail: (value: CreateAppResponse) => void;
};

export default function CreateAppStep1({
  setCurrent,
  setCreateAppDrawerVisible,
  currentAppDetail,
  setCurrentAppDetail,
}: CreateAppStep1Props) {
  const [form] = Form.useForm();
  const FormItem = Form.Item;
  const [messageApi, contextHolder] = message.useMessage();

  const handleCreate = useCallback(async () => {
    // "appName": "My App" // A-Z|a-z|0-9 blank
    const res = await createApp({
      appName: form.getFieldValue('appName'),
    });
    setCurrentAppDetail(res);
    messageApi.open({
      type: 'success',
      content: 'Create app success, next edit detail',
    });
    setCurrent(1);
  }, [setCurrent, form, setCurrentAppDetail, messageApi]);

  return (
    <Form
      form={form}
      layout='vertical'
      className='mt-6'
      onFinish={() => handleCreate()}
    >
      {contextHolder}
      <FormItem
        name='appName'
        label='App Name'
        rules={[{ required: true, message: 'Please input app name!' }]}
      >
        <Input
          value={currentAppDetail?.appName}
          placeholder='App name'
          className='rounded-md'
          minLength={2}
          maxLength={20}
        />
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
          Create
        </Button>
      </FormItem>
    </Form>
  );
}
