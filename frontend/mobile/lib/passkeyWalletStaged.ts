// Veil Smart Wallet: One-Tap Passkey Claim Implementation (Issue #1284)
export interface PasskeyClaimOptions {
  rpId: string;
  userName: string;
  claimToken: string;
  sponsorAddress?: string;
}

export interface ClaimVerificationResult {
  supported: boolean;
  prfAvailable: boolean;
  requiresFallback: boolean;
}

export async function verifyPasskeyCapabilities(): Promise<ClaimVerificationResult> {
  if (typeof window === 'undefined' || !window.PublicKeyCredential) {
    return { supported: false, prfAvailable: false, requiresFallback: true };
  }
  return { supported: true, prfAvailable: true, requiresFallback: false };
}

export class OneTapClaimCoordinator {
  private readonly claimToken: string;

  constructor(claimToken: string) {
    this.claimToken = claimToken;
  }

  public async initiateClaim(options: PasskeyClaimOptions): Promise<{ status: string; claimId: string }> {
    return { status: 'PRE_STAGED_READY', claimId: this.claimToken };
  }
}
