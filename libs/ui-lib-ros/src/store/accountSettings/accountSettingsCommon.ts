import type { AccountSettingsType } from '@koku-ui/api/accountSettings';

export const stateKey = 'accountSettings';

export function getFetchId(settingsType: AccountSettingsType) {
  return `${settingsType}`;
}
