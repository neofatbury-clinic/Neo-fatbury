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

async function uploadAcneImages() {
  const procedureImg = 'C:\\Users\\Ashok Sharma\\.gemini\\antigravity\\brain\\ad9613b8-b763-4815-b017-5c49c10185a6\\acne_scar_procedure_clinical_1777777371132.png';
  const baImg = 'C:\\Users\\Ashok Sharma\\.gemini\\antigravity\\brain\\ad9613b8-b763-4815-b017-5c49c10185a6\\acne_scar_before_after_results_1777777761406.png';

  console.log('Uploading Procedure Image...');
  const assetP = await client.assets.upload('image', fs.createReadStream(procedureImg), {
    filename: 'acne-scar-procedure.png'
  });
  console.log('✅ Uploaded Procedure:', assetP._id);

  console.log('Uploading B&A Image...');
  const assetBA = await client.assets.upload('image', fs.createReadStream(baImg), {
    filename: 'acne-scar-results.png'
  });
  console.log('✅ Uploaded B&A:', assetBA._id);

  // Update the Acne Scar Treatment service
  const service = await client.fetch('*[_type == "service" && slug.current == "acne-scar-treatment"][0]');
  if (service) {
    await client.patch(service._id).set({
      whatIsImage: { _type: 'image', asset: { _type: 'reference', _ref: assetP._id } },
      baImage: { _type: 'image', asset: { _type: 'reference', _ref: assetBA._id } }
    }).commit();
    console.log('✅ Updated Acne Scar Treatment service document.');
  } else {
    console.warn('⚠️ Could not find Acne Scar Treatment service.');
  }
}

uploadAcneImages();
