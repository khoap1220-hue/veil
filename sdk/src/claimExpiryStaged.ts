// Veil SDK: Claim Link Expiry & Reclamation (Issue #1286)
export interface ClaimLinkMetadata {
  linkId: string;
  senderAddress: string;
  assetCode: string;
  amount: string;
  createdAt: number;
  expiresAt: number;
  reclaimed: boolean;
}

export function isClaimLinkExpired(meta: ClaimLinkMetadata, nowSeconds: number = Math.floor(Date.now() / 1000)): boolean {
  return nowSeconds >= meta.expiresAt;
}

export function assertReclaimable(meta: ClaimLinkMetadata, callerAddress: string, nowSeconds: number): boolean {
  if (callerAddress !== meta.senderAddress) {
    throw new Error('Only the link creator can reclaim funds');
  }
  if (!isClaimLinkExpired(meta, nowSeconds)) {
    throw new Error('Claim link has not reached expiration window');
  }
  if (meta.reclaimed) {
    throw new Error('Claim link already reclaimed');
  }
  return true;
}
