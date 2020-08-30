import fs from 'fs'
import path from 'path'

const SPACE = process.env.CONTENTFUL_SPACE;
const TOKEN = process.env.CONTENTFUL_TOKEN

const types = [
  'blogPost'
];

const client = require('contentful').createClient({
  space: SPACE,
  accessToken: TOKEN,
})

export async function getContentfulContent() {
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

export default { getContentfulContent }
