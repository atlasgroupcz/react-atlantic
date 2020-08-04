import { ChangeEvent, KeyboardEvent, ReactText, useCallback, useState } from 'react';

export interface UseOnChangeValue {
  onChangeInput: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    handlersWithEvent?: Readonly<boolean>
  ) => void;
  onKeyDown: (
    e: KeyboardEvent<HTMLInputElement>,
    onEnterPress?: (value: Readonly<unknown>) => void,
    handlersWithEvent?: Readonly<boolean>
  ) => void;
  onKeyDownTextArea: (
    e: KeyboardEvent<HTMLTextAreaElement>,
    onEnterPress?: (value: Readonly<string>) => void
  ) => void;
  value: Readonly<unknown>;
}

export interface UseEventHandlersProps {
  isDisabled?: Readonly<boolean>;
  defaultValue?: Readonly<unknown>;
  value?: Readonly<ReactText>;
  onChange?: (x: string | ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (
    e: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>
  ) => void;
  deps?: ReadonlyArray<unknown>;
}

export const useKeyboardChange = (
  props: Readonly<UseEventHandlersProps>
): Readonly<UseOnChangeValue> => {
  const [value, setValue] = useState<Readonly<unknown>>(
    props.defaultValue ?? ``
  );

  const onChangeInput = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>,
      handlersWithEvent?: Readonly<boolean>
    ) => {
      const value: Readonly<string> = e.target.value;

      if (!props.isDisabled) {
        if (props.value === undefined) {
          setValue(value);
          if (props.onChange) {
            props.onChange(handlersWithEvent ? e : value);
          }
        } else {
          if (props.onChange) {
            props.onChange(handlersWithEvent ? e : value);
          }
        }
      }
    },
    [value, props.deps]
  );

  const onKeyDown = useCallback(
    (
      e: KeyboardEvent<HTMLInputElement>,
      onEnterPress?: (value: Readonly<unknown>) => void,
      handlersWithEvent?: Readonly<boolean>
    ) => {
      if (!props.isDisabled) {
        if (onEnterPress) {
          if (e.key === `Enter`) {
            if (props.value || value) {
              props.value ? onEnterPress(props.value) : onEnterPress(value);
            }
          }
        }
        if (handlersWithEvent && props.onKeyDown) {
          props.onKeyDown(e);
        }
      }
    },
    [value, props.deps]
  );

  const onKeyDownTextArea = useCallback(
    (
      e: KeyboardEvent<HTMLTextAreaElement>,
      onEnterPress?: (value: Readonly<string>) => void
    ) => {
      if (!props.isDisabled) {
        if (onEnterPress) {
          if (e.key === `Enter`) {
            e.preventDefault();
            onEnterPress(e.currentTarget.value);
          }
        }
        if (props.onKeyDown) {
          props.onKeyDown(e);
        }
      }
    },
    [value, props.deps]
  );

  return {
    onChangeInput,
    onKeyDown,
    onKeyDownTextArea,
    value
  };
};
