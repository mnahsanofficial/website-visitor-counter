import { getVisitorCount } from '../dist/index.js';

/**
 * Demo script showing how to use the website-visitor-counter package
 * 
 * Before running this demo:
 * 1. Set up a Supabase project
 * 2. Create the visitors table using the SQL from README.md
 * 3. Update the credentials below with your actual values
 */

// Configuration - Updated with actual Supabase credentials
const CONFIG = {
  projectId: 'demo-website',
  supabaseUrl: 'https://aqxpwgcokzqcppyjoxpu.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxeHB3Z2Nva3pxY3BweWpveHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNjY2NTIsImV4cCI6MjA3MDk0MjY1Mn0.Z4mSyVlN2eMM_wbkbwnkTyxXpy9j76cjK_e_qgmE2Rg'
};

async function runDemo() {
  console.log('🚀 Website Visitor Counter Demo');
  console.log('================================\n');

  try {
    console.log('📊 Getting visitor count...');
    console.log(`Project ID: ${CONFIG.projectId}`);
    console.log(`Supabase URL: ${CONFIG.supabaseUrl}`);
    
    const startTime = Date.now();
    const count = await getVisitorCount(
      CONFIG.projectId,
      CONFIG.supabaseUrl,
      CONFIG.supabaseKey
    );
    const endTime = Date.now();

    console.log('\n✅ Success!');
    console.log(`Total unique visitors: ${count}`);
    console.log(`Response time: ${endTime - startTime}ms`);
    
    // Simulate multiple calls to show duplicate prevention
    console.log('\n🔄 Testing duplicate prevention...');
    
    for (let i = 0; i < 3; i++) {
      const testCount = await getVisitorCount(
        CONFIG.projectId,
        CONFIG.supabaseUrl,
        CONFIG.supabaseKey
      );
      console.log(`Call ${i + 1}: ${testCount} visitors (should remain the same)`);
    }

  } catch (error) {
    console.error('\n❌ Demo failed with error:');
    console.error(error.message);
    
    if (error.message.includes('Supabase')) {
      console.log('\n💡 Troubleshooting tips:');
      console.log('1. Check your Supabase URL and key are correct');
      console.log('2. Ensure the visitors table exists in your database');
      console.log('3. Verify your Supabase project is active');
      console.log('4. Check the SQL schema in README.md');
    }
  }
}

// Run the demo
runDemo().catch(console.error);
