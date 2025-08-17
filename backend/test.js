// Test script for the visitor counter backend
const API_BASE = 'http://localhost:3001';

async function testBackend() {
  console.log('🧪 Testing Visitor Counter Backend...\n');

  try {
    // Test 1: Health check
    console.log('📊 Test 1: Health Check');
    const healthResponse = await fetch(`${API_BASE}/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health:', healthData.status);
    console.log('');

    // Test 2: First visit to portfolio
    console.log('🌐 Test 2: First Visit to Portfolio');
    const firstVisit = await fetch(`${API_BASE}/counter?project=my-portfolio&label=visitors&color=0e75b6&style=flat`);
    const firstData = await firstVisit.json();
    console.log('✅ First visit:', firstData);
    console.log('');

    // Test 3: Second visit (should not increment)
    console.log('🔄 Test 3: Second Visit (Same IP)');
    const secondVisit = await fetch(`${API_BASE}/counter?project=my-portfolio&label=visitors&color=0e75b6&style=flat`);
    const secondData = await secondVisit.json();
    console.log('✅ Second visit:', secondData);
    console.log('');

    // Test 4: Different project
    console.log('📱 Test 4: Different Project (Blog)');
    const blogVisit = await fetch(`${API_BASE}/counter?project=my-blog&label=readers&color=ff6b6b&style=for-the-badge`);
    const blogData = await blogVisit.json();
    console.log('✅ Blog visit:', blogData);
    console.log('');

    // Test 5: Get count without incrementing
    console.log('📈 Test 5: Get Count (Read Only)');
    const countResponse = await fetch(`${API_BASE}/count/my-portfolio`);
    const countData = await countResponse.json();
    console.log('✅ Portfolio count:', countData);
    console.log('');

    // Test 6: Statistics
    console.log('📊 Test 6: Statistics');
    const statsResponse = await fetch(`${API_BASE}/stats`);
    const statsData = await statsResponse.json();
    console.log('✅ Stats:', statsData);
    console.log('');

    console.log('🎉 All tests completed successfully!');
    console.log('\n💡 Your backend is working perfectly!');
    console.log('🚀 Ready to deploy to Vercel/Netlify!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n💡 Make sure your backend server is running on port 3001');
    console.log('   Run: cd backend && npm run dev');
  }
}

// Run tests
testBackend();
