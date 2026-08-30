export type PricingInput = {
  volumeGb: number;
  durationMonths: number;
  hasGoldProtocol: boolean;
};

export function calculatePrice({ volumeGb, durationMonths, hasGoldProtocol }: PricingInput): number {
  const pricePerGig = hasGoldProtocol
    ? (volumeGb <= 50 ? 7000 : volumeGb <= 200 ? 5500 : 4500)
    : (volumeGb <= 50 ? 3500 : volumeGb <= 200 ? 3000 : 2500);

  const monthlyFee = 1000 * volumeGb * durationMonths;
  return (volumeGb * pricePerGig) + monthlyFee;
}