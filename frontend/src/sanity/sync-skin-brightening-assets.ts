import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function syncAssets() {
  console.log('🚀 Starting Sanity Asset Sync...');

  const imagesDir = path.join(process.cwd(), 'public', 'images');
  
  const uploadImage = async (filename: string) => {
    const filePath = path.join(imagesDir, filename);
    if (!fs.existsSync(filePath)) {
      console.error(`❌ File not found: ${filePath}`);
      return null;
    }
    const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
      filename: filename,
    });
    console.log(`✅ Uploaded ${filename} -> ${asset._id}`);
    return asset;
  };

  const imgDull = await uploadImage('skin-concern-dull.png');
  const imgUneven = await uploadImage('skin-concern-uneven.png');
  const imgPigment = await uploadImage('skin-concern-pigmentation.png');
  const imgSun = await uploadImage('skin-concern-sun.png');
  const imgBA = await uploadImage('skin-brightening-ba.png');

  const service = await client.fetch(`*[_type == "service" && slug.current == "skin-brightening"][0]`);
  if (!service) {
    console.error('❌ Service "skin-brightening" not found in Sanity.');
    return;
  }

  const updatedProblemCards = [
    {
      _key: 'card-1',
      title: 'Dull Skin',
      desc: 'Loss of natural radiance and a tired appearance.',
      image: imgDull ? { _type: 'image', asset: { _type: 'reference', _ref: imgDull._id } } : undefined,
    },
    {
      _key: 'card-2',
      title: 'Uneven Tone',
      desc: 'Patchy skin color or dark spots appearing on face.',
      image: imgUneven ? { _type: 'image', asset: { _type: 'reference', _ref: imgUneven._id } } : undefined,
    },
    {
      _key: 'card-3',
      title: 'Pigmentation',
      desc: 'Darkening of skin areas caused by excess melanin.',
      image: imgPigment ? { _type: 'image', asset: { _type: 'reference', _ref: imgPigment._id } } : undefined,
    },
    {
      _key: 'card-4',
      title: 'Sun Damage',
      desc: 'Skin darkened or damaged by persistent UV exposure.',
      image: imgSun ? { _type: 'image', asset: { _type: 'reference', _ref: imgSun._id } } : undefined,
    }
  ];

  await client
    .patch(service._id)
    .set({
      problemCards: updatedProblemCards,
      baImage: imgBA ? { _type: 'image', asset: { _type: 'reference', _ref: imgBA._id } } : service.baImage,
    })
    .commit();

  console.log('✨ Sanity updated successfully with new clinical assets!');
}

syncAssets().catch(err => {
  console.error('❌ Sync failed:', err);
});
