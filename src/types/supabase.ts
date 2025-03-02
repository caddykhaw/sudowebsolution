// src/types/supabase.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          full_name: string | null;
          company_name: string | null;
          selected_plan: string | null;
          avatar_url: string | null;
        };
        Insert: {
          id: string;
          created_at?: string;
          updated_at?: string;
          full_name?: string | null;
          company_name?: string | null;
          selected_plan?: string | null;
          avatar_url?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          full_name?: string | null;
          company_name?: string | null;
          selected_plan?: string | null;
          avatar_url?: string | null;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          created_at: string;
          user_id: string;
          plan_id: string;
          status: string;
          current_period_start: string;
          current_period_end: string;
          cancel_at_period_end: boolean;
          stripe_subscription_id: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          user_id: string;
          plan_id: string;
          status: string;
          current_period_start: string;
          current_period_end: string;
          cancel_at_period_end?: boolean;
          stripe_subscription_id?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          user_id?: string;
          plan_id?: string;
          status?: string;
          current_period_start?: string;
          current_period_end?: string;
          cancel_at_period_end?: boolean;
          stripe_subscription_id?: string | null;
        };
      };
      plans: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          description: string | null;
          price: number;
          features: Json | null;
          is_active: boolean;
          stripe_price_id: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          description?: string | null;
          price: number;
          features?: Json | null;
          is_active?: boolean;
          stripe_price_id?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          description?: string | null;
          price?: number;
          features?: Json | null;
          is_active?: boolean;
          stripe_price_id?: string | null;
        };
      };
      tickets: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          user_id: string;
          title: string;
          status: string;
          priority: string;
          category: string | null;
          last_response_at: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          user_id: string;
          title: string;
          status?: string;
          priority?: string;
          category?: string | null;
          last_response_at?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          user_id?: string;
          title?: string;
          status?: string;
          priority?: string;
          category?: string | null;
          last_response_at?: string | null;
        };
      };
      ticket_messages: {
        Row: {
          id: string;
          created_at: string;
          ticket_id: string;
          user_id: string;
          message: string;
          is_staff: boolean;
          attachments: Json | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          ticket_id: string;
          user_id: string;
          message: string;
          is_staff?: boolean;
          attachments?: Json | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          ticket_id?: string;
          user_id?: string;
          message?: string;
          is_staff?: boolean;
          attachments?: Json | null;
        };
      };
      usage_metrics: {
        Row: {
          id: string;
          user_id: string;
          created_at: string;
          storage_used: number;
          bandwidth_used: number;
          recorded_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          created_at?: string;
          storage_used: number;
          bandwidth_used: number;
          recorded_at: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          created_at?: string;
          storage_used?: number;
          bandwidth_used?: number;
          recorded_at?: string;
        };
      };
      invoices: {
        Row: {
          id: string;
          created_at: string;
          user_id: string;
          subscription_id: string;
          amount: number;
          status: string;
          due_date: string;
          paid_at: string | null;
          stripe_invoice_id: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          user_id: string;
          subscription_id: string;
          amount: number;
          status: string;
          due_date: string;
          paid_at?: string | null;
          stripe_invoice_id?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          user_id?: string;
          subscription_id?: string;
          amount?: number;
          status?: string;
          due_date?: string;
          paid_at?: string | null;
          stripe_invoice_id?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
