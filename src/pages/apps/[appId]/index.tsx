'use client';
import React, { useState } from 'react';

import DeployDrawer from '@/components/appDetail/DeployDrawer';
import DetailBox from '@/components/appDetail/DetailBox';
import DownloadTempFile from '@/components/appDetail/DownloadTempFile';
import HeaderHandle from '@/components/appDetail/HeaderHandle';

import { CreateAppResponse } from '@/types/appType';

export default function AppDetail() {
  const [deployDrawerVisible, setDeployDrawerVisible] = useState(false);
  const [currentAppDetail, setCurrentAppDetail] = useState<CreateAppResponse>({
    appId: '123123212',
    appName: 'wahaha',
    imageUrl: 'http://www.wahaha.com',
    description: 'it description',
    sourceCodeUrl: 'url',
    status: 0,
    CreateTime: 0,
    UpdateTime: 0,
  });

  return (
    <div className='px-[40px] pb-[60px]'>
      <HeaderHandle
        setDeployDrawerVisible={setDeployDrawerVisible}
        setCurrentAppDetail={setCurrentAppDetail}
      />
      <DetailBox currentAppDetail={currentAppDetail} />
      <DownloadTempFile />
      {deployDrawerVisible && (
        <DeployDrawer
          type={0}
          title='Deploy app'
          deployDrawerVisible={deployDrawerVisible}
          setDeployDrawerVisible={setDeployDrawerVisible}
        />
      )}
    </div>
  );
}
