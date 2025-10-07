import { createSearchDocuments } from './utils/message-flattener.js';
import { createMeilisearchClient, configureIndex } from './utils/meilisearch-client.js';

async function main(): Promise<void> {
  try {
    console.log('🚀 Starting search index creation...');
    
    const client = createMeilisearchClient();
    const index = await configureIndex(client);
    
    const documents = createSearchDocuments();
    console.log(`📄 Created ${documents.length} search documents`);
    
    const task = await index.addDocuments(documents);
    console.log('✅ Documents uploaded successfully!');
    console.log(`📋 Task ID: ${task.taskUid}`);
    
  } catch (error) {
    console.error('❌ Error creating search index:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main };