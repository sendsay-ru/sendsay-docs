import { useMemo } from 'react';
import { useHistory } from '@docusaurus/router';

export const useFirstPagePath = (): string => {
  const { location } = useHistory();

  return useMemo(() => location.pathname, []);
};
