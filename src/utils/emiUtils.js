export const calculateEMI = (
  principal,
  annualInterestRate,
  tenureMonths,
  gstForInterest = 0
) => {
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const emi =
    (principal *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, tenureMonths)) /
    (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);

  const schedule = [];
  let remainingPrincipal = principal;

  for (let month = 1; month <= tenureMonths; month++) {
    const interestPayment = remainingPrincipal * monthlyInterestRate;
    const principalPayment = emi - interestPayment;
    remainingPrincipal -= principalPayment;
    const interestGst = interestPayment * (gstForInterest * 0.01);

    schedule.push({
      month,
      emi: emi.toFixed(2),
      emiWithGst: (emi + interestGst).toFixed(2),
      interestPayment: interestPayment.toFixed(2),
      gstForInterest: interestGst.toFixed(2),
      principalPayment: principalPayment.toFixed(2),
      remainingPrincipal: remainingPrincipal.toFixed(2),
    });
  }

  return {
    emi: emi.toFixed(2),
    schedule,
  };
};
