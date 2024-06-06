// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { API_REQ_FUNCTION } from './apiType';

export const DEFAULT_METHOD = 'GET';

/**
 * api request configuration directory
 * @example
 *    upload: {
 *      target: '/api/file-management/file-descriptor/upload',
 *      baseConfig: { method: 'POST', },
 *    },
 * or:
 *    upload:'/api/file-management/file-descriptor/upload'
 *
 * @description api configuration default method is from DEFAULT_METHOD
 * @type {UrlObj}  // The type of this object from UrlObj.
 */

const AuthList = {
  token: {
    target: '/connect/token',
    baseConfig: { method: 'POST' },
  },
};

const appApiList = {
  getAppList: '/api/apps',
  createApp: {
    target: '/api/apps',
    baseConfig: { method: 'POST' },
  },
  modifyApp: {
    target: '/api/apps',
    baseConfig: { method: 'PUT' },
  },
  getAppDetail: {
    // Todo /api/apps/{appid}  -> Url
    target: '/api/apps',
    baseConfig: { method: 'GET' },
  },
};

const SubscriptionsApiList = {
  getSubscriptions: '/api/apps/subscriptions',
  addSubscription: {
    target: '/api/apps/subscriptions',
    baseConfig: { method: 'POST' },
  },
  updateSubscription: {
    target: '/api/apps/subscriptions/manifest',
    baseConfig: { method: 'PUT' },
  },
  updateCode: {
    target: '/api/apps/subscriptions/code',
    baseConfig: { method: 'PUT' },
  },
  getDevTemplate: {
    target: '/api/dev-template',
    baseConfig: { method: 'POST' },
  },
};

/**
 * api request extension configuration directory
 * @description object.key // The type of this object key comes from from @type {UrlObj}
 */
export const EXPAND_APIS = {
  auth: AuthList,
  app: appApiList,
  subscription: SubscriptionsApiList,
};

export type EXPAND_REQ_TYPES = {
  [X in keyof typeof EXPAND_APIS]: {
    [K in keyof (typeof EXPAND_APIS)[X]]: API_REQ_FUNCTION;
  };
};
