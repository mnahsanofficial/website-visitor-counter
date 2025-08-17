import { 
  getVisitorCounterBadge, 
  getSimpleVisitorBadge, 
  getVisitorCounterHTML, 
  getVisitorCounterMarkdown,
  getVisitorCounterReact 
} from '../dist/index.js';

/**
 * Demo script for Website Visitor Counter v2.0.0
 * Badge-based visitor counter - no database setup required!
 */

console.log('🚀 Website Visitor Counter v2.0.0 Demo');
console.log('========================================\n');

async function runDemo() {
  try {
    // Demo 1: Simple visitor badge
    console.log('📊 Demo 1: Simple Visitor Badge');
    console.log('--------------------------------');
    const simpleBadge = await getSimpleVisitorBadge('my-awesome-website');
    console.log('Badge URL:', simpleBadge);
    console.log('');

    // Demo 2: Customized visitor badge
    console.log('🎨 Demo 2: Customized Visitor Badge');
    console.log('-----------------------------------');
    const customBadge = await getVisitorCounterBadge({
      project: 'my-blog',
      label: 'readers',
      color: 'ff6b6b',
      style: 'for-the-badge',
      logo: '📚'
    });
    console.log('Custom Badge URL:', customBadge);
    console.log('');

    // Demo 3: HTML img tag
    console.log('🌐 Demo 3: HTML img Tag');
    console.log('------------------------');
    const htmlTag = await getVisitorCounterHTML({
      project: 'my-portfolio',
      label: 'visitors',
      color: '00d4aa',
      style: 'flat'
    });
    console.log('HTML Tag:', htmlTag);
    console.log('');

    // Demo 4: Markdown badge
    console.log('📝 Demo 4: Markdown Badge');
    console.log('-------------------------');
    const markdownBadge = await getVisitorCounterMarkdown({
      project: 'my-project',
      label: 'views',
      color: '6c5ce7',
      style: 'social'
    });
    console.log('Markdown Badge:', markdownBadge);
    console.log('');

    // Demo 5: React component
    console.log('⚛️  Demo 5: React Component');
    console.log('----------------------------');
    const reactComponent = await getVisitorCounterReact({
      project: 'my-react-app',
      label: 'users',
      color: 'fd79a8',
      style: 'plastic'
    });
    console.log('React Component:');
    console.log(reactComponent);
    console.log('');

    // Demo 6: Different styles
    console.log('🎭 Demo 6: Different Badge Styles');
    console.log('--------------------------------');
    const styles = ['flat', 'plastic', 'for-the-badge', 'social'];
    
    for (const style of styles) {
      const badge = await getVisitorCounterBadge({
        project: 'style-demo',
        label: 'visitors',
        color: '3498db',
        style: style
      });
      console.log(`${style}: ${badge}`);
    }
    console.log('');

    console.log('🎉 All demos completed successfully!');
    console.log('\n💡 Usage Tips:');
    console.log('1. Use getSimpleVisitorBadge() for quick setup');
    console.log('2. Use getVisitorCounterHTML() for websites');
    console.log('3. Use getVisitorCounterMarkdown() for README files');
    console.log('4. Use getVisitorCounterReact() for React apps');
    console.log('5. Customize colors, labels, and styles as needed');
    
  } catch (error) {
    console.error('\n❌ Demo failed with error:');
    console.error(error.message);
  }
}

// Run the demo
runDemo().catch(console.error);
