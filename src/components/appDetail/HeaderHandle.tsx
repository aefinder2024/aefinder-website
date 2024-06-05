import { EditOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';
import Image from 'next/image';
import React, { useState } from 'react';

import CreateAppDrawer from '@/components/dashboard/CreateAppDrawer';

import { useAppSelector } from '@/store/hooks';

import { CreateAppResponse } from '@/types/appType';

type HeaderHandleProps = {
  setDeployDrawerVisible: (visible: boolean) => void;
  setCurrentAppDetail: (detail: CreateAppResponse) => void;
  messageApi: MessageInstance;
};

export default function HeaderHandle({
  setDeployDrawerVisible,
  messageApi,
}: HeaderHandleProps) {
  const username = useAppSelector((state) => state.common.username);
  const [editAppDrawerVisible, setEditAppDrawerVisible] = useState(false);

  return (
    <div className='border-gray-F0 flex h-[130px] items-center justify-between border-b pt-[14px]'>
      <div>
        <Image
          src='/svg/app-default-bg.svg'
          alt='logo'
          width={32}
          height={32}
          className='mr-3 inline-block'
        />
        <div className='relative inline-block'>
          <div className='text-block relative top-[4px] mr-3 text-3xl font-medium'>
            PortkeyV1
          </div>
          <div className='text-gray-80 absolute left-[-40px] top-[-20px] min-w-[100px] text-sm'>
            <Image
              src='/svg/user.svg'
              alt='user'
              width={18}
              height={18}
              className='text-gray-80 mr-3 inline-block'
            />
            <span>{username}</span>
          </div>
        </div>
        <Button
          className='border-blue-link text-blue-link mr-3'
          onClick={() => setEditAppDrawerVisible(true)}
        >
          <EditOutlined className='align-middle' />
          Edit
        </Button>
        <Button type='primary' onClick={() => setDeployDrawerVisible(true)}>
          Deploy...
        </Button>
      </div>
      <div>
        <Select
          defaultValue='Deployed'
          style={{ width: 120 }}
          options={[
            {
              value: 'Deployed',
              label: 'Deployed',
            },
            {
              value: 'UnDeployed',
              label: 'UnDeployed',
            },
          ]}
        />
        <Button
          className='text-blue-link ml-3'
          icon={<SyncOutlined />}
          type='text'
          iconPosition='start'
        >
          Upload
        </Button>
      </div>
      {editAppDrawerVisible && (
        <CreateAppDrawer
          type={1}
          title='Edit App'
          createAppDrawerVisible={editAppDrawerVisible}
          setCreateAppDrawerVisible={setEditAppDrawerVisible}
          messageApi={messageApi}
        />
      )}
    </div>
  );
}
