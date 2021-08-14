import React from 'react';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default function IconButton({ name }) {
  return (
      <Feather
        name={name ?? 'x'}
        size={48}
        style={ styles.icon }
      />
  );
};
