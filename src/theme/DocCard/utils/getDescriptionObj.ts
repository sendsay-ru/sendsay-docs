import { getTermination } from './getTermination';

export interface DescriptionObj {
  id: string;
  message: string;
}

export const getDescriptionObj = (count: number): DescriptionObj => {
  const message = getTermination(count);
  const description =
    count > 1
      ? {
          message: `{count} ${message}`,
          id: 'DocCard.categoryDescription.plural',
        }
      : {
          message: `{count} ${message}`,
          id: 'DocCard.categoryDescription.single',
        };

  return description;
};
