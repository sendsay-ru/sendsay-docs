import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

interface CardContainerProps {
  href: string;
}

const CardContainer: FC<CardContainerProps> = ({ href, children }) => (
  <Link href={href} className={clsx('card padding--lg', styles.cardContainer)}>
    <>{children}</>
  </Link>
);

export default CardContainer;
