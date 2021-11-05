import { UseTransferOptionT } from '../';

export const sortTransferOptions = (options: UseTransferOptionT[]) =>
    options.sort((a, b) => {
        const a_label =
            typeof a.label === 'string' ? a.label : a.label.props.children;
        const b_label =
            typeof b.label === 'string' ? b.label : b.label.props.children;

        return a_label.toString().localeCompare(b_label.toString());
    });
