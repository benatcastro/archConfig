import { useEffect, useState } from 'react';
import { ListenerType, Storage } from '@extension/common/constants';
import { SortingType, SortingDirection } from '@common/constants';
import StorageApi from '@extension/browser/storageApi';
import { createListener } from '@extension/app/api';

export const useSorting = () => {
  const [sorting, setSorting] = useState({ type: SortingType.Recent, sort: SortingDirection.Asc });

  useEffect(() => {
    (async () => {
      const result = await StorageApi.get({
        [Storage.VaultSorting]: { type: SortingType.Recent, sort: SortingDirection.Asc },
      });
      setSorting(result[Storage.VaultSorting]);
    })();

    const updateSorting = (changes: Record<string, any>) => {
      if (changes[Storage.VaultSorting]) {
        setSorting(changes[Storage.VaultSorting].newValue);
      }
    };

    return createListener('useSorting', updateSorting, ListenerType.StorageChange);
  }, []);

  return sorting;
};
