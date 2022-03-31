import { FeatureFlag } from '@common/constants/featureFlag';
import StorageApi from '@extension/browser/storageApi';
import { Storage } from '@extension/common/constants';

export const getIsFeatureEnabled = async (feature: FeatureFlag) => {
  const { features } = await StorageApi.get({ [Storage.Features]: [] });
  return features?.includes(feature);
};
