export type CreateAppRequest = {
  appName: string;
};

export enum AppStatusType {
  Deployed = 1,
  UnDeployed = 0,
}

export type CreateAppResponse = {
  appId: string;
  deployKey?: string;
  appName: string;
  imageUrl: string;
  description: string;
  sourceCodeUrl: string;
  status: number; // 0: UnDeployed, 1: Deployed
  CreateTime: number;
  UpdateTime: number;
};

export type ModifyAppRequest = {
  appId: string;
  description: string;
  sourceCodeUrl: string;
};

export type GetAppDetailRequest = {
  appId: string;
};

export type GetAppDetailResponse = {
  versions: {
    currentVersion: string;
    pendingVersion: string;
  };
} & CreateAppResponse;

export type getAppListResponse = CreateAppResponse[];
