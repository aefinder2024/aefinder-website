import { UploadOutlined } from '@ant-design/icons';
import { Button, Divider, Drawer, Form, Input, Upload } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';
import { useCallback } from 'react';

import { useAppSelector } from '@/store/hooks';

import { addSubscription } from '@/api/requestSubscription';

type DeployDrawerProps = {
  type: 0 | 1; // 0: deploy, 1: modify
  title: string;
  deployDrawerVisible: boolean;
  setDeployDrawerVisible: (visible: boolean) => void;
  messageApi: MessageInstance;
};

const TextArea = Input.TextArea;

// enum UploadType {
//   File = 'File',
//   PreviewImage = 'PreviewImage',
// }

export default function DeployDrawer({
  title,
  deployDrawerVisible,
  setDeployDrawerVisible,
  messageApi,
}: DeployDrawerProps) {
  const [form] = Form.useForm();
  const FormItem = Form.Item;
  const currentAppDetail = useAppSelector(
    (state) => state.app.currentAppDetail
  );

  const handleDeploy = useCallback(async () => {
    console.log(form.getFieldValue('code'));
    const res = await addSubscription({
      appId: currentAppDetail?.appId,
      deployKey: currentAppDetail?.deployKey || '',
      Manifest: form.getFieldValue('Manifest'),
      Code: form.getFieldValue('code')[0],
    });
    console.log(res);
  }, [form, currentAppDetail?.appId, currentAppDetail?.deployKey]);

  const beforeUpload = async (e: File) => {
    console.log(e.size);
    if (e.size > 50 * 1024 * 1024) {
      messageApi.open({
        type: 'error',
        content:
          'File upload failed. Please choose a file within the size limit.',
      });
      return false;
    }
  };

  return (
    <Drawer
      title={title}
      open={deployDrawerVisible}
      onClose={() => setDeployDrawerVisible(false)}
      closeIcon={null}
      destroyOnClose={true}
      width='80%'
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
          <TextArea
            placeholder='add subscriptions'
            className='rounded'
            autoSize={{ minRows: 8, maxRows: 14 }}
          />
        </FormItem>
        <FormItem
          name='code'
          label='Upload DLL file'
          valuePropName='fileList'
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          }}
          extra='Format supported: DLL. Max size 50MB.'
          rules={[{ required: true, message: 'Please upload code DLL!' }]}
        >
          <Upload
            listType='text'
            accept='.dll'
            beforeUpload={(e) => beforeUpload(e)}
            // iconRender={}
          >
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
