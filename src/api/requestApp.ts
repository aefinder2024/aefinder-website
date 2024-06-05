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
    return [];
  } catch (error) {
    throw new Error(handleErrorMessage(error, 'getAppList error'));
  }
};
