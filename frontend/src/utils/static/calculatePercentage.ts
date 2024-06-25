const baseDesktop = 1440;
const baseMobile = 375;

export const calculatePercentage = (base: number, size: number): number => {
  return size / base;
};

export const calculateDesktopPercentage = (size: number): number => {
  return calculatePercentage(baseDesktop, size);
};

export const calculateMobilePercentage = (size: number): number => {
  return calculatePercentage(baseMobile, size);
};
