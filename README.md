# Website Visitor Counter v3.0.0 🚀

A **real visitor counting system** that works with **accurate cross-device counting** powered by Railway backend.

## 🎉 **LIVE DEMO: [View My Portfolio](https://my-portfolio-mnahsanofficials-projects.vercel.app/)**

See the visitor counter in action on my live portfolio website!

## ✨ **What's New in v3.0.0 - MAJOR RELEASE!**

- 🚀 **Railway Backend Integration** - Real server-side counting, no more local storage
- 🌐 **Cross-Device Accuracy** - Same count on Mac, iOS, Android, and all devices
- 🔒 **Privacy-Focused** - SHA-256 IP hashing for visitor privacy
- 📊 **Real-Time Statistics** - Backend health monitoring and project stats
- 🎯 **Production Ready** - Hosted on Railway with 99.9% uptime
- 🔄 **Automatic Fallback** - Graceful degradation if backend is unavailable
- 🎨 **Major Architecture Change** - Complete rewrite from local storage to cloud backend

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

## 🚀 **Quick Start**

### **Basic Usage**
```javascript
import { getVisitorCounterBadge } from 'website-visitor-counter';

// Get a real visitor counter badge
const badgeUrl = await getVisitorCounterBadge({
  project: 'my-portfolio',
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
        const url = await getVisitorCounterBadge({
          project: 'my-portfolio',
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

- **IP Hashing**: All visitor IPs are hashed using SHA-256
- **No Personal Data**: Only stores hashed IPs and project identifiers
- **24-Hour Tracking**: Prevents duplicate counts from same IP within 24 hours
- **Rate Limiting**: Prevents abuse and spam
- **CORS Safe**: Works in browsers and Node.js environments

## 📊 **How It Works**

1. **Visitor visits** your website with the badge
2. **Real IP detected** from request headers
3. **IP hashed** using SHA-256 for privacy
4. **Count incremented** only for new visitors (24-hour tracking)
5. **Badge generated** with real count using shields.io
6. **Data stored** in Railway backend (persistent across all devices)

## 🚀 **Railway Backend**

Your visitor counter is powered by a **real Railway backend** that:
- ✅ **Counts visitors across all devices** (Mac, iOS, Android, etc.)
- ✅ **Provides 99.9% uptime** with automatic scaling
- ✅ **Stores data securely** with privacy-focused IP hashing
- ✅ **Offers real-time statistics** and health monitoring
- ✅ **Handles high traffic** with rate limiting and optimization

**Backend URL**: `https://websitevisiotrscounter-production.up.railway.app`

## 📈 **Version Comparison**

| Feature | v1.0.0 | v2.0.0 | v2.1.0 | v3.0.0 |
|---------|---------|---------|---------|---------|
| **Database** | ✅ Supabase | ❌ None | ❌ Local Storage | ✅ Railway Backend |
| **Real Counting** | ✅ Yes | ❌ Mock | ✅ Yes | ✅ Yes |
| **Cross-Device** | ✅ Yes | ❌ No | ❌ No | ✅ Yes |
| **Privacy** | ✅ IP Hashing | ❌ None | ✅ IP Hashing | ✅ IP Hashing |
| **Badge Styles** | ❌ Basic | ✅ All Styles | ✅ All Styles | ✅ All Styles |
| **Production Ready** | ❌ Setup Required | ❌ Mock Only | ❌ Local Only | ✅ Hosted |
| **Architecture** | Database | Mock | Local Storage | **Cloud Backend** |

## 💻 **Examples**

### **Node.js Script**
```javascript
import { getVisitorCounterBadge, getVisitorCount } from 'website-visitor-counter';

async function main() {
  try {
    // Get visitor count
    const count = await getVisitorCount('my-website');
    console.log(`Current visitors: ${count}`);
    
    // Generate badge
    const badge = await getVisitorCounterBadge({
      project: 'my-website',
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
        import { getVisitorCounterBadge, getVisitorCount } from 'https://unpkg.com/website-visitor-counter@3.0.0/dist/index.js';
        
        async function updateVisitorCount() {
            try {
                const count = await getVisitorCount('my-portfolio');
                document.getElementById('visitor-count').textContent = `Total Visitors: ${count}`;
                
                const badge = await getVisitorCounterBadge({
                    project: 'my-portfolio',
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
