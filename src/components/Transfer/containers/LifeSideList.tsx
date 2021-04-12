import { wrap } from '../../../utils';
import { LeftSideList } from '../components/ShownTransfer/components/LeftSide/components';
import { useLeftSideList } from '../components/ShownTransfer/hooks/useLeftSideList';

export const ControlledLeftSideTransferList = wrap(
    LeftSideList,
    useLeftSideList
);
