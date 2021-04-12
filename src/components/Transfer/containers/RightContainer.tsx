import { wrap } from '../../../utils';
import { TransferList } from '../components/ShownTransfer/components/List/List';
import { useRightList } from '../hooks/List';

export const ControlledRightContainer = wrap(TransferList, useRightList);
