import {
    CommonHTMLProps,
    MouseEvents,
    SizeWithDocs,
    Type,
    TypeWithDocs,
} from '../../../types';

export type ButtonStyleType = Type | 'dashed';

type ButtonTypeWithDocs =
    | TypeWithDocs
    | {
          /** dashed */
          type?: ButtonStyleType;
      };

export type ButtonProps = {
    isRound?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isTransparent?: boolean;
} & CommonHTMLProps &
    MouseEvents<HTMLButtonElement> &
    SizeWithDocs &
    ButtonTypeWithDocs;
