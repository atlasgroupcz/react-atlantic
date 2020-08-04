import { MouseEvent, useCallback } from 'react';

export interface UseClickValue {
  onClick: () => void;
}

export interface UseClickProps {
  deps?: ReadonlyArray<unknown>;
  onClick?: () => void;
}

export const useClick = (
  props: Readonly<UseClickProps>
): Readonly<UseClickValue> => {
  const onClick = useCallback(
    (e?: MouseEvent<HTMLAnchorElement>) => {
      if (props.onClick) {
        e?.preventDefault();
        
        props.onClick();
      }
    },
    [props.deps]
  );

  return {
    onClick
  };
};
