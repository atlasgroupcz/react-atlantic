export const theme = {
  color: {
    default: `#f2f2f2`,
    border: `#d9d9d9`,
    primary: {
      alpha: `#1990EA`,
      beta: `#47A6EE`,
      gamma: `#75BCF2`,
      delta: `#A3D2F7`,
      epsilon: `#D1E9FB`
    },
    success: {
      alpha: `#7CB305`,
      beta: `#96C237`,
      gamma: `#B0D169`,
      delta: `#CAE19B`,
      epsilon: `#E5F0CD`
    },
    warning: {
      alpha: `#FFA500`,
      beta: `#FFB733`,
      gamma: `#FFC966`,
      delta: `#FFDB99`,
      epsilon: `#FFEDCC`
    },
    error: {
      alpha: `#D9121A`,
      beta: `#E04147`,
      gamma: `#E87075`,
      delta: `#F0A0A3`,
      epsilon: `#F8CFD1`
    },
    text: {
      alpha: `#000`,
      beta: `#777`,
      gamma: `#FFF`,
      delta: `#000`
    },
    background: {
      alpha: `#FFF`,
      beta: `#F2F2F2`,
      gamma: `#F6F6F6`,
      delta: `#FFF`
    }
  },
  padding: {
    xs: `2px`,
    sm: `5px`,
    md: `10px`,
    lg: `15px`,
    xl: `20px`
  },
  margin: {
    xs: `2px`,
    sm: `5px`,
    md: `10px`,
    lg: `15px`,
    xl: `20px`
  },
  radius: `4px`,
  rounded: `20px`,
  font: {
    size: {
      sm: `12px`,
      md: `14px`,
      lg: `16px`
    },
    family: `-apple-system,BlinkMacSystemFont,'Segoe UI'`
  },
  height: {
    xs: `16px`,
    sm: `26px`,
    md: `34px`,
    lg: `40px`
  },
  width: {
    xs: `16px`,
    sm: `26px`,
    md: `34px`,
    lg: `40px`
  },
  boxShadow: {
    sm: `0 0px 4px rgba(0,0,0,0.05)`,
    md: `0 0px 4px rgba(0,0,0,0.25)`
  }
};

export type Theme = typeof theme;
