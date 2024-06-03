import { CopyOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input } from 'antd';
import React from 'react';

import logger from '@/lib/logger';

import { CreateAppResponse } from '@/types/appType';

type CreateAppStep2Props = {
  type: 0 | 1; // 0: create, 1: modify
  setCurrent: (value: 0 | 1) => void;
  currentAppDetail: CreateAppResponse | undefined;
};

export default function CreateAppStep2({
  type,
  setCurrent,
  currentAppDetail,
}: CreateAppStep2Props) {
  const [form] = Form.useForm();
  const FormItem = Form.Item;

  const handleModify = () => {
    // TODO: modify app
    logger('handleModify');
  };

  return (
    <Form
      form={form}
      layout='vertical'
      className='mt-6'
      onFinish={() => handleModify()}
    >
      <FormItem name='appName' label='App Name'>
        <span className='text-block text-xl'>{currentAppDetail?.appName}</span>
        <CopyOutlined className='text-gray-AD ml-2 cursor-pointer' />
      </FormItem>
      <FormItem name='appId' label='AppId'>
        <span>{currentAppDetail?.appId}</span>
        <CopyOutlined className='text-gray-AD ml-2 cursor-pointer' />
      </FormItem>
      <FormItem name='description' label='Description'>
        <Input placeholder='App description' className='rounded-md' />
      </FormItem>
      <FormItem name='sourceCodeUrl' label='Repository URL'>
        <Input placeholder='App sourceCodeUrl' className='rounded-md' />
      </FormItem>
      <Divider />
      <FormItem className='text-center'>
        <Button
          size='large'
          className='border-blue-link text-blue-link mr-[4%] w-[48%]'
          onClick={() => setCurrent(0)}
        >
          {type === 0 ? 'Previous' : 'Cancel'}
        </Button>
        <Button
          size='large'
          className='w-[48%]'
          type='primary'
          htmlType='submit'
        >
          {type === 0 ? 'Create' : 'Save changes'}
        </Button>
      </FormItem>
    </Form>
  );
}
