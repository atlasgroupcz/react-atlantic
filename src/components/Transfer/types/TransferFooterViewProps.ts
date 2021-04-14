import { ReactNode } from 'react';

export type TransferFooterViewProps = {
    cancelComponent: ReactNode;
    submitComponent: ReactNode;
    isVisible?: boolean;
};
