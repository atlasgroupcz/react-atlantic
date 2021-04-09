import { UseInnerTransfer } from '../types/UseInnerTransfer';

export const useInnerTransfer: UseInnerTransfer = (props) => {
    console.log('useInnerTransfer');
    return { ...props };
};
