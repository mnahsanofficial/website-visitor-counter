#!/bin/bash

echo "🚀 Visitor Counter Backend - Railway Deployment"
echo "==============================================="
echo ""

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Installing..."
    npm install -g @railway/cli
    echo "✅ Railway CLI installed!"
else
    echo "✅ Railway CLI found!"
fi

echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the backend directory"
    echo "   cd backend && ./deploy-railway.sh"
    exit 1
fi

echo "🔐 Checking Railway login status..."
if ! railway whoami &> /dev/null; then
    echo "❌ Not logged in to Railway. Please login first:"
    echo "   railway login"
    exit 1
fi

echo "✅ Logged in to Railway!"

echo ""

echo "🚀 Deploying to Railway..."
echo "   This will deploy your visitor counter backend to Railway."
echo "   Follow the prompts below:"
echo ""

# Deploy to Railway
railway up

echo ""
echo "🎉 Deployment completed!"
echo ""
echo "📊 Your API endpoints are now available at:"
echo "   - Counter: https://your-project.railway.app/counter?project=your-project"
echo "   - Health: https://your-project.railway.app/health"
echo "   - Stats: https://your-project.railway.app/stats"
echo ""
echo "💡 Update your portfolio to use the new Railway API URL!"
echo "   Replace the old visitor counter with the new backend URL."
echo ""
echo "🔗 Check the Railway dashboard for your exact URL."
