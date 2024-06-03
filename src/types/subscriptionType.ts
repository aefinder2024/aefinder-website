export type CreateSubscriptionRequest = {
  Manifest: string;
  Code: File;
};

export type CreateSubscriptionResponse = {
  version: string;
};

export type UpdateSubscriptionRequest = {
  Manifest: string;
};

export type UpdateCode = {
  Code: File;
};

export type SubscriptionItem = {
  chainId: string;
  startBlockNumber: number;
  onlyConfirmed: boolean;
  transactions: {
    to: string;
    methodNames: string[];
  }[];
  logEvents: {
    contractAddress: string;
    eventNames: string[];
  }[];
};

export type SubscriptionItems = {
  subscriptionItems: SubscriptionItem[];
};

export type VersionType = {
  version: string;
  status: number;
  subscriptionManifest: SubscriptionItems;
};

export type GetSubscriptionResponse = {
  currentVersion: VersionType;
  pendingVersion: VersionType;
};
