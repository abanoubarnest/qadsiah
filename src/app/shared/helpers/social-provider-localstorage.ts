import { SOCIAL_PROVIDER_TOKEN } from '../constants/social-provider-token.constants';

export function removeTokenFromLocalStorage(provider: string) {
  const key = SOCIAL_PROVIDER_TOKEN[provider.toUpperCase()];
  localStorage.removeItem(key);
}
