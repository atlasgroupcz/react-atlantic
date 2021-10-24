import { UseTransferT } from '../hooks/useTransfer';

export const sortTransferOptions = <T extends UseTransferT>(options: T[]) =>
    options.sort((a, b) => {
        const a_label =
            typeof a.label === 'string' ? a.label : a.label.props.children;
        const b_label =
            typeof b.label === 'string' ? b.label : b.label.props.children;

        return a_label.toString().localeCompare(b_label.toString());
    });
