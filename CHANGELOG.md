# Changelog

All notable changes to the Website Visitor Counter package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.1.0] - 2025-08-17

### Added
- **Multi-platform support** with cloud adapters for Railway, Vercel, Netlify, and Cloudflare
- **Platform-agnostic architecture** - no more vendor lock-in
- **Environment-based configuration** - move API URLs to environment variables
- **Improved rate limiting** with configurable thresholds
- **Better error handling** and fallback mechanisms
- **Request fingerprinting** for enhanced security
- **Platform factory pattern** for easy extension

### Changed
- **Breaking change**: Function signatures updated to support platform selection
- **Architecture rewrite**: Moved from hardcoded Railway URLs to adapter pattern
- **Security improvements**: Replaced weak IP hashing with proper rate limiting
- **Scalability**: Added support for high-traffic scenarios

### Deprecated
- Hardcoded Railway API URLs
- Direct platform coupling

### Removed
- Hardcoded API keys and URLs from source code
- Weak IP hashing implementation

### Fixed
- Security vulnerabilities in IP handling
- Platform lock-in issues
- Scalability concerns for high-traffic websites

## [3.0.0] - 2025-08-17

### Added
- **Real visitor counting system** with Railway backend
- **Cross-device accuracy** - same count on all devices
- **Live demo** implementation on portfolio website
- **Production-ready backend** with 99.9% uptime

### Changed
- **Major architectural change** from local storage to cloud backend
- **Complete rewrite** of counting logic
- **Backend integration** for accurate visitor tracking

### Removed
- Local storage-based counting
- Mock visitor numbers
- Device-specific limitations

## [2.2.0] - 2025-08-17

### Added
- **Railway backend integration** for real counting
- **Cross-device visitor tracking** 
- **Backend monitoring** functions
- **Production deployment** on Railway

### Changed
- **Backend architecture** implementation
- **Real-time counting** instead of local storage

## [2.1.1] - 2025-08-17

### Changed
- **Author information** updated to "Muhammad Nazmul Ahsan"

## [2.1.0] - 2025-08-17

### Added
- **Real visitor counting** with IP hashing
- **Local storage persistence** for visitor tracking
- **Accurate count display** on shields.io badges

### Changed
- **Counting mechanism** from mock to real implementation
- **IP privacy** with SHA-256 hashing

## [2.0.0] - 22025-08-17

### Added
- **Badge-based visitor counter** system
- **No database setup** required
- **Multiple badge styles** and color schemes
- **GitHub profile-style** visitor counting

### Changed
- **Architecture** from Supabase to badge-based system
- **User experience** simplified to plug-and-play

### Removed
- **Supabase dependency** and setup requirements
- **Database configuration** complexity

## [1.0.1] - 2025-08-16

### Added
- **GitHub repository** links
- **NPM package** links

### Changed
- **Repository URLs** updated to mnahsanofficial/website-visitor-counter

## [1.0.0] - 2025-08-16

### Added
- **Initial release** of Website Visitor Counter
- **Supabase integration** for visitor storage
- **IP hashing** for privacy protection
- **TypeScript support** with full type definitions
- **Cross-platform compatibility** (Node.js and Browser)
- **Comprehensive documentation** and examples

### Features
- `getVisitorCount()` function for fetching visitor counts
- IP address detection and SHA-256 hashing
- Supabase database integration
- Error handling and CORS safety
- Minimal dependencies for easy integration
