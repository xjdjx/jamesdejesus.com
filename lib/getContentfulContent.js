const { loadEnvConfig } = require('@next/env')
loadEnvConfig(process.cwd())

const fs = require('fs')
const path = require('path')
const { createClient } = require('contentful')

const SPACE = process.env.CONTENTFUL_SPACE
const TOKEN = process.env.CONTENTFUL_TOKEN

const types = [
  'blogPost'
];

const client = createClient({
  space: SPACE,
  accessToken: TOKEN,
})

async function getContentfulContent() {
  fs.mkdirSync(path.join(process.cwd(), 'data'), { recursive: true });
  console.log('Fetching contentful content...');
  console.log('contentful space: ', SPACE);
  console.log('contentful token: ', TOKEN);
  for (const type of types) {
        const entries = await client.getEntries()
        fs.writeFileSync(
            path.join(process.cwd(), 'data', `${type}.json`),
            JSON.stringify(entries.items),
            {'flag':'w'}
        );
    }

    return true;
}

getContentfulContent();
