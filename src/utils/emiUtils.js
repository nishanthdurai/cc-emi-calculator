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

  // info
  let totalInterest = 0;
  let totalGstOnInterest = 0;
  let totalPaid = 0;

  for (let month = 1; month <= tenureMonths; month++) {
    const interestPayment = remainingPrincipal * monthlyInterestRate;

    totalInterest += interestPayment;

    const principalPayment = emi - interestPayment;
    remainingPrincipal -= principalPayment;
    const interestGst = interestPayment * (gstForInterest * 0.01);

    const emiWithInterest = emi + interestGst;

    totalGstOnInterest += interestGst;
    totalPaid += emiWithInterest;

    schedule.push({
      month,
      principalPayment: principalPayment.toFixed(2),
      remainingPrincipal: remainingPrincipal.toFixed(2),
      interestPayment: interestPayment.toFixed(2),
      gstForInterest: interestGst.toFixed(2),
      emi: emi.toFixed(2),
      emiWithGst: emiWithInterest.toFixed(2),
    });
  }

  return {
    emi: emi.toFixed(2),
    schedule,
    info: {
      principal: principal.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalGstOnInterest: totalGstOnInterest.toFixed(2),
      totalPaid: totalPaid.toFixed(2),
    },
  };
};
