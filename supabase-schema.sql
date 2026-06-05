create table table_inquiries (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  household_size text,
  message text,
  created_at timestamptz default now()
);
alter table table_inquiries enable row level security;
create policy "Allow anonymous inserts" on table_inquiries for insert to anon with check (true);
