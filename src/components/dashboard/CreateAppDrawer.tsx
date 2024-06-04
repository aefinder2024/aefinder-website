import { Drawer, Steps } from 'antd';
import React, { useState } from 'react';

import CreateAppStep1 from '@/components/dashboard/CreateAppStep1';
import CreateAppStep2 from '@/components/dashboard/CreateAppStep2';

import { CreateAppResponse } from '@/types/appType';

type CreateAppDrawerProps = {
  type: 0 | 1; // 0 create app, 1 modify app
  title: string;
  createAppDrawerVisible: boolean;
  setCreateAppDrawerVisible: (visible: boolean) => void;
  appDetail?: CreateAppResponse;
};

export default function CreateAppDrawer({
  type,
  title,
  createAppDrawerVisible,
  setCreateAppDrawerVisible,
  appDetail,
}: CreateAppDrawerProps) {
  const [current, setCurrent] = useState(type);
  const [currentAppDetail, setCurrentAppDetail] = useState<CreateAppResponse>(
    appDetail || {
      appId: '55',
      appName: 'wahaha555',
      imageUrl: '',
      description: 'Sashimi Cross Chain Bsc',
      sourceCodeUrl: '',
      status: 0,
      CreateTime: 0,
      UpdateTime: 0,
    }
  );

  return (
    <Drawer
      title={title}
      open={createAppDrawerVisible}
      onClose={() => setCreateAppDrawerVisible(false)}
      closeIcon={null}
      destroyOnClose={true}
    >
      {type === 0 && (
        <Steps
          current={current}
          items={[
            {
              title: 'App Name',
            },
            {
              title: 'Enter Detail',
            },
          ]}
        />
      )}
      {current === 0 && (
        <CreateAppStep1
          setCurrent={setCurrent}
          setCreateAppDrawerVisible={setCreateAppDrawerVisible}
          setCurrentAppDetail={setCurrentAppDetail}
        />
      )}
      {current === 1 && (
        <CreateAppStep2
          type={type}
          setCurrent={setCurrent}
          currentAppDetail={currentAppDetail}
          setCreateAppDrawerVisible={setCreateAppDrawerVisible}
        />
      )}
    </Drawer>
  );
}
