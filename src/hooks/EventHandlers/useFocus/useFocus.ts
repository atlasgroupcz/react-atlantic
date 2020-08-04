import { FocusEvent, useCallback, useState } from 'react';

export interface UseFocusValue {
  onBlur: (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    onBlur?: () => void
  ) => void;
  onFocus: (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    onFocus?: () => void
  ) => void;
  isFocused: Readonly<boolean>;
}

export const useFocus = (): Readonly<UseFocusValue> => {
  const [isFocused, setFocused] = useState<Readonly<boolean>>(false);

  const onFocus = useCallback(
    (
      e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
      onFocus?: () => void
    ) => {
      setFocused(true);
      if (onFocus) {
        onFocus();
      }
    },
    [isFocused]
  );

  const onBlur = useCallback(
    (
      e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
      onBlur?: () => void
    ) => {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    },
    [isFocused]
  );

  return {
    onFocus,
    onBlur,
    isFocused
  };
};
