/**
 * Website Visitor Counter v3.1.0 Demo
 * Multi-platform cloud adapter system demonstration
 */

import { 
  getVisitorCounterBadge, 
  getVisitorCount, 
  resetVisitorCount,
  getBackendHealth,
  getBackendStats,
  createPlatformAdapter,
  RailwayAdapter,
  VercelAdapter,
  NetlifyAdapter,
  CloudflareAdapter,
  getVisitorCounterHTML,
  getVisitorCounterMarkdown,
  getVisitorCounterReact
} from '../dist/index.js';

async function demoMultiPlatform() {
  console.log('🚀 Website Visitor Counter v3.1.0 - Multi-Platform Demo\n');

  try {
    // 1. Check backend health
    console.log('1️⃣ Checking backend health...');
    const isHealthy = await getBackendHealth();
    console.log(`   ✅ Backend healthy: ${isHealthy}\n`);

    // 2. Get backend statistics
    console.log('2️⃣ Getting backend statistics...');
    const stats = await getBackendStats();
    console.log(`   📊 Backend stats:`, stats);
    console.log('');

    // 3. Test different platforms
    const project = 'demo-v3-1';
    
    console.log('3️⃣ Testing multi-platform support...');
    
    // Railway (default)
    console.log('   🚂 Testing Railway adapter...');
    const railwayBadge = await getVisitorCounterBadge(project, {
      label: 'visitors',
      color: '0e75b6',
      style: 'flat',
      platform: 'railway'
    });
    console.log(`   ✅ Railway badge: ${railwayBadge}`);
    
    // Vercel
    console.log('   ⚡ Testing Vercel adapter...');
    try {
      const vercelBadge = await getVisitorCounterBadge(project, {
        label: 'visitors',
        color: '000000',
        style: 'flat',
        platform: 'vercel'
      });
      console.log(`   ✅ Vercel badge: ${vercelBadge}`);
    } catch (error) {
      console.log(`   ⚠️  Vercel not configured: ${error.message}`);
    }
    
    // Netlify
    console.log('   🌐 Testing Netlify adapter...');
    try {
      const netlifyBadge = await getVisitorCounterBadge(project, {
        label: 'visitors',
        color: '00ad9f',
        style: 'flat',
        platform: 'netlify'
      });
      console.log(`   ✅ Netlify badge: ${netlifyBadge}`);
    } catch (error) {
      console.log(`   ⚠️  Netlify not configured: ${error.message}`);
    }
    
    // Cloudflare
    console.log('   ☁️ Testing Cloudflare adapter...');
    try {
      const cloudflareBadge = await getVisitorCounterBadge(project, {
        label: 'visitors',
        color: 'f38020',
        style: 'flat',
        platform: 'cloudflare'
      });
      console.log(`   ✅ Cloudflare badge: ${cloudflareBadge}`);
    } catch (error) {
      console.log(`   ⚠️  Cloudflare not configured: ${error.message}`);
    }
    
    console.log('');

    // 4. Test visitor counting
    console.log('4️⃣ Testing visitor counting...');
    const count = await getVisitorCount(project);
    console.log(`   👥 Current visitor count: ${count}`);
    
    // 5. Test badge generation with different styles
    console.log('\n5️⃣ Testing different badge styles...');
    
    const styles = ['flat', 'flat-square', 'for-the-badge', 'plastic', 'social'];
    const colors = ['0e75b6', '28a745', 'd73a4a', 'f1e05a', '6f42c1'];
    
    for (let i = 0; i < Math.min(styles.length, colors.length); i++) {
      const badge = await getVisitorCounterBadge(project, {
        label: 'visitors',
        color: colors[i],
        style: styles[i]
      });
      console.log(`   🎨 ${styles[i]}: ${badge}`);
    }
    
    console.log('');

    // 6. Test platform adapters directly
    console.log('6️⃣ Testing platform adapters directly...');
    
    const railwayAdapter = new RailwayAdapter();
    console.log(`   🚂 Railway adapter: ${railwayAdapter.name}`);
    console.log(`   🔗 Counter URL: ${railwayAdapter.getCounterUrl(project)}`);
    
    const vercelAdapter = new VercelAdapter();
    console.log(`   ⚡ Vercel adapter: ${vercelAdapter.name}`);
    console.log(`   🔗 Counter URL: ${vercelAdapter.getCounterUrl(project)}`);
    
    const netlifyAdapter = new NetlifyAdapter();
    console.log(`   🌐 Netlify adapter: ${netlifyAdapter.name}`);
    console.log(`   🔗 Counter URL: ${netlifyAdapter.getCounterUrl(project)}`);
    
    const cloudflareAdapter = new CloudflareAdapter();
    console.log(`   ☁️ Cloudflare adapter: ${cloudflareAdapter.name}`);
    console.log(`   🔗 Counter URL: ${cloudflareAdapter.getCounterUrl(project)}`);
    
    console.log('');

    // 7. Test utility functions
    console.log('7️⃣ Testing utility functions...');
    
    const htmlBadge = getVisitorCounterHTML(project, { color: '0e75b6' });
    console.log(`   🖥️  HTML badge: ${htmlBadge}`);
    
    const markdownBadge = getVisitorCounterMarkdown(project, { color: '28a745' });
    console.log(`   📝 Markdown badge: ${markdownBadge}`);
    
    const reactBadge = getVisitorCounterReact(project, { color: 'd73a4a' });
    console.log(`   ⚛️  React badge: ${reactBadge}`);
    
    console.log('');

    // 8. Test rate limiting
    console.log('8️⃣ Testing rate limiting...');
    
    // Try to make multiple requests quickly
    const promises = [];
    for (let i = 0; i < 15; i++) {
      promises.push(getVisitorCount(project));
    }
    
    try {
      const results = await Promise.allSettled(promises);
      const successful = results.filter(r => r.status === 'fulfilled').length;
      const failed = results.filter(r => r.status === 'rejected').length;
      
      console.log(`   📊 Rate limit test: ${successful} successful, ${failed} rate limited`);
    } catch (error) {
      console.log(`   ⚠️  Rate limit test error: ${error.message}`);
    }
    
    console.log('\n🎉 Demo completed successfully!');
    console.log('\n💡 Tips:');
    console.log('   • Configure environment variables for different platforms');
    console.log('   • Use .env file to store API URLs securely');
    console.log('   • Switch platforms easily with the platform option');
    console.log('   • Custom backends supported with customBaseUrl option');

  } catch (error) {
    console.error('❌ Demo failed:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

// Run the demo
demoMultiPlatform();
