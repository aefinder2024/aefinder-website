import logger from '@/lib/logger';
import { handleErrorMessage } from '@/lib/utils';

import { request } from './index';

import {
  CreateAppRequest,
  CreateAppResponse,
  GetAppDetailRequest,
  GetAppDetailResponse,
  getAppListResponse,
  ModifyAppRequest,
} from '@/types/appType';

export const createApp = async (
  params: CreateAppRequest
): Promise<CreateAppResponse> => {
  try {
    const res = await request.app.createApp({ params });
    return res.data;
  } catch (error) {
    throw new Error(handleErrorMessage(error, 'createApp error'));
  }
};

export const modifyApp = async (
  params: ModifyAppRequest
): Promise<CreateAppResponse> => {
  try {
    const res = await request.app.modifyApp({ params });
    return res.data;
  } catch (error) {
    throw new Error(handleErrorMessage(error, 'modifyApp error'));
  }
};

export const getAppDetail = async (
  params: GetAppDetailRequest
): Promise<GetAppDetailResponse> => {
  try {
    const res = await request.app.getAppDetail({ params });
    return res.data;
  } catch (error) {
    throw new Error(handleErrorMessage(error, 'getAppDetail error'));
  }
};

export const getAppList = async (): Promise<getAppListResponse> => {
  try {
    logger('getAppList');
    // const res = await request.app.getAppList();
    // return res.data && res.data.item;
    return [
      {
        appId: '11',
        appName: 'wahaha111',
        imageUrl: '',
        description: 'Sashimi Cross Chain Bsc',
        sourceCodeUrl: '',
        status: 1,
        CreateTime: 0,
        UpdateTime: 0,
      },
      {
        appId: '22',
        appName: 'wahaha222',
        imageUrl: '',
        description: 'Sashimi Cross Chain Bsc',
        sourceCodeUrl: '',
        status: 0,
        CreateTime: 0,
        UpdateTime: 0,
      },
      {
        appId: '33',
        appName: 'wahaha333',
        imageUrl: '',
        description: 'Sashimi Cross Chain Bsc',
        sourceCodeUrl: '',
        status: 1,
        CreateTime: 0,
        UpdateTime: 0,
      },
      {
        appId: '44',
        appName: 'wahaha444',
        imageUrl: '',
        description: 'Sashimi Cross Chain Bsc',
        sourceCodeUrl: '',
        status: 0,
        CreateTime: 0,
        UpdateTime: 0,
      },
      {
        appId: '55',
        appName: 'wahaha555',
        imageUrl: '',
        description: 'Sashimi Cross Chain Bsc',
        sourceCodeUrl: '',
        status: 0,
        CreateTime: 0,
        UpdateTime: 0,
      },
      {
        appId: '66',
        appName: 'wahaha666',
        imageUrl: '',
        description: 'Sashimi Cross Chain Bsc',
        sourceCodeUrl: '',
        status: 0,
        CreateTime: 0,
        UpdateTime: 0,
      },
    ];
  } catch (error) {
    throw new Error(handleErrorMessage(error, 'getAppList error'));
  }
};
