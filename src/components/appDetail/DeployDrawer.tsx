import { UploadOutlined } from '@ant-design/icons';
import { Button, Divider, Drawer, Form, Input, Upload } from 'antd';

import logger from '@/lib/logger';

type DeployDrawerProps = {
  type: 0 | 1; // 0: deploy, 1: modify
  title: string;
  deployDrawerVisible: boolean;
  setDeployDrawerVisible: (visible: boolean) => void;
};

const TextArea = Input.TextArea;

export default function DeployDrawer({
  title,
  deployDrawerVisible,
  setDeployDrawerVisible,
}: DeployDrawerProps) {
  const [form] = Form.useForm();
  const FormItem = Form.Item;

  const handleDeploy = () => {
    logger(form.getFieldsValue());
  };

  return (
    <Drawer
      title={title}
      open={deployDrawerVisible}
      onClose={() => setDeployDrawerVisible(false)}
      closeIcon={null}
      destroyOnClose={true}
    >
      <div>
        <div>Read the developer documentation for more information:</div>
        <div>https://hoopox.feishu.cn/wiki/UDSiwf6s6iHTQ9k4ZbWcvEaGn0e</div>
      </div>
      <Form
        form={form}
        layout='vertical'
        className='mt-6'
        onFinish={() => handleDeploy()}
      >
        <FormItem
          name='Manifest'
          label='Upload Json'
          rules={[{ required: true, message: 'Please input upload json!' }]}
        >
          <TextArea placeholder='add subscriptions' className='rounded-md' />
        </FormItem>
        <FormItem
          name='code'
          label='Upload DLL file'
          valuePropName='fileList'
          extra='Format supported: DLL. Max size 50MB.'
          rules={[{ required: true, message: 'Please upload code DLL!' }]}
        >
          <Upload name='logo' action='/upload.do' listType='picture'>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </FormItem>
        <Divider />
        <FormItem className='text-center'>
          <Button
            size='large'
            className='border-blue-link text-blue-link mr-[4%] w-[48%]'
            onClick={() => setDeployDrawerVisible(false)}
          >
            Cancel
          </Button>
          <Button
            size='large'
            className='w-[48%]'
            type='primary'
            htmlType='submit'
          >
            Deploy
          </Button>
        </FormItem>
      </Form>
    </Drawer>
  );
}
