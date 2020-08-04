import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';

export interface UseClickChangeValue {
  onChangeClick: (
    e: MouseEvent<HTMLLabelElement> | ChangeEvent<HTMLInputElement>,
    isPartiallyChecked?: Readonly<boolean>
  ) => void;
  isChecked: Readonly<boolean> | undefined;
}

export interface UseClickChangeProps {
  isDisabled?: Readonly<boolean>;
  isDefaultChecked?: Readonly<boolean>;
  isChecked?: Readonly<boolean>;
  onChange?: (
    isChecked: Readonly<boolean> | ChangeEvent<HTMLInputElement>
  ) => void;
  deps?: ReadonlyArray<unknown>;
  handlersWithEvent?: Readonly<boolean>;
}

export const useClickChange = (
  props: Readonly<UseClickChangeProps>
): Readonly<UseClickChangeValue> => {
  const [isChecked, setChecked] = useState<Readonly<boolean> | undefined>(
    props.isDefaultChecked
  );

  const onChangeClick = useCallback(
    (e, isPartiallyChecked?: Readonly<boolean>) => {
      if (e.type === 'click') {
        e.preventDefault();
      }

      if (!props.isDisabled) {
        if (props.isChecked === undefined) {
          if (!isPartiallyChecked) {
            setChecked(e.type === 'click' ? !isChecked : e?.target.checked);
          }
          if (props.onChange) {
            props.onChange(props.handlersWithEvent ? e : !isChecked);
          }
        } else {
          if (props.onChange) {
            props.onChange(props.handlersWithEvent ? e : !props.isChecked);
          }
        }
      }
    },
    [isChecked, props.deps]
  );

  return {
    onChangeClick,
    isChecked
  };
};
