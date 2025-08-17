# Visitor Counter Backend Service

A real visitor counting backend service that works exactly like [komarev.com](https://komarev.com/ghpvc/?username=mnahsanofficial&label=Profile%20views&color=0e75b6&style=flat) but for any website or project.

## 🚀 **Features**

- ✅ **Real Visitor Counting** - Actually counts unique visitors across all devices
- ✅ **Privacy-Focused** - SHA-256 IP hashing for visitor privacy
- ✅ **Rate Limiting** - Prevents abuse and spam
- ✅ **Security** - Helmet.js security headers and CORS protection
- ✅ **Multiple Projects** - Support for multiple websites/projects
- ✅ **Badge Generation** - Generates shields.io badges with real counts
- ✅ **Easy Deployment** - Ready for Vercel, Netlify, or any Node.js hosting

## 📦 **Installation**

```bash
cd backend
npm install
```

## 🏃‍♂️ **Local Development**

```bash
npm run dev
```

The server will start on `http://localhost:3001`

## 🌐 **API Endpoints**

### **Main Counter Endpoint**
```
GET /counter?project=your-project&label=visitors&color=0e75b6&style=flat&base=0
```

**Parameters:**
- `project` (required): Your project/website name
- `label` (optional): Badge label (default: "visitors")
- `color` (optional): Badge color (default: "0e75b6")
- `style` (optional): Badge style (default: "flat")
- `base` (optional): Starting count for migration (default: 0)

**Response:**
```json
{
  "success": true,
  "project": "your-project",
  "count": 3,
  "uniqueVisitors": 3,
  "badgeUrl": "https://img.shields.io/badge/visitors-3-0e75b6?style=flat",
  "isNewVisitor": true,
  "timestamp": "2025-01-16T18:30:00.000Z"
}
```

### **Get Count (Read Only)**
```
GET /count/your-project
```

### **Reset Count**
```
POST /reset/your-project
```

### **Health Check**
```
GET /health
```

### **Statistics**
```
GET /stats
```

## 🚀 **Deployment**

### **Option 1: Vercel (Recommended)**

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
cd backend
vercel --prod
```

3. **Your API will be available at:**
```
https://your-project-name.vercel.app/counter?project=your-website
```

### **Option 2: Netlify Functions**

1. **Create `netlify.toml`:**
```toml
[build]
  functions = "functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

2. **Deploy to Netlify**

### **Option 3: Your Own Server**

1. **Set environment variables:**
```bash
export PORT=3001
export NODE_ENV=production
```

2. **Start the server:**
```bash
npm start
```

## 💻 **Usage Examples**

### **HTML Badge**
```html
<img src="https://your-api.vercel.app/counter?project=my-portfolio&label=visitors&color=0e75b6&style=flat" 
     alt="visitor count" />
```

### **Markdown Badge**
```markdown
![visitors](https://your-api.vercel.app/counter?project=my-portfolio&label=visitors&color=0e75b6&style=flat)
```

### **React Component**
```jsx
import React, { useState, useEffect } from 'react';

function VisitorCounter() {
  const [badgeUrl, setBadgeUrl] = useState('');
  
  useEffect(() => {
    const url = `https://your-api.vercel.app/counter?project=my-portfolio&label=visitors&color=0e75b6&style=flat`;
    setBadgeUrl(url);
  }, []);
  
  return <img src={badgeUrl} alt="visitor count" />;
}
```

### **JavaScript Fetch**
```javascript
async function getVisitorCount() {
  const response = await fetch('https://your-api.vercel.app/counter?project=my-website');
  const data = await response.json();
  
  console.log(`Total visitors: ${data.count}`);
  console.log(`Badge URL: ${data.badgeUrl}`);
  
  return data;
}
```

## 🔒 **Privacy & Security**

- **IP Hashing**: All visitor IPs are hashed using SHA-256
- **No Personal Data**: Only stores hashed IPs and project identifiers
- **Rate Limiting**: Prevents abuse and spam
- **Security Headers**: Helmet.js provides security headers
- **CORS Protection**: Configurable cross-origin requests

## 📊 **How It Works**

1. **Visitor visits** your website with the badge
2. **Real IP detected** from request headers
3. **IP hashed** using SHA-256 for privacy
4. **Count incremented** only for new visitors (24-hour tracking)
5. **Badge generated** with real count using shields.io
6. **Data stored** in memory (or Redis/database in production)

## 🎯 **Perfect For**

- **Portfolio websites**
- **GitHub README files**
- **Blog posts**
- **Documentation pages**
- **Any web project**

## 🔧 **Production Considerations**

For production use, consider:

1. **Database Storage**: Replace in-memory cache with Redis or PostgreSQL
2. **Load Balancing**: Use multiple instances behind a load balancer
3. **Monitoring**: Add logging and monitoring (e.g., Sentry, LogRocket)
4. **CDN**: Use Cloudflare or similar for global distribution

## 📝 **Environment Variables**

```bash
PORT=3001                    # Server port
NODE_ENV=production         # Environment
RATE_LIMIT_POINTS=100       # Rate limit requests
RATE_LIMIT_DURATION=60      # Rate limit duration (seconds)
```

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 **License**

MIT License - see the LICENSE file for details.

## 👨‍💻 **Developer**

**Muhammad Nazmul Ahsan**  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/mn-ahsan/)

## 🏢 **Company**

**TrioTrix Tech Solutions**  
🔗 [Company LinkedIn](https://www.linkedin.com/company/triotrix-tech-solutions/)  
🌐 [Website](https://triotrix-website.vercel.app/)

---

*Empowering Tomorrow's Digital World* 🚀
