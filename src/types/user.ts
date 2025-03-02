// src/types/user.ts
export interface Profile {
  id: string;
  created_at: string;
  updated_at: string;
  full_name: string | null;
  company_name: string | null;
  selected_plan: string | null;
  avatar_url: string | null;
}

export interface Subscription {
  id: string;
  created_at: string;
  user_id: string;
  plan_id: string;
  status: string;
  current_period_start: string;
  current_period_end: string;
  cancel_at_period_end: boolean;
  stripe_subscription_id: string | null;
  plan?: Plan;
}

export interface Plan {
  id: string;
  created_at: string;
  name: string;
  description: string | null;
  price: number;
  features: any[] | null;
  is_active: boolean;
  stripe_price_id: string | null;
}

export interface UsageMetrics {
  id: string;
  user_id: string;
  created_at: string;
  storage_used: number;
  bandwidth_used: number;
  recorded_at: string;
}

export interface Invoice {
  id: string;
  created_at: string;
  user_id: string;
  subscription_id: string;
  amount: number;
  status: string;
  due_date: string;
  paid_at: string | null;
  stripe_invoice_id: string | null;
}
