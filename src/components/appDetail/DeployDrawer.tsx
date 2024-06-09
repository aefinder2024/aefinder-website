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
    messageApi.open({
      type: 'loading',
      content: 'Deploying...',
      duration: 1,
    });
    const haveOk = await addSubscription({
      appId: currentAppDetail?.appId,
      deployKey: currentAppDetail?.deployKey || '',
      Manifest: form.getFieldValue('Manifest'),
      Code: form.getFieldValue('code')[0],
    });
    if (haveOk) {
      messageApi.open({
        type: 'success',
        content: 'Deploy Successfully',
        duration: 1,
      });
      setDeployDrawerVisible(false);
    } else {
      messageApi.open({
        type: 'error',
        content: 'Deploy Failed',
        duration: 1,
      });
    }
  }, [
    form,
    currentAppDetail?.appId,
    currentAppDetail?.deployKey,
    messageApi,
    setDeployDrawerVisible,
  ]);

  const beforeUpload = async (e: File) => {
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
            beforeUpload={beforeUpload}
            maxCount={1}
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
