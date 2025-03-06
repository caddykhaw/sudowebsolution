'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

type SupabaseContextType = {
  user: User | null;
  session: Session | null;
  signOut: () => Promise<void>;
  isLoading: boolean;
};

### 3. Services Table

```sql
CREATE TYPE service_type AS ENUM ('hosting', 'domain', 'ssl', 'email');
CREATE TYPE service_status AS ENUM ('active', 'suspended', 'cancelled', 'pending');

CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type service_type NOT NULL,
  description TEXT,
  status service_status DEFAULT 'pending',
  creation_date TIMESTAMPTZ DEFAULT NOW(),
  renewal_date TIMESTAMPTZ NOT NULL,
  expiry_date TIMESTAMPTZ NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  auto_renew BOOLEAN DEFAULT TRUE,
  server_details JSONB,
  domain_details JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Define policies
CREATE POLICY "Customers can view their own services" ON services
  FOR SELECT USING (
    auth.uid() = customer_id
  );

CREATE POLICY "Admin, support, and billing can view all services" ON services
  FOR SELECT USING (
    auth.jwt() ->> 'role' IN ('admin', 'support', 'billing')
  );

CREATE POLICY "Admin and billing can manage all services" ON services
  FOR ALL USING (
    auth.jwt() ->> 'role' IN ('admin', 'billing')
  );