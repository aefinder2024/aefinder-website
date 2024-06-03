import { Button, Form, Input } from 'antd';
import Image from 'next/image';

import logger from '@/lib/logger';

export default function DownloadTempFile() {
  const [form] = Form.useForm();
  const FormItem = Form.Item;

  const handleDownload = () => {
    logger('download');
  };

  return (
    <div className='border-gray-E0 mt-[20px] flex items-center justify-center rounded-md border'>
      <div className='w-[350px] text-center'>
        <div>GET STARTED</div>
        <Image
          src='/svg/download.svg'
          alt='download'
          width={72}
          height={110}
          className='inline-block'
        />
        <div>Download project template files</div>
        <div>
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
            />
          </FormItem>
          <FormItem className='text-center'>
            <Button
              size='large'
              className='w-full'
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
