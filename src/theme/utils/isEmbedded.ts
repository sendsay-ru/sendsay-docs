import { parseQuery } from './parseQuery';
import { EMBEDDED_QUERY_KEY, Embedded } from '../constants';

const getEmbeddedValue = (location: Location): string | undefined => {
  const { embedded } = parseQuery(location);

  if (!embedded) {
    return sessionStorage.getItem(EMBEDDED_QUERY_KEY);
  }

  if (typeof embedded !== 'string') {
    return undefined;
  }

  return embedded;
};

export const isEmbedded = (location: Location): boolean =>
  getEmbeddedValue(location) === Embedded.True;
