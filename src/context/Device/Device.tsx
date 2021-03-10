import React, { useMemo } from 'react';
import {
    createContext,
    FC,
    PropsWithChildren,
    ReactElement,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import debounce from 'lodash.debounce';

export type DeviceType =
    | 'mobile'
    | 'tabletVertical'
    | 'tabletHorizontal'
    | 'laptop'
    | 'desktop';

export interface DeviceObject {
    min?: Readonly<number>;
    max?: Readonly<number>;
}

export type Devices = ReadonlyMap<DeviceType, DeviceObject>;

export interface DeviceContextState {
    devices: Readonly<Devices>;
    currentDevice: Readonly<DeviceType>;
}

interface ContextProps {
    currentDevice: Readonly<DeviceType>;
    isTouchable: Readonly<boolean>;
}

const devices: Readonly<Devices> = new Map<DeviceType, DeviceObject>([
    ['mobile', { max: 480 }],
    ['tabletVertical', { min: 481, max: 900 }],
    ['tabletHorizontal', { min: 901, max: 1200 }],
    ['laptop', { min: 1201, max: 1800 }],
    ['desktop', { min: 1801 }],
]);

const defaultValue: DeviceContextState = {
    devices,
    currentDevice: 'desktop',
};

export const DeviceContext = createContext<Readonly<ContextProps>>({
    currentDevice: defaultValue.currentDevice,
    isTouchable: false,
});

export const useDevice = () =>
    useContext<Readonly<ContextProps>>(DeviceContext);

export interface DeviceProviderProps {
    devices?: Readonly<Devices>;
    currentDevice?: Readonly<DeviceType>;
}

export const DeviceProvider: FC<Readonly<
    PropsWithChildren<Readonly<DeviceProviderProps>>
>> = (props): Readonly<ReactElement> => {
    const { children } = props;
    const devices = props.devices || defaultValue.devices;

    const [currentDevice, setCurrentDevice] = useState<Readonly<DeviceType>>(
        props.currentDevice || defaultValue.currentDevice
    );

    const getCurrentDeviceMemoized = useCallback(
        (clientWidth: Readonly<number>): Readonly<DeviceType> => {
            const mobile = devices.get('mobile');
            const tabletVertical = devices.get('tabletVertical');
            const tabletHorizontal = devices.get('tabletHorizontal');
            const laptop = devices.get('laptop');
            const desktop = devices.get('desktop');

            if (mobile?.max && clientWidth <= mobile.max) {
                return 'mobile';
            } else if (
                tabletVertical?.min &&
                tabletVertical.max &&
                clientWidth >= tabletVertical.min &&
                clientWidth <= tabletVertical.max
            ) {
                return 'tabletVertical';
            } else if (
                tabletHorizontal?.min &&
                tabletHorizontal.max &&
                clientWidth >= tabletHorizontal.min &&
                clientWidth <= tabletHorizontal.max
            ) {
                return 'tabletHorizontal';
            } else if (
                laptop?.min &&
                laptop.max &&
                clientWidth >= laptop.min &&
                clientWidth <= laptop.max
            ) {
                return 'laptop';
            } else if (desktop?.min && clientWidth >= desktop.min) {
                return 'desktop';
            }

            throw new Error(`Unknown device`);
        },
        [devices]
    );

    const onResize: () => void = useCallback(() => {
        if (window) {
            const device = getCurrentDeviceMemoized(window.outerWidth);
            setCurrentDevice(device);
        }
    }, [getCurrentDeviceMemoized]);

    useEffect(() => {
        if (window) {
            const resizeCallback = debounce(onResize, 50);

            window.addEventListener('resize', resizeCallback);
            onResize();

            return () => {
                window.removeEventListener('resize', resizeCallback);
            };
        }

        return () => null;
    }, [onResize]);

    const isTouchable: Readonly<boolean> =
        typeof window !== 'undefined' &&
        currentDevice !== 'laptop' &&
        currentDevice !== 'desktop' &&
        ('ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0);

    const memoizedValue = useMemo(
        () => ({
            currentDevice,
            isTouchable,
        }),
        [currentDevice, isTouchable]
    );

    return (
        <DeviceContext.Provider value={memoizedValue}>
            {children}
        </DeviceContext.Provider>
    );
};
