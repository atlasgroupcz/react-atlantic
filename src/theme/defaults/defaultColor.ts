export type ColorType = {
    default: string;
    border: string;
    primary: {
        alpha: string;
        beta: string;
        gamma: string;
        delta: string;
        epsilon: string;
        zeta: string;
    };
    success: {
        alpha: string;
        beta: string;
        gamma: string;
        delta: string;
        epsilon: string;
        zeta: string;
    };
    warning: {
        alpha: string;
        beta: string;
        gamma: string;
        delta: string;
        epsilon: string;
        zeta: string;
    };
    error: {
        alpha: string;
        beta: string;
        gamma: string;
        delta: string;
        epsilon: string;
        zeta: string;
    };
    info: {
        alpha: string;
        beta: string;
        gamma: string;
        delta: string;
        epsilon: string;
        zeta: string;
    };
    text: {
        alpha: string;
        beta: string;
        gamma: string;
        delta: string;
        epsilon: string;
    };
    background: {
        alpha: string;
        beta: string;
        gamma: string;
        delta: string;
        epsilon: string;
    };
};

export const defaultColor: ColorType = {
    default: `#f2f2f2`,
    border: `#d9d9d9`,
    primary: {
        alpha: `#1990EA`,
        beta: `#47A6EE`,
        gamma: `#75BCF2`,
        delta: `#A3D2F7`,
        epsilon: `#D1E9FB`,
        zeta: `#E7F4FD`,
    },
    success: {
        alpha: `#7CB305`,
        beta: `#96C237`,
        gamma: `#B0D169`,
        delta: `#CAE19B`,
        epsilon: `#E5F0CD`,
        zeta: `#F2F7E5`,
    },
    warning: {
        alpha: `#FFA500`,
        beta: `#FFB733`,
        gamma: `#FFC966`,
        delta: `#FFDB99`,
        epsilon: `#FFEDCC`,
        zeta: `#FFF6E5`,
    },
    error: {
        alpha: `#D9121A`,
        beta: `#E04147`,
        gamma: `#E87075`,
        delta: `#F0A0A3`,
        epsilon: `#F8CFD1`,
        zeta: `#FBE6E7`,
    },
    info: {
        alpha: `#1990EA`,
        beta: `#47A6EE`,
        gamma: `#75BCF2`,
        delta: `#A3D2F7`,
        epsilon: `#D1E9FB`,
        zeta: `#E7F4FD`,
    },
    text: {
        alpha: `#000000`,
        beta: `#777777`,
        gamma: `#FFFFFF`,
        delta: `#000000`,
        epsilon: `#000000`,
    },
    background: {
        alpha: `#FFFFFF`,
        beta: `#F2F2F2`,
        gamma: `#F6F6F6`,
        delta: `#FFFFFF`,
        epsilon: `#000000`,
    },
};
