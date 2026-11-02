// Veil Notifications Preference Categories (Issue #1287)
export enum NotificationCategory {
  ACTIVITY = 'activity',
  SECURITY = 'security',
  PRODUCT = 'product',
  SEASONAL = 'seasonal'
}

export interface NotificationPreferences {
  [NotificationCategory.ACTIVITY]: boolean;
  [NotificationCategory.SECURITY]: true; // Immutable
  [NotificationCategory.PRODUCT]: boolean;
  [NotificationCategory.SEASONAL]: boolean;
}

export const DEFAULT_NOTIFICATION_PREFERENCES: NotificationPreferences = {
  [NotificationCategory.ACTIVITY]: true,
  [NotificationCategory.SECURITY]: true,
  [NotificationCategory.PRODUCT]: true,
  [NotificationCategory.SEASONAL]: false
};

export function sanitizePreferences(input: Partial<NotificationPreferences>): NotificationPreferences {
  return {
    ...DEFAULT_NOTIFICATION_PREFERENCES,
    ...input,
    [NotificationCategory.SECURITY]: true // Invariant: Security cannot be disabled
  };
}
