import { environment } from '@env';

export function getSubDomain() {
  const currentUrl = window.location.href;
  const isDomain = currentUrl.startsWith(environment.domainUrl);
  if (!isDomain) {
    const domain = /:\/\/([^\/]+)/.exec(currentUrl);
    const splittedDomain = domain ? domain[1].split('.') : '';
    return splittedDomain[0]?.includes('localhost') ? undefined : splittedDomain[0];
  } else return '';
}
