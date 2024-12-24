export const calculateFD = (principal: number, rate: number, years: number): number => {
  const r = rate / 100;
  return principal * Math.pow(1 + r, years);
};

export const calculateRD = (
  monthlyDeposit: number,
  rate: number,
  months: number
): number => {
  const r = rate / 100 / 12; // Monthly interest rate
  return monthlyDeposit * ((Math.pow(1 + r, months) - 1) / r);
};