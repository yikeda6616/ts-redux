import React from 'react';

type Props = {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

const Link: React.FC<Props> = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.active}
      style={{
        marginLeft: '4px'
      }}
    >
      {props.children}
    </button>
  );
};

export default Link;
