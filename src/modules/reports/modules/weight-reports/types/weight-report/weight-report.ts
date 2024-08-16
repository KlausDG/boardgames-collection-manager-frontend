export type WeightRanges = {
  "1_2": number;
  "2_3": number;
  "3_4": number;
  "4_5": number;
};

export type WeightReport = {
  Min: number;
  Max: number;
  Average: number;
  countInRange: WeightRanges;
};
