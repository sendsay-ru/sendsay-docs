import { EMBEDDED_QUERY_KEY } from '../constants';
import { parseQuery } from './parseQuery';

export const setEmbeddedSession = (location: Location) => {
  const { embedded } = parseQuery(location);

  if (typeof embedded !== 'string') {
    return;
  }

  sessionStorage.setItem(EMBEDDED_QUERY_KEY, embedded);
};
