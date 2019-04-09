import React from 'react';
import Input from 'Root/shared/Input';

export default props => (
  <Input
    {...props}
    style={{
      width: '100%',
      border: '2px solid #999999',
      marginBottom: 25,
      color: '#52575d',
      ...props.style,
    }}
  />
);
