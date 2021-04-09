import { wrap } from '../../../../../../utils';
import { ButtonProps } from '../../../../../Button';
import { StyledTransformRightSideHeaderCloseButton } from '../RightSide';

export const useDefaultRightHeaderClearButton = (props: ButtonProps) => {
    return { ...props };
};

export const ControlledDefaultRightHeaderClearButton = wrap(
    StyledTransformRightSideHeaderCloseButton,
    useDefaultRightHeaderClearButton
);
