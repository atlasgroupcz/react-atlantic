import React, { FC, useState } from 'react';
import { TabsProps, Tabs, TabListProps } from '../../../src/components';
import { wrap } from '../../../src/utils';
import { toBeDefinedTest } from '../../shared';
import { mountWithTheme } from '../../utils';

export const MockList: FC<TabListProps> = ({ activeKey, onClick }) => {
    return (
        <>
            {[...Array(3)].map((_, index) => (
                <div
                    key={index}
                    className={`tab-${index}`}
                    onClick={(e) => onClick(e, `${index}`)}
                ></div>
            ))}
        </>
    );
};

const mockTabsProps: TabsProps = {
    activeKey: '1',
    List: MockList,
};

const useMockTabs = ({ ...props }: TabsProps): TabsProps => {
    const [key, setKey] = useState<string>('1');

    const handleClick = (
        _: React.MouseEvent<Element, MouseEvent>,
        key: string
    ) => {
        setKey(key);
    };

    return { activeKey: key, onClick: handleClick, ...props };
};

const ControlledMockTabs = wrap(Tabs, useMockTabs);

describe('Tabs shared', () => {
    toBeDefinedTest(Tabs, mockTabsProps);
});

describe('Tabs specific', () => {
    it('should be cool without children', () => {
        const wrapper = mountWithTheme(<ControlledMockTabs List={MockList} />);
        wrapper.unmount();
    });

    let wrapper: ReturnType<typeof mountWithTheme>;
    beforeEach(() => {
        wrapper = mountWithTheme<typeof ControlledMockTabs>(
            <ControlledMockTabs List={MockList}>
                <div key={0}>key0</div>
                <div key={1}>key1</div>
                <div key={2}>key2</div>
            </ControlledMockTabs>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('list should has 3 children', () => {
        const list = wrapper.find(MockList);
        expect(list.children().length).toBe(3);
    });

    it('should has own list', () => {
        const list = wrapper.find(MockList);
        expect(list.childAt(0).hasClass('tab-0')).toBe(true);
        expect(list.childAt(1).hasClass('tab-1')).toBe(true);
        expect(list.childAt(2).hasClass('tab-2')).toBe(true);
    });

    it('should be visible correct content', () => {
        const list = wrapper.find(MockList);
        expect(wrapper.find(Tabs).childAt(1).text()).toContain('key1');
        list.childAt(2).simulate('click');
        expect((wrapper.find(Tabs).props() as any)?.activeKey).toBe('2');
        expect(wrapper.find(Tabs).childAt(1).text()).toContain('key2');
    });
});
