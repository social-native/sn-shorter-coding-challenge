const express = require('express');
const R = require('ramda');
const rand = require('random-seed');
const uuidv5 = require('uuid/v5');

const generateContentMetadataForCampaign = (() => {
    const CAMPAIGN_NAMESPACE = '90123e1c-7512-523e-bb28-76fab9f2f73d';
    const MAX_NUMBER_OF_METADATAS = 10;
    
    return (campaignId) => {
        const seededRand = rand.create(campaignId);
        const numberOfMetadatas = seededRand.range(MAX_NUMBER_OF_METADATAS);
        
        return R.pipe(
            R.times(() => seededRand.random()),
            R.map((seed) => {
                const contentMetadataId = uuidv5(seed.toString(), CAMPAIGN_NAMESPACE);
                return { id: contentMetadataId };
            })
        )(numberOfMetadatas);
    };
})();

const generateContentMetadataPerformance = (() => {
    const MAX_FOLLOWERS = 10000;
    const MAX_LIKES_RATIO = 0.05;
    const MAX_COMMENTS_RATIO = 0.005;
    
    return (contentMetadataId) => {
        const seededRand = rand.create(contentMetadataId);
        const numberOfFollowers = seededRand.range(MAX_FOLLOWERS);
        const numberOfComments = seededRand.range(numberOfFollowers * MAX_COMMENTS_RATIO);
        const numberOfLikes = seededRand.range(numberOfFollowers * MAX_LIKES_RATIO) + numberOfComments;
        
        return {
            id: contentMetadataId,
            performance: {
                comments: numberOfComments,
                likes: numberOfLikes,
            },
            snapshot: {
                followers: numberOfFollowers
            }
        }
    };
})();


const MEDIA_NAMESPACE = '90123e1d-7512-523e-bb28-76fab9f2f73d';

const app = express();
app.get(
    '/campaign/:id/all_content_metadata',
    (req, res) => {
        res.json(generateContentMetadataForCampaign(req.params.id.toString()));
    }
);

app.get(
    '/content_metadata/:id/performance',
    (req, res) => {
        res.json(generateContentMetadataPerformance(req.params.id.toString()));
    }
);


const PORT = process.env.PORT || 3000; 
const ENV_IP = process.env.IP || "0.0.0.0";
app.listen(PORT, ENV_IP, () => console.log(`Example app listening on port ${PORT}!`));
