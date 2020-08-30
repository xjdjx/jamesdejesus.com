import fs from 'fs'
import path from 'path'
import { createClient } from 'contentful'

const SPACE = process.env.CONTENTFUL_SPACE;
const TOKEN = process.env.CONTENTFUL_TOKEN

const types = [
  'blogPost'
];

const client = createClient({
  space: SPACE,
  accessToken: TOKEN,
})

export async function getContentfulContent() {
    for (const type of types) {
        const entries = await client.getEntries()
        console.log('entries:',entries);
        fs.writeFileSync(
            path.join(process.cwd(), 'data', `${type}.json`),
            JSON.stringify(entries.items),
            {'flag':'w'}
        );

        console.log('write complete!!!');
    }   
    
    return true;
}

getContentfulContent();