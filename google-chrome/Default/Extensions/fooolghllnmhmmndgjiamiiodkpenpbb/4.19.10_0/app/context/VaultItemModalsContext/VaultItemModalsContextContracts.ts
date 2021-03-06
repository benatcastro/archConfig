export enum VaultItemModalType {
  DeclinePendingShare = 'declinePendingShare',
  RemoveAccessToSharedItem = 'removeAccessToSharedItem',
  MoveToTrash = 'moveToTrash',
}

export interface IVaultItemModal {
  type: VaultItemModalType;
  itemId: string;
}

export interface IVaultItemModalContext {
  vaultItemModalData: IVaultItemModal;
  setVaultItemModalData: (modal: IVaultItemModal) => void;
}
