import { Button, Divider, Form, Input } from 'antd';
import React from 'react';

import logger from '@/lib/logger';

import Copy from '@/components/Copy';

import { CreateAppResponse } from '@/types/appType';

type CreateAppStep2Props = {
  type: 0 | 1; // 0: create, 1: modify
  setCurrent: (value: 0 | 1) => void;
  currentAppDetail: CreateAppResponse | undefined;
  setCreateAppDrawerVisible: (value: boolean) => void;
};

export default function CreateAppStep2({
  type,
  setCurrent,
  currentAppDetail,
  setCreateAppDrawerVisible,
}: CreateAppStep2Props) {
  const [form] = Form.useForm();
  const FormItem = Form.Item;

  const handlePre = () => {
    if (type === 0) {
      setCurrent(0);
    } else {
      setCreateAppDrawerVisible(false);
    }
  };

  const handleModify = () => {
    // TODO: modify app
    logger('handleModify');
  };

  return (
    <Form
      form={form}
      layout='vertical'
      className={type === 0 ? 'mt-6' : 'mt-0'}
      onFinish={() => handleModify()}
    >
      <FormItem name='appName' label='App Name'>
        <Copy
          className='relative top-[-6px]'
          content={currentAppDetail?.appName || ''}
          isShowCopy={true}
        />
      </FormItem>
      <FormItem name='appId' label='AppId'>
        <Copy
          className='relative top-[-6px]'
          content={currentAppDetail?.appName || ''}
          isShowCopy={true}
        />
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
          onClick={() => handlePre()}
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
