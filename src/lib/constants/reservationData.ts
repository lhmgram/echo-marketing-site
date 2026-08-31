import type { ReservationDataPoint } from "@/types";

/**
 * 美容クリニック様における実績データ(月平均)。
 * Before: 2024年8月〜2025年9月 / 第1段階: 2025年10月〜2026年3月 / 第2段階: 2026年4月〜7月
 */
export const reservationData: ReservationDataPoint[] = [
  {
    period: "Before",
    reservations: 35.4,
    counseling: 36.2,
    newPatients: 43.3,
  },
  {
    period: "第1段階",
    reservations: 43.0,
    counseling: 45.3,
    newPatients: 64.3,
  },
  {
    period: "第2段階",
    reservations: 56.8,
    counseling: 60.0,
    newPatients: 73.5,
  },
];
