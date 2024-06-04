import { Button, Form, Input } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import logger from '@/lib/logger';

export default function DownloadTempFile() {
  const [downAppName, setDownAppName] = useState('');
  const [form] = Form.useForm();
  const FormItem = Form.Item;

  const handleDownload = () => {
    logger('download');
  };

  return (
    <div className='border-gray-E0 mt-5 flex items-center justify-center rounded-md border'>
      <div className='w-[370px] text-center'>
        <div className='mt-8 text-xs font-medium'>GET STARTED</div>
        <Image
          src='/svg/download.svg'
          alt='download'
          width={72}
          height={110}
          className='my-4 inline-block'
        />
        <div className='text-block mb-2 text-2xl font-medium'>
          Download project template files
        </div>
        <div className='text-gray-80 mb-4 text-sm'>
          Use the project template files to get started with your development.
        </div>
        <Form
          form={form}
          layout='vertical'
          className='mt-6'
          onFinish={() => handleDownload()}
        >
          <FormItem
            name='projectName'
            label='Project name'
            rules={[{ required: true, message: 'Please input project name!' }]}
          >
            <Input
              placeholder='project name'
              className='rounded-md'
              maxLength={20}
              onChange={(e) => setDownAppName(e.target.value)}
            />
          </FormItem>
          <FormItem className='text-center'>
            <Button
              size='large'
              className={clsx(
                'w-full',
                downAppName === '' && 'bg-blue-disable'
              )}
              type='primary'
              htmlType='submit'
            >
              Download
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}
