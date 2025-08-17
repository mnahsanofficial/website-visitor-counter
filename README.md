# Website Visitor Counter v2.0.0

A badge-based website visitor counter - **no database setup required!** Works exactly like [GitHub profile views](https://komarev.com/ghpvc/?username=mnahsanofficial&label=Profile%20views&color=0e75b6&style=flat) but for any website or project.

## 🌟 **What's New in v2.0.0?**

- ✅ **No Database Setup** - Just generate and use!
- ✅ **Badge-Based** - Works like komarev.com and shields.io
- ✅ **Multiple Formats** - HTML, Markdown, React, or direct URL
- ✅ **Customizable** - Colors, labels, styles, and logos
- ✅ **Privacy Focused** - No personal data collected

## 📦 **Installation**

```bash
npm install website-visitor-counter
```

📦 **NPM Package**: [https://www.npmjs.com/package/website-visitor-counter](https://www.npmjs.com/package/website-visitor-counter)  
🐙 **GitHub Repository**: [https://github.com/mnahsanofficial/website-visitor-counter](https://github.com/mnahsanofficial/website-visitor-counter)

## 🚀 **Quick Start**

### **Simple Badge (Most Common)**
```javascript
import { getSimpleVisitorBadge } from 'website-visitor-counter';

const badgeUrl = await getSimpleVisitorBadge('my-website');
console.log(badgeUrl);
// Output: https://your-service.com/counter?project=my-website&label=visitors&color=0e75b6&style=flat
```

### **Customized Badge**
```javascript
import { getVisitorCounterBadge } from 'website-visitor-counter';

const badgeUrl = await getVisitorCounterBadge({
  project: 'my-blog',
  label: 'readers',
  color: 'ff6b6b',
  style: 'for-the-badge',
  logo: '📚'
});
```

## 🎨 **Usage Examples**

### **1. HTML Website**
```javascript
import { getVisitorCounterHTML } from 'website-visitor-counter';

const htmlTag = await getVisitorCounterHTML({
  project: 'my-portfolio',
  label: 'visitors',
  color: '00d4aa'
});

// Output: <img src="https://..." alt="visitors count for my-portfolio" />
document.body.innerHTML += htmlTag;
```

### **2. Markdown/README**
```javascript
import { getVisitorCounterMarkdown } from 'website-visitor-counter';

const markdownBadge = await getVisitorCounterMarkdown({
  project: 'my-project',
  label: 'views',
  color: '6c5ce7'
});

// Output: ![views count for my-project](https://...)
```

### **3. React Component**
```javascript
import { getVisitorCounterReact } from 'website-visitor-counter';

const reactCode = await getVisitorCounterReact({
  project: 'my-react-app',
  label: 'users',
  color: 'fd79a8'
});

// Output: Complete React component code
```

### **4. Direct Badge URL**
```javascript
import { getVisitorCounterBadge } from 'website-visitor-counter';

const badgeUrl = await getVisitorCounterBadge({
  project: 'my-website',
  label: 'visitors',
  color: '0e75b6',
  style: 'flat'
});

// Use directly in any img src
<img src={badgeUrl} alt="visitor count" />
```

## ⚙️ **Configuration Options**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `project` | `string` | **Required** | Your project/website name |
| `label` | `string` | `"visitors"` | Badge label text |
| `color` | `string` | `"0e75b6"` | Badge color (hex without #) |
| `style` | `string` | `"flat"` | Badge style: `flat`, `plastic`, `for-the-badge`, `social` |
| `logo` | `string` | `""` | Logo emoji or icon |
| `logoColor` | `string` | `"white"` | Logo color |

## 🎭 **Badge Styles**

### **Flat Style** (Default)
![visitors-0-0e75b6](https://img.shields.io/badge/visitors-0-0e75b6?style=flat)

### **Plastic Style**
![visitors-0-0e75b6](https://img.shields.io/badge/visitors-0-0e75b6?style=plastic)

### **For The Badge**
![visitors-0-0e75b6](https://img.shields.io/badge/visitors-0-0e75b6?style=for-the-badge)

### **Social Style**
![visitors-0-0e75b6](https://img.shields.io/badge/visitors-0-0e75b6?style=social)

## 🌈 **Popular Color Schemes**

- **Blue**: `0e75b6` (GitHub style)
- **Red**: `ff6b6b` (Fire style)
- **Green**: `00d4aa` (Success style)
- **Purple**: `6c5ce7` (Royal style)
- **Pink**: `fd79a8` (Rose style)
- **Yellow**: `fdcb6e` (Sunshine style)

## 📱 **Browser & Node.js Compatible**

This package works in all modern browsers and Node.js environments that support:
- ES2020 features
- Async/await
- Fetch API (browsers) or Node.js built-ins

## 🔒 **Privacy Features**

- **No Personal Data**: Only stores project names and visit counts
- **Anonymous Counting**: No IP addresses or user information collected
- **Secure**: All data is anonymized and aggregated

## 🚀 **Live Demo**

Try the interactive demo to see all features in action:
- **Node.js Demo**: `examples/demo-v2.js`
- **Browser Demo**: `examples/browser-demo-v2.html`

## 🔗 **API Reference**

### `getVisitorCounterBadge(options)`
Generates a visitor counter badge URL with custom options.

### `getSimpleVisitorBadge(project)`
Quick way to get a basic visitor badge for your project.

### `getVisitorCounterHTML(options)`
Generates an HTML img tag for the visitor counter.

### `getVisitorCounterMarkdown(options)`
Generates a Markdown badge for README files.

### `getVisitorCounterReact(options)`
Generates a complete React component for the visitor counter.

## 🆚 **Version Comparison**

| Feature | v1.0.0 | v2.0.0 |
|---------|--------|---------|
| Database Setup | Required (Supabase) | ❌ **None!** |
| Ease of Use | Complex | 🚀 **Super Easy** |
| Badge Format | ❌ No | ✅ **Yes** |
| Multiple Styles | ❌ No | ✅ **Yes** |
| HTML Output | ❌ No | ✅ **Yes** |
| Markdown Output | ❌ No | ✅ **Yes** |
| React Support | ❌ No | ✅ **Yes** |
| Customization | Limited | 🎨 **Full** |

## 🎯 **Perfect For**

- **GitHub README files**
- **Personal websites**
- **Blog posts**
- **Portfolio sites**
- **Documentation pages**
- **Any web project**

## 🚀 **Getting Started**

1. **Install**: `npm install website-visitor-counter`
2. **Generate**: Use any of the functions above
3. **Display**: Add the badge to your website/README
4. **Done**: No more setup required!

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 **License**

MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 **Links**

- 📦 [NPM Package](https://www.npmjs.com/package/website-visitor-counter)
- 🐙 [GitHub Repository](https://github.com/mnahsanofficial/website-visitor-counter)
- 📚 [Documentation](https://github.com/mnahsanofficial/website-visitor-counter#readme)

## 🆘 **Support**

If you encounter any issues or have questions, please:
1. Check the [documentation](https://github.com/mnahsanofficial/website-visitor-counter#readme)
2. Open an issue on [GitHub](https://github.com/mnahsanofficial/website-visitor-counter/issues)
3. Try the live demos in the `examples/` folder

## 📝 **Changelog**

### v2.0.0
- 🎉 **Complete redesign** - Badge-based system like komarev.com
- 🚀 **No database setup** required
- 🎨 **Multiple badge styles** and customization options
- 📱 **Multiple output formats** (HTML, Markdown, React, URL)
- 🔒 **Enhanced privacy** and security

### v1.0.0
- Initial release with Supabase integration
- Database-based visitor counting
- IP hashing for privacy
