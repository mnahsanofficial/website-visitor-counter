# Website Visitor Counter

A simple and privacy-focused NPM package to count unique website visitors using Supabase as the backend storage. This package automatically handles IP hashing for privacy and provides a clean API for developers.

## Features

- 🌐 **Privacy-focused**: Automatically hashes visitor IPs using SHA-256
- 🚀 **Easy to use**: Simple function call to get visitor count
- 💾 **Supabase powered**: Uses Supabase for reliable data storage
- 📱 **Browser & Node.js compatible**: Works in both environments
- 🔒 **Duplicate prevention**: Automatically handles returning visitors
- 📊 **Real-time counts**: Get accurate visitor statistics

## Installation

```bash
npm install website-visitor-counter
```

📦 **NPM Package**: [https://www.npmjs.com/package/website-visitor-counter](https://www.npmjs.com/package/website-visitor-counter)  
🐙 **GitHub Repository**: [https://github.com/mnahsanofficial/website-visitor-counter](https://github.com/mnahsanofficial/website-visitor-counter)

## Supabase Setup

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for your project to be ready
3. Note down your project URL and anon key

### 2. Create the Database Table

Run this SQL in your Supabase SQL editor:

```sql
create table if not exists visitors (
  id uuid primary key default gen_random_uuid(),
  project_id text not null,
  ip_hash text not null,
  created_at timestamp with time zone default now(),
  unique(project_id, ip_hash)
);

-- Optional: Create an index for better performance
create index if not exists idx_visitors_project_id on visitors(project_id);
```

### 3. Get Your Credentials

- **Supabase URL**: Found in your project settings (e.g., `https://yourproject.supabase.co`)
- **Supabase Anon Key**: Found in your project API settings

## Usage

### Basic Example

```javascript
import { getVisitorCount } from "website-visitor-counter";

async function showCount() {
  try {
    const count = await getVisitorCount(
      "my-website-project",
      "https://aqxpwgcokzqcppyjoxpu.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxeHB3Z2Nva3pxY3BweWpveHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNjY2NTIsImV4cCI6MjA3MDk0MjY1Mn0.Z4mSyVlN2eMM_wbkbwnkTyxXpy9j76cjK_e_qgmE2Rg"
    );
    
    document.getElementById("visitor-count").innerText = `Visitors: ${count}`;
  } catch (error) {
    console.error("Failed to get visitor count:", error);
  }
}

showCount();
```

### React Example

```jsx
import React, { useState, useEffect } from 'react';
import { getVisitorCount } from 'website-visitor-counter';

function VisitorCounter() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const visitorCount = await getVisitorCount(
          'my-react-app',
          'https://aqxpwgcokzqcppyjoxpu.supabase.co',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxeHB3Z2Nva3pxY3BweWpveHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNjY2NTIsImV4cCI6MjA3MDk0MjY1Mn0.Z4mSyVlN2eMM_wbkbwnkTyxXpy9j76cjK_e_qgmE2Rg'
        );
        setCount(visitorCount);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCount();
  }, []);

  if (loading) return <div>Loading visitor count...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>Total Visitors: {count}</div>;
}
```

### Node.js Example

```javascript
import { getVisitorCount } from 'website-visitor-counter';

async function logVisitorCount() {
  try {
    const count = await getVisitorCount(
      'my-api-service',
      'https://aqxpwgcokzqcppyjoxpu.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxeHB3Z2Nva3pxY3BweWpveHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNjY2NTIsImV4cCI6MjA3MDk0MjY1Mn0.Z4mSyVlN2N2eMM_wbkbwnkTyxXpy9j76cjK_e_qgmE2Rg'
    );
    
    console.log(`Total unique visitors: ${count}`);
  } catch (error) {
    console.error('Failed to get visitor count:', error);
  }
}

logVisitorCount();
```

## API Reference

### `getVisitorCount(projectId, supabaseUrl, supabaseKey)`

Returns a Promise that resolves to the total unique visitor count for the specified project.

#### Parameters

- `projectId` (string): A unique identifier for your project/website
- `supabaseUrl` (string): Your Supabase project URL
- `supabaseKey` (string): Your Supabase anonymous key

#### Returns

- `Promise<number>`: The total unique visitor count

#### Throws

- `Error`: If any of the required parameters are missing
- `Error`: If there's a network error or database error

## How It Works

1. **IP Detection**: Fetches the visitor's IP address from [ipify.org](https://ipify.org)
2. **Privacy Protection**: Hashes the IP address using SHA-256 to protect visitor privacy
3. **Database Storage**: Stores the hashed IP in Supabase with the project ID
4. **Duplicate Prevention**: Uses database constraints to prevent counting the same visitor twice
5. **Count Return**: Returns the total unique visitor count for the project

## Privacy Features

- **IP Hashing**: Visitor IPs are never stored in plain text
- **No Personal Data**: Only stores hashed IPs and project identifiers
- **Unique Counting**: Each visitor is only counted once per project

## Error Handling

The package includes comprehensive error handling for:
- Network failures
- Invalid Supabase credentials
- Database connection issues
- Missing or invalid parameters

## Browser Compatibility

This package works in all modern browsers that support:
- ES2020 features
- Web Crypto API (for SHA-256 hashing)
- Fetch API

## Node.js Compatibility

Requires Node.js 16.0.0 or higher.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please:
1. Check the [Supabase documentation](https://supabase.com/docs)
2. Open an issue on [GitHub](https://github.com/mnahsanofficial/website-visitor-counter/issues)
3. Ensure your Supabase credentials are correct

🔗 **Links**:
- 📦 [NPM Package](https://www.npmjs.com/package/website-visitor-counter)
- 🐙 [GitHub Repository](https://github.com/mnahsanofficial/website-visitor-counter)
- 📚 [Documentation](https://github.com/mnahsanofficial/website-visitor-counter#readme)

## Changelog

### v1.0.0
- Initial release
- Core visitor counting functionality
- Supabase integration
- Privacy-focused IP hashing
- Comprehensive error handling
# website-visitor-counter
