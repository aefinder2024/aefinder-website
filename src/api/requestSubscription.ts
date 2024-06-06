import { handleErrorMessage } from '@/lib/utils';

import { getAccessToken } from './apiUtils';
import { request } from './index';

import {
  CreateSubscriptionRequest,
  GetDevTemplateRequest,
  GetSubscriptionResponse,
  UpdateCode,
  UpdateSubscriptionRequest,
} from '@/types/subscriptionType';
export const addSubscription = async (
  params: CreateSubscriptionRequest
): Promise<string> => {
  try {
    const { appId, deployKey, Code, Manifest } = params;
    const Authorization = await getAccessToken({
      client_id: appId,
      client_secret: deployKey,
    });
    const formData = new FormData();
    // const manifestBlob = new Blob([JSON.stringify(Manifest)], { type: 'application/json' });
    const CodeBlob = new Blob([Code]);
    formData.append('Manifest', Manifest);
    formData.append('Code', CodeBlob);

    console.log(formData);

    const response = await fetch('/api/apps/subscriptions', {
      method: 'POST',
      body: formData,
      headers: {
        // 'Content-Type': 'multipart/form-data', // don't add Content-Type
        Authorization: `${Authorization.token_type} ${Authorization.access_token}`,
      },
    });
    console.log(response);
    return 'res';
  } catch (error) {
    throw new Error(handleErrorMessage(error, 'addSubscription error'));
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

export const getDevTemplate = async (
  params: GetDevTemplateRequest
): Promise<Blob> => {
  try {
    const res = await request.subscription.getDevTemplate({
      data: params,
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/json; application/octet-stream',
      },
    });
    return res;
  } catch (error) {
    throw new Error(handleErrorMessage(error, 'getSubscription error'));
  }
};
