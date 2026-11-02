// Veil Mobile: Create Claim Link Flow with Bearer Disclaimer (Issue #1285)
export interface CreateClaimLinkRequest {
  assetCode: string;
  amount: string;
  recipientHint?: string;
  expirationHours: number;
}

export const BEARER_ASSET_WARNING = 'Anyone who possesses this claim link can redeem and spend these funds. Share only via secure, direct channels.';

export function validateClaimAmount(amount: string): boolean {
  const num = parseFloat(amount);
  return !isNaN(num) && num > 0;
}
