#!/bin/bash

echo "🚀 Visitor Counter Backend Deployment Script"
echo "============================================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
    echo "✅ Vercel CLI installed!"
else
    echo "✅ Vercel CLI found!"
fi

echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the backend directory"
    echo "   cd backend && ./deploy.sh"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""

echo "🔐 Checking Vercel login status..."
if ! vercel whoami &> /dev/null; then
    echo "❌ Not logged in to Vercel. Please login first:"
    echo "   vercel login"
    exit 1
fi

echo "✅ Logged in to Vercel!"

echo ""

echo "🚀 Deploying to Vercel..."
echo "   This will deploy your visitor counter backend to production."
echo "   Follow the prompts below:"
echo ""

# Deploy to Vercel
vercel --prod

echo ""
echo "🎉 Deployment completed!"
echo ""
echo "📊 Your API endpoints are now available at:"
echo "   - Counter: https://your-project.vercel.app/counter?project=your-project"
echo "   - Health: https://your-project.vercel.app/health"
echo "   - Stats: https://your-project.vercel.app/stats"
echo ""
echo "💡 Update your portfolio to use the new API URL!"
echo "   Replace the old visitor counter with the new backend URL."
echo ""
echo "🔗 Check DEPLOYMENT.md for detailed usage instructions."
