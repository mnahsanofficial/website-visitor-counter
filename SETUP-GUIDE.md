# 🚀 Quick Setup Guide for Your Supabase Project

## Your Supabase Project Details
- **Project URL**: `https://aqxpwgcokzqcppyjoxpu.supabase.co`
- **API Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxeHB3Z2Nva3pxY3BweWpveHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNjY2NTIsImV4cCI6MjA3MDk0MjY1Mn0.Z4mSyVlN2eMM_wbkbwnkTyxXpy9j76cjK_e_qgmE2Rg`

## Step 1: Set Up the Database Table

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/aqxpwgcokzqcppyjoxpu
2. Click on "SQL Editor" in the left sidebar
3. Copy and paste this SQL:

```sql
create table if not exists visitors (
  id uuid primary key default gen_random_uuid(),
  project_id text not null,
  ip_hash text not null,
  created_at timestamp with time zone default now(),
  unique(project_id, ip_hash)
);

-- Create indexes for better performance
create index if not exists idx_visitors_project_id on visitors(project_id);
create index if not exists idx_visitors_created_at on visitors(created_at);
create index if not exists idx_visitors_project_created on visitors(project_id, created_at);
```

4. Click "Run" to execute the SQL

## Step 2: Test the Package

### Option A: Test with Node.js Demo
```bash
cd examples
node demo.js
```

### Option B: Test with Browser Demo
1. Open `examples/browser-demo.html` in your browser
2. The form will be pre-filled with your credentials
3. Click "Get Visitor Count" to test

### Option C: Test in Your Own Code
```javascript
import { getVisitorCount } from 'website-visitor-counter';

const count = await getVisitorCount(
  'my-test-project',
  'https://aqxpwgcokzqcppyjoxpu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxeHB3Z2Nva3pxY3BweWpveHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNjY2NTIsImV4cCI6MjA3MDk0MjY1Mn0.Z4mSyVlN2eMM_wbkbwnkTyxXpy9j76cjK_e_qgmE2Rg'
);

console.log(`Total visitors: ${count}`);
```

## Step 3: Monitor Your Data

1. Go to your Supabase dashboard
2. Click on "Table Editor" in the left sidebar
3. Select the "visitors" table
4. You should see new records being added as you test the package

## Expected Behavior

- First call: Creates a new visitor record and returns count = 1
- Subsequent calls from same IP: Returns same count (no duplicate records)
- Different IPs: Creates new records and increases count

## Troubleshooting

If you get errors:
1. ✅ Verify the table was created successfully
2. ✅ Check that your API key is correct
3. ✅ Ensure your Supabase project is active
4. ✅ Check the browser console for detailed error messages

## Ready to Use!

Your package is now configured with your actual Supabase credentials and ready to use in production! 🎉
