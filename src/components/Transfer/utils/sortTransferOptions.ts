import { UseTransferT } from '../hooks/useTransfer';

export const sortTransferOptions = <T extends UseTransferT>(options: T[]) =>
    options.sort((a, b) => {
        if (typeof a.label !== 'string' && typeof b.label !== 'string') {
            return a.label.props.children
                .toString()
                .localeCompare(b.label.props.children.toString());
        }

        if (typeof a.label === 'string' && typeof b.label !== 'string') {
            return a.label
                .toString()
                .localeCompare(b.label.props.children.toString());
        }

        if (typeof a.label !== 'string' && typeof b.label === 'string') {
            return a.label.props.children
                .toString()
                .localeCompare(b.label.toString());
        }

        return a.label.toString().localeCompare(b.label.toString());
    });
