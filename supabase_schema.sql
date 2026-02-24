-- Create the customers table
CREATE TABLE public.customers (
    id UUID DEFAULT auth.uid() PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Optional)
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

-- Create the bookings table
CREATE TABLE public.bookings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    booking_id TEXT NOT NULL UNIQUE,
    customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE,
    service_type TEXT NOT NULL,
    message TEXT,
    status TEXT DEFAULT 'pending' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Optional)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
