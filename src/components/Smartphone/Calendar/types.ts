export interface PillRecord {
  id: string;
  date: string;
  time: string;
  taken: boolean;
  missed: boolean;
  bleeding: boolean;
  notes?: string;
  sideEffects?: string[];
}

export type SideEffectOption = {
  id: string;
  label: string;
};