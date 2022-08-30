import qs from 'qs';

export const parseQuery = (location: Location) => qs.parse(location.search.slice(1));
