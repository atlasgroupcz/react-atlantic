import { MockComponentProps } from './MockComponent';
import { MOCK_STRING } from './MOCK_STRING';

export type UseMockComponentType = (props: {
    isMock?: boolean;
}) => MockComponentProps;

export const useMockComponent: UseMockComponentType = ({ isMock = false }) => {
    return { mockString: isMock ? MOCK_STRING : '' };
};
