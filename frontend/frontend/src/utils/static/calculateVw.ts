const baseDesktop = 1440;
const baseMobile = 375;

export const calculateVw = (base: number, size: number): number => {
  return (size / base) * 100;
};

export const calculateDesktopVw = (size: number): number => {
  return calculateVw(baseDesktop, size);
};

export const calculateMobileVw = (size: number): number => {
  return calculateVw(baseMobile, size);
};
