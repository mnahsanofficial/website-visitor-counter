# Website Visitor Counter v3.1.0 🚀

A **multi-platform visitor counting system** with **cloud-agnostic architecture** supporting Railway, Vercel, Netlify, and Cloudflare backends.

## 🎉 **LIVE DEMO: [View My Portfolio](https://my-portfolio-mnahsanofficials-projects.vercel.app/)**

See the visitor counter in action on my live portfolio website!

## ✨ **What's New in v3.1.0 - MULTI-PLATFORM RELEASE!**

- 🌐 **Multi-Platform Support** - Railway, Vercel, Netlify, and Cloudflare backends
- 🔓 **No Vendor Lock-in** - Platform-agnostic architecture with easy switching
- 🔒 **Enhanced Security** - Proper rate limiting and request fingerprinting
- 📊 **Environment Configuration** - API URLs in environment variables, not hardcoded
- 🚀 **Improved Scalability** - Support for high-traffic websites
- 🔄 **Better Error Handling** - Graceful fallbacks and improved reliability
- 🎯 **Production Ready** - Multiple deployment options for any cloud platform

## 🎯 **Perfect For**

- **Portfolio websites** - Show real visitor counts
- **GitHub README files** - Dynamic visitor badges
- **Blog posts** - Track actual readership
- **Documentation pages** - Monitor page visits
- **Any web project** - Real visitor analytics

## 📦 **Installation**

```bash
npm install website-visitor-counter
```

📦 **NPM Package**: [https://www.npmjs.com/package/website-visitor-counter](https://www.npmjs.com/package/website-visitor-counter)  
🐙 **GitHub Repository**: [https://github.com/mnahsanofficial/website-visitor-counter](https://github.com/mnahsanofficial/website-visitor-counter)  
🚀 **Live Demo**: [https://my-portfolio-mnahsanofficials-projects.vercel.app/](https://my-portfolio-mnahsanofficials-projects.vercel.app/)

## 🌐 **Multi-Platform Support**

The package now supports multiple cloud platforms through a flexible adapter system:

### **Supported Platforms**
- **🚂 Railway** - Default backend (recommended for production)
- **⚡ Vercel** - Serverless functions with edge caching
- **🌐 Netlify** - Serverless functions with global CDN
- **☁️ Cloudflare** - Workers with edge computing
- **🔧 Custom** - Any custom backend with standard API

### **Platform Selection**
```javascript
import { getVisitorCounterBadge } from 'website-visitor-counter';

// Use Railway (default)
const badge1 = await getVisitorCounterBadge('my-project');

// Use Vercel
const badge2 = await getVisitorCounterBadge('my-project', { 
  platform: 'vercel' 
});

// Use custom backend
const badge3 = await getVisitorCounterBadge('my-project', { 
  platform: 'custom',
  customBaseUrl: 'https://my-backend.com' 
});
```

### **Environment Configuration**
Create a `.env` file (copy from `env.example`):
```bash
# Railway Backend
RAILWAY_API_BASE=https://your-railway-app.up.railway.app

# Vercel Backend  
VERCEL_API_BASE=https://your-vercel-app.vercel.app

# Netlify Backend
NETLIFY_API_BASE=https://your-netlify-app.netlify.app

# Cloudflare Backend
CLOUDFLARE_API_BASE=https://your-cloudflare-app.pages.dev
```

## 🚀 **Quick Start**

### **Basic Usage**
```javascript
import { getVisitorCounterBadge } from 'website-visitor-counter';

// Get a real visitor counter badge
const badgeUrl = await getVisitorCounterBadge('my-portfolio', {
  label: 'visitors',
  color: '0e75b6',
  style: 'flat'
});

console.log(badgeUrl);
// Output: https://img.shields.io/badge/visitors-3-0e75b6?style=flat
```

### **React Component**
```jsx
import React, { useState, useEffect } from 'react';
import { getVisitorCounterBadge } from 'website-visitor-counter';

function VisitorCounter() {
  const [badgeUrl, setBadgeUrl] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchBadge = async () => {
      try {
        const url = await getVisitorCounterBadge('my-portfolio', {
          label: 'visitors',
          color: '0e75b6',
          style: 'flat'
        });
        setBadgeUrl(url);
        
        // Extract count from URL for display
        const countMatch = url.match(/visitors-(\d+)/);
        if (countMatch) {
          setCount(parseInt(countMatch[1]));
        }
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };

    fetchBadge();
  }, []);

  return (
    <div>
      <p>Total Visitors: {count}</p>
      {badgeUrl && <img src={badgeUrl} alt="visitor count" />}
    </div>
  );
}
```

### **HTML Badge**
```html
<img src="https://websitevisiotrscounter-production.up.railway.app/counter?project=my-portfolio&label=visitors&color=0e75b6&style=flat" 
     alt="visitor count" />
```

### **Markdown Badge**
```markdown
![visitors](https://websitevisiotrscounter-production.up.railway.app/counter?project=my-portfolio&label=visitors&color=0e75b6&style=flat)
```

## 🛠️ **API Reference**

### **Core Functions**

#### `getVisitorCounterBadge(options)`
Generates a real visitor counter badge with actual counting.

```typescript
interface VisitorCounterOptions {
  project: string;           // Required: Your project name
  label?: string;            // Optional: Badge label (default: "visitors")
  color?: string;            // Optional: Badge color (default: "0e75b6")
  style?: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge' | 'pixel';
  base?: number;             // Optional: Starting count (default: 0)
  abbreviated?: boolean;     // Optional: Abbreviated numbers (default: false)
}
```

#### `getVisitorCount(project)`
Get the current visitor count for a project without generating a badge.

```typescript
const count = await getVisitorCount('my-portfolio');
console.log(`Total visitors: ${count}`);
```

#### `resetVisitorCount(project)`
Reset the visitor count for a project.

```typescript
await resetVisitorCount('my-portfolio');
console.log('Visitor count reset!');
```

### **Utility Functions**

#### `getSimpleVisitorBadge(project, label)`
Quick badge generation with minimal options.

```typescript
const badge = await getSimpleVisitorBadge('my-portfolio', 'readers');
```

#### `getVisitorCounterHTML(options)`
Generate HTML img tag for the visitor counter.

```typescript
const html = await getVisitorCounterHTML({
  project: 'my-portfolio',
  label: 'visitors'
});
// Output: <img src="..." alt="visitors" />
```

#### `getVisitorCounterMarkdown(options)`
Generate Markdown badge syntax.

```typescript
const markdown = await getVisitorCounterMarkdown({
  project: 'my-portfolio',
  label: 'visitors'
});
// Output: ![visitors](...)
```

#### `getVisitorCounterReact(options)`
Generate React component code.

```typescript
const reactCode = await getVisitorCounterReact({
  project: 'my-portfolio',
  label: 'visitors'
});
// Output: <img src="..." alt="visitors" />
```

### **Backend Monitoring**

#### `getBackendHealth()`
Check Railway backend health status.

```typescript
const health = await getBackendHealth();
console.log(`Backend status: ${health.status}`);
console.log(`Last check: ${health.timestamp}`);
```

#### `getBackendStats()`
Get backend statistics and project counts.

```typescript
const stats = await getBackendStats();
console.log(`Total projects: ${stats.totalProjects}`);
console.log('Project details:', stats.projects);
```

## 🎨 **Badge Styles**

| Style | Preview | Description |
|-------|---------|-------------|
| `flat` | ![flat](https://img.shields.io/badge/visitors-42-0e75b6?style=flat) | Default flat style |
| `flat-square` | ![flat-square](https://img.shields.io/badge/visitors-42-0e75b6?style=flat-square) | Square corners |
| `plastic` | ![plastic](https://img.shields.io/badge/visitors-42-0e75b6?style=plastic) | 3D plastic effect |
| `for-the-badge` | ![for-the-badge](https://img.shields.io/badge/visitors-42-0e75b6?style=for-the-badge) | GitHub-style badge |
| `pixel` | ![pixel](https://img.shields.io/badge/visitors-42-0e75b6?style=pixel) | Pixelated style |

## 🌈 **Popular Color Schemes**

| Color | Hex | Preview |
|-------|-----|---------|
| Blue | `0e75b6` | ![blue](https://img.shields.io/badge/visitors-42-0e75b6?style=flat) |
| Green | `28a745` | ![green](https://img.shields.io/badge/visitors-42-28a745?style=flat) |
| Red | `dc3545` | ![red](https://img.shields.io/badge/visitors-42-dc3545?style=flat) |
| Orange | `fd7e14` | ![orange](https://img.shields.io/badge/visitors-42-fd7e14?style=flat) |
| Purple | `6f42c1` | ![purple](https://img.shields.io/badge/visitors-42-6f42c1?style=flat) |
| Gray | `6c757d` | ![gray](https://img.shields.io/badge/visitors-42-6c757d?style=flat) |

## 🔒 **Privacy & Security**

- **Enhanced Rate Limiting**: Configurable rate limiting per project (10 requests/minute by default)
- **Request Fingerprinting**: Advanced request validation for security
- **No Personal Data**: Only anonymous visitor counts are stored
- **CORS Safe**: Works safely in browsers with proper CORS headers
- **Platform Security**: Each cloud platform provides its own security features
- **Environment Variables**: API keys and URLs stored securely in environment files

## 📊 **How It Works**

1. **Visitor visits** your website with the badge
2. **Platform adapter** routes request to your chosen cloud backend
3. **Rate limiting** checks prevent abuse and spam
4. **Request fingerprinting** validates legitimate requests
5. **Count incremented** for new visitors with configurable tracking
6. **Badge generated** with real count using shields.io
7. **Data stored** in your chosen cloud platform (persistent across all devices)

## 🚀 **Multi-Platform Backends**

Your visitor counter can be powered by **any cloud platform** through our adapter system:

### **Railway (Default)**
- ✅ **Counts visitors across all devices** (Mac, iOS, Android, etc.)
- ✅ **Provides 99.9% uptime** with automatic scaling
- ✅ **Stores data securely** with enhanced security features
- ✅ **Offers real-time statistics** and health monitoring

### **Vercel**
- ⚡ **Serverless functions** with edge caching
- 🌍 **Global CDN** for fast badge delivery
- 🔄 **Automatic scaling** based on demand

### **Netlify**
- 🌐 **Serverless functions** with global CDN
- 🚀 **Easy deployment** from Git repositories
- 📊 **Built-in analytics** and monitoring

### **Cloudflare**
- ☁️ **Workers** with edge computing
- 🌍 **Global edge network** for minimal latency
- 💰 **Pay-per-use** pricing model

**Default Backend URL**: `https://websitevisiotrscounter-production.up.railway.app`

## 📈 **Version Comparison**

| Feature | v1.0.0 | v2.0.0 | v2.1.0 | v3.0.0 | v3.1.0 |
|---------|---------|---------|---------|---------|---------|
| **Database** | ✅ Supabase | ❌ None | ❌ Local Storage | ✅ Railway Backend | ✅ Multi-Platform |
| **Real Counting** | ✅ Yes | ❌ Mock | ✅ Yes | ✅ Yes | ✅ Yes |
| **Cross-Device** | ✅ Yes | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **Privacy** | ✅ IP Hashing | ❌ None | ✅ IP Hashing | ✅ IP Hashing | ✅ Enhanced Security |
| **Badge Styles** | ❌ Basic | ✅ All Styles | ✅ All Styles | ✅ All Styles | ✅ All Styles |
| **Production Ready** | ❌ Setup Required | ❌ Mock Only | ❌ Local Only | ✅ Hosted | ✅ Multi-Platform |
| **Architecture** | Database | Mock | Local Storage | Cloud Backend | **Platform Agnostic** |

## 💻 **Examples**

### **Node.js Script (v3.1.0)**
```javascript
import { 
  getVisitorCounterBadge, 
  getVisitorCount, 
  getBackendHealth,
  createPlatformAdapter 
} from 'website-visitor-counter';

async function main() {
  try {
    // Check backend health
    const isHealthy = await getBackendHealth();
    console.log(`Backend healthy: ${isHealthy}`);
    
    // Get visitor count
    const count = await getVisitorCount('my-website');
    console.log(`Current visitors: ${count}`);
    
    // Generate badge with Railway (default)
    const badge1 = await getVisitorCounterBadge('my-website', {
      label: 'readers',
      color: '28a745',
      style: 'for-the-badge'
    });
    console.log(`Railway badge: ${badge1}`);
    
    // Generate badge with Vercel
    const badge2 = await getVisitorCounterBadge('my-website', {
      label: 'readers',
      color: '28a745',
      style: 'for-the-badge',
      platform: 'vercel'
    });
    console.log(`Vercel badge: ${badge2}`);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
```

### **Node.js Script (v3.0.0)**
```javascript
import { getVisitorCounterBadge, getVisitorCount } from 'website-visitor-counter';

async function main() {
  try {
    // Get visitor count
    const count = await getVisitorCount('my-website');
    console.log(`Current visitors: ${count}`);
    
    // Generate badge
    const badge = await getVisitorCounterBadge('my-website', {
      label: 'readers',
      color: '28a745',
      style: 'for-the-badge'
    });
    console.log(`Badge URL: ${badge}`);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
```

### **Browser Usage**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Visitor Counter Demo</title>
</head>
<body>
    <h1>My Portfolio</h1>
    <div id="visitor-count">Loading...</div>
    <div id="visitor-badge"></div>

    <script type="module">
        import { getVisitorCounterBadge, getVisitorCount } from 'https://unpkg.com/website-visitor-counter@3.1.0/dist/index.js';
        
        async function updateVisitorCount() {
            try {
                const count = await getVisitorCount('my-portfolio');
                document.getElementById('visitor-count').textContent = `Total Visitors: ${count}`;
                
                const badge = await getVisitorCounterBadge('my-portfolio', {
                    label: 'visitors',
                    color: '0e75b6',
                    style: 'flat'
                });
                
                document.getElementById('visitor-badge').innerHTML = `<img src="${badge}" alt="visitor count" />`;
            } catch (error) {
                console.error('Error:', error);
            }
        }
        
        updateVisitorCount();
    </script>
</body>
</html>
```

## 🆘 **Support**

- 📦 [NPM Package](https://www.npmjs.com/package/website-visitor-counter)
- 🐙 [GitHub Repository](https://github.com/mnahsanofficial/website-visitor-counter)
- 📚 [Documentation](https://github.com/mnahsanofficial/website-visitor-counter#readme)
- 🚀 [Railway Backend](https://websitevisiotrscounter-production.up.railway.app/health)
- 🎯 [Live Demo](https://my-portfolio-mnahsanofficials-projects.vercel.app/)

## 👨‍💻 **Developer**

**Muhammad Nazmul Ahsan**  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/mn-ahsan/)

## 🏢 **Company**

**TrioTrix Tech Solutions**  
🔗 [Company LinkedIn](https://www.linkedin.com/company/triotrix-tech-solutions/)  
🌐 [Website](https://triotrix-website.vercel.app/)

---

## 📝 **Changelog**

### **v3.0.0** - 🎉 MAJOR RELEASE: Railway Backend Integration
- 🚀 **NEW**: Complete architecture rewrite from local storage to cloud backend
- 🌐 **NEW**: Railway backend for real cross-device counting
- 🌐 **NEW**: Cross-device accuracy (same count on all devices)
- 📊 **NEW**: Backend health monitoring and statistics
- 🔒 **IMPROVED**: Enhanced privacy with server-side IP hashing
- 🎯 **IMPROVED**: Production-ready with 99.9% uptime
- 🔄 **NEW**: Automatic fallback for offline scenarios
- 🎨 **NEW**: Major version bump reflecting significant architectural changes

### **v2.1.0** - Real Counting System
- ✅ **NEW**: Real visitor counting (not just mock badges)
- 🔒 **NEW**: Privacy-focused IP hashing
- 📱 **NEW**: Cross-platform storage (localStorage + in-memory)
- 🎨 **NEW**: Multiple badge styles and colors
- 🔄 **NEW**: Reset functionality

### **v2.0.0** - Badge-Based System
- 🎨 **NEW**: Badge generation system
- 🌈 **NEW**: Multiple styles and color schemes
- 📱 **NEW**: HTML, Markdown, and React outputs
- 🚀 **NEW**: No database setup required

### **v1.0.0** - Supabase Integration
- 🗄️ **NEW**: Supabase database integration
- 🔒 **NEW**: IP hashing for privacy
- 📊 **NEW**: Real visitor counting
- 🌐 **NEW**: CORS-safe for browsers

---

*Empowering Tomorrow's Digital World* 🚀
