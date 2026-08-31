import type { LucideIcon } from "lucide-react";

export interface PainPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface RootCause {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CaseStudyMetric {
  label: string;
  numericValue: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  detail?: string;
  icon: LucideIcon;
}

export interface CaseStudyPhase {
  phase: "before" | "phase1" | "phase2";
  label: string;
  period: string;
  heading: string;
  description: string;
  bullets?: string[];
}

export interface ReservationDataPoint {
  period: string;
  reservations: number;
  counseling: number;
  newPatients: number;
}

export interface ProfileHistoryItem {
  period: string;
  role: string;
  description: string;
}

export interface PricingPlan {
  label: string;
  price: string;
  unit: string;
  highlighted?: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}
