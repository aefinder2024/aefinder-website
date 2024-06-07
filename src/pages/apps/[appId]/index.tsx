'use client';
import { message } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import DeployDrawer from '@/components/appDetail/DeployDrawer';
import DetailBox from '@/components/appDetail/DetailBox';
import DownloadTempFile from '@/components/appDetail/DownloadTempFile';
import HeaderHandle from '@/components/appDetail/HeaderHandle';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setCurrentAppDetail,
  setCurrentVersion,
} from '@/store/slices/appSlice';

import { queryAuthToken } from '@/api/apiUtils';
import { getAppDetail } from '@/api/requestApp';
import { getSubscriptions } from '@/api/requestSubscription';

export default function AppDetail() {
  const [deployDrawerVisible, setDeployDrawerVisible] = useState(false);
  const { currentAppDetail } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  useEffect(() => {
    const getAppDetailTemp = async () => {
      await queryAuthToken();
      const { appId } = router.query;
      const res = await getAppDetail({ appId: String(appId) });
      dispatch(setCurrentAppDetail(res));
      const currentVersion = await getSubscriptions();
      // console.log(currentVersion);
      dispatch(setCurrentVersion(currentVersion));
    };
    getAppDetailTemp();
  }, [dispatch, deployDrawerVisible, router.query]);

  return (
    <div className='px-[40px] pb-[60px]'>
      {contextHolder}
      <HeaderHandle
        setDeployDrawerVisible={setDeployDrawerVisible}
        messageApi={messageApi}
      />
      <DetailBox currentAppDetail={currentAppDetail} />
      <DownloadTempFile messageApi={messageApi} />
      {deployDrawerVisible && (
        <DeployDrawer
          type={0}
          title='Deploy app'
          deployDrawerVisible={deployDrawerVisible}
          setDeployDrawerVisible={setDeployDrawerVisible}
          messageApi={messageApi}
        />
      )}
    </div>
  );
}
