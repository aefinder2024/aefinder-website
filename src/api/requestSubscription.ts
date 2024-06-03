import axios from 'axios';

import { handleErrorMessage } from '@/lib/utils';

import { CancelTokenSourceKey, CommonErrorNameType } from './apiType';
import { request } from './index';

import {
  CreateSubscriptionRequest,
  CreateSubscriptionResponse,
  GetSubscriptionResponse,
  UpdateCode,
  UpdateSubscriptionRequest,
} from '@/types/subscriptionType';

// export const createApp = async (params: CreateAppRequest): Promise<CreateAppResponse> => {
//   try {
//     const res = await request.app.createApp({ params });
//     return res.data;
//   } catch (error) {
//     throw new Error(handleErrorMessage(error, 'createApp error'));
//   }
// };

export const addSubscription = async (
  params: CreateSubscriptionRequest
): Promise<CreateSubscriptionResponse> => {
  try {
    const res = await request.subscription.addSubscription({
      params,
      cancelTokenSourceKey: CancelTokenSourceKey.ADD_SUBSCRIPTION,
    });
    return res.data;
    // eslint-disable-next-line
  } catch (error: any) {
    // eslint-disable-next-line
    const newError: any = new Error(
      handleErrorMessage(error, 'addSubscription error')
    );
    if (axios.isCancel(error)) {
      newError.name = CommonErrorNameType.CANCEL;
    }
    newError.code = error?.code;

    throw newError;
  }
};

export const updateSubscription = async (
  params: UpdateSubscriptionRequest
): Promise<null> => {
  try {
    const res = await request.subscription.updateSubscription({ params });
    return res.data;
  } catch (error) {
    throw new Error(handleErrorMessage(error, 'updateSubscription error'));
  }
};

export const updateCode = async (params: UpdateCode): Promise<null> => {
  try {
    const res = await request.subscription.updateCode({ params });
    return res.data;
  } catch (error) {
    throw new Error(handleErrorMessage(error, 'updateCode error'));
  }
};

export const getSubscriptions = async (): Promise<GetSubscriptionResponse> => {
  try {
    const res = await request.subscription.getSubscriptions();
    return res.data;
  } catch (error) {
    throw new Error(handleErrorMessage(error, 'getSubscription error'));
  }
};
