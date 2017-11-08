# Dummy backend for the coding challenge

## Description of API

- The api has 2 endpoints
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
