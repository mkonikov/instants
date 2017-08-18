```js
{
  "entities": {
    "users": {
      1: {
        "username": "jdoe94",
        "name": "Jon Doe",
        "avatar_url": "assets/profiles/1.jpg",
        "post_ids": [1, 4, 5],
        "followers_ids": [2,5,6],
        "following_ids": [2,5,7]
      }

    },
    "posts": {
      1: {
        "image_url": "assets/posts/435.jpg",
        "description": "What a day!",
        "author_id": 1,
        "date_posted": "8/12/2017",
        "comment_ids": [1, 3, 6],
        "like_ids": [2,4,6],
        "liked": true
      }

    },
    "likes": {
      1: {
        "post_id": 1,
        "user_id": 2
      }

    },
    "comments": {
      1: {
        "body": "Awesome shot!",
        "post_id": 1,
        "user_id": 4
      }
    }

  },
  "ui": {
    "loading": false,
    "model_open": false
  },
  "errors": {
    "login": ["Password must be 6 characters long"]
  },
  "session": {
    "user_id": 1
  }
}

```
