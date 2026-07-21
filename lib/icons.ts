import {
  Dumbbell,
  Activity,
  Trees,
  ShowerHead,
  Lock,
  Bike,
  ClipboardList,
  Zap,
  ShieldCheck,
  Stethoscope,
  KeyRound,
  Thermometer,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Facility, Service, HeroHighlight } from "@/lib/data";

export const FACILITY_ICONS: Record<Facility["icon"], LucideIcon> = {
  dumbbell: Dumbbell,
  activity: Activity,
  trees: Trees,
  shower: ShowerHead,
  lock: Lock,
  bike: Bike,
};

export const SERVICE_ICONS: Record<Service["icon"], LucideIcon> = {
  clipboard: ClipboardList,
  zap: Zap,
  shield: ShieldCheck,
  stethoscope: Stethoscope,
  key: KeyRound,
  thermometer: Thermometer,
};

export const HERO_HIGHLIGHT_ICONS: Record<HeroHighlight["icon"], LucideIcon> = {
  dumbbell: Dumbbell,
  userCheck: UserCheck,
  users: Users,
};
