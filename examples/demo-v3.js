// Demo script for Website Visitor Counter v3.0.0 with Railway Backend
import { 
  getVisitorCounterBadge, 
  getSimpleVisitorBadge, 
  getVisitorCounterHTML, 
  getVisitorCounterMarkdown, 
  getVisitorCounterReact,
  getVisitorCount,
  resetVisitorCount,
  getBackendHealth,
  getBackendStats
} from '../dist/index.js';

async function demo() {
  console.log('🚀 Website Visitor Counter v3.0.0 - Railway Backend Demo');
  console.log('========================================================');
  console.log('🎉 MAJOR RELEASE: Complete architecture rewrite!');
  console.log('🌐 LIVE DEMO: https://my-portfolio-mnahsanofficials-projects.vercel.app/');
  console.log('');

  try {
    // Test 1: Backend Health Check
    console.log('📊 Test 1: Backend Health Check');
    const health = await getBackendHealth();
    console.log('✅ Backend Status:', health.status);
    console.log('✅ Last Check:', health.timestamp);
    console.log('');

    // Test 2: Get Visitor Count
    console.log('🔢 Test 2: Get Current Visitor Count');
    const currentCount = await getVisitorCount('demo-project');
    console.log('✅ Current Count:', currentCount);
    console.log('');

    // Test 3: Generate Badge (increments count)
    console.log('🎨 Test 3: Generate Visitor Counter Badge');
    const badgeUrl = await getVisitorCounterBadge({
      project: 'demo-project',
      label: 'visitors',
      color: '0e75b6',
      style: 'flat'
    });
    console.log('✅ Badge URL:', badgeUrl);
    console.log('');

    // Test 4: Check count after badge generation
    console.log('📈 Test 4: Count After Badge Generation');
    const newCount = await getVisitorCount('demo-project');
    console.log('✅ New Count:', newCount);
    console.log('✅ Count Incremented:', newCount > currentCount ? 'Yes' : 'No');
    console.log('');

    // Test 5: Different project
    console.log('🌐 Test 5: Different Project');
    const blogBadge = await getVisitorCounterBadge({
      project: 'my-blog',
      label: 'readers',
      color: '28a745',
      style: 'for-the-badge'
    });
    console.log('✅ Blog Badge:', blogBadge);
    console.log('');

    // Test 6: HTML Output
    console.log('🖥️ Test 6: HTML Output');
    const htmlOutput = await getVisitorCounterHTML({
      project: 'demo-project',
      label: 'visitors',
      color: 'dc3545',
      style: 'flat-square'
    });
    console.log('✅ HTML:', htmlOutput);
    console.log('');

    // Test 7: Markdown Output
    console.log('📝 Test 7: Markdown Output');
    const markdownOutput = await getVisitorCounterMarkdown({
      project: 'demo-project',
      label: 'visitors',
      color: '6f42c1',
      style: 'plastic'
    });
    console.log('✅ Markdown:', markdownOutput);
    console.log('');

    // Test 8: React Output
    console.log('⚛️ Test 8: React Output');
    const reactOutput = await getVisitorCounterReact({
      project: 'demo-project',
      label: 'visitors',
      color: 'fd7e14',
      style: 'pixel'
    });
    console.log('✅ React:', reactOutput);
    console.log('');

    // Test 9: Backend Statistics
    console.log('📊 Test 9: Backend Statistics');
    const stats = await getBackendStats();
    console.log('✅ Total Projects:', stats.totalProjects);
    console.log('✅ Project Details:', stats.projects);
    console.log('');

    // Test 10: Simple Badge Function
    console.log('🎯 Test 10: Simple Badge Function');
    const simpleBadge = await getSimpleVisitorBadge('demo-project', 'views');
    console.log('✅ Simple Badge:', simpleBadge);
    console.log('');

    console.log('🎉 All tests completed successfully!');
    console.log('\n💡 Your Railway backend is working perfectly!');
    console.log('🚀 Ready for production use!');
    console.log('🌐 Check out the live demo: https://my-portfolio-mnahsanofficials-projects.vercel.app/');
    
    // Show final counts
    console.log('\n📊 Final Project Counts:');
    const finalDemoCount = await getVisitorCount('demo-project');
    const finalBlogCount = await getVisitorCount('my-blog');
    console.log(`   demo-project: ${finalDemoCount} visitors`);
    console.log(`   my-blog: ${finalBlogCount} visitors`);
    
  } catch (error) {
    console.error('❌ Demo failed:', error.message);
    console.log('\n💡 Make sure your Railway backend is running');
    console.log('   Check: https://websitevisiotrscounter-production.up.railway.app/health');
  }
}

// Run demo
demo();
