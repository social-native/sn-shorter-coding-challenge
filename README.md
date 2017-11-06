## What You Are Building

You are going to build a command line applications that interacts with a dummy Rest API that simulates some of the work that we would do at Social Native.

## Testing For

- Correctness
- Completeness
- Style
- Organization
- Time to complete

## Description of API

- The api is hosted at https://sn-shorter-coding-challenge.herokuapp.com and has 2 endpoints
-  ___GET__ /campaign/:id/all_content_metadata_
    - For a given campaign id, return all of the associated campaign metadata. Will return a JSON list of objects.
    - Example response:
        ```
          [
            {
              "id": "14d494ff-f045-5b45-a4a3-853fae9bb1f8"
            },
            {
              "id": "b518b738-42e6-5e96-b6a2-a8d8c0abc8a0"
            },
            ...
          ]
        ```
-  ___GET__ /content_metadata/:id/performance_
    - For a given content_metadata id, return the associated performance data. Will return a JSON object.
    - Response will always have the following shape:
        ```
        {
          "id": <string>,
          "performance": {
            "comments": <integer>,
            "likes": <integer>
          },
          "snapshot": {
            "followers": <integer>
          }
        }
        ```
    - Example response:
        ```
        {
          "id": "14d494ff-f045-5b45-a4a3-853fae9bb1f8",
          "performance": {
            "comments": 17,
            "likes": 95
          },
          "snapshot": {
            "followers": 3846
          }
        }
        ```

## Instructions

- Implement the Specification defined below.
- Use any programming language, framework, libraries, etc. that you would like.
- When finished, put all code for your solution in a named and dated zip file, e.g. `First-Last-July-14.zip`.
- Upload the zip file to our [challenge submission Dropbox](https://www.dropbox.com/request/rZtxnI538NIGdjwWFjgf).
- Please include detailed instructions on how to build and run your code

## Motivation

Here at Social Native, we sell influencer marketing campaigns to our clients. In these campaigns, we match our clients with content creators who create content for the given product. Our content creators then post that content on their own social channel. For each campaign, we want to start surfacing high performing pieces of content to our clients in order to encourage them to reuse this content in either ads or in the client's own social channel(s). At the same time, we've been noticing an uptick in the amount of suspicious activity in our campaigns. As a proof of concept, we need to create a utility that will recommend top performing content, but will also highlight any potentially fraudulent content.

## Specification

- Using the API specified above, create a command line program that runs has the following signature:
    - `sn_contentrecommender --campaign <campaignId>` where `<campaignId>` is a string
- The program should use the api to get all of the content metadata for the given campaign, and then write id of each content metadata to STDOUT where the engagement rate of the content is greater than `0.03` where `eng_rate = (comments + likes) / followers`.
- The results should be sorted by engagement rate descending (top performers first).
- Each content metadata id should separated by a comma with no trailing comma, and followed by a newline character
    - EG: if there is no data, your program should only write a newline character to STDOUT
- Finally, any suspicious content should be prepended with a `!` to mark it as potentially fraudulent. Suspicious content is defined as any content with more than 1000 followers, an `eng_rate` greater than `0.03`, but 0 comments.

Example output:

```
> sn_contentrecommender -campaign examplecampaign1
contentmetadataid1,!contentmetadataid2,...

```

## Other Helpful Information

- Plan your approach before you begin.
- Do not publish / distribute challenge instructions or solutions.
- Please test your program yourself and ensure it is working for edge cases.
- Stuck? Issue with the instructions? Email samuelp@socialnative.com
