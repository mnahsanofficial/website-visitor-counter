-- Website Visitor Counter - Supabase Database Schema
-- Run this SQL in your Supabase SQL editor to create the required table

-- Create the visitors table
create table if not exists visitors (
  id uuid primary key default gen_random_uuid(),
  project_id text not null,
  ip_hash text not null,
  created_at timestamp with time zone default now(),
  unique(project_id, ip_hash)
);

-- Create an index for better performance when querying by project_id
create index if not exists idx_visitors_project_id on visitors(project_id);

-- Create an index for better performance when querying by created_at
create index if not exists idx_visitors_created_at on visitors(created_at);

-- Optional: Create a composite index for queries that filter by both project_id and created_at
create index if not exists idx_visitors_project_created on visitors(project_id, created_at);

-- Optional: Add RLS (Row Level Security) if you want to restrict access
-- Uncomment the following lines if you want to enable RLS:

-- alter table visitors enable row level security;

-- Create a policy that allows all operations (for public access)
-- create policy "Allow all operations on visitors" on visitors
--   for all using (true);

-- Or create a more restrictive policy if needed:
-- create policy "Allow insert and select on visitors" on visitors
--   for all using (true)
--   with check (true);

-- Verify the table was created correctly
select 
  table_name,
  column_name,
  data_type,
  is_nullable,
  column_default
from information_schema.columns 
where table_name = 'visitors'
order by ordinal_position;

-- Optional: Test the table with a sample insert
-- insert into visitors (project_id, ip_hash) 
-- values ('test-project', 'test-hash-123') 
-- on conflict (project_id, ip_hash) do nothing;

-- Optional: View sample data
-- select * from visitors limit 5;
