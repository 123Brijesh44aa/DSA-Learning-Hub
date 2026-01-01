
try {
  const fs = require('fs');
  const content = fs.readFileSync('dsa_topics.js', 'utf8');
  // Remove the comment at the end to make it valid JSON-like structure for eval or just eval the whole thing if it is a variable declaration
  eval(content);
  console.log('dsa_topics.js is valid JavaScript');
} catch (e) {
  console.error('Error parsing dsa_topics.js:', e);
  process.exit(1);
}
