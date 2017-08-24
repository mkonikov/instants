```js
{
  "entities": {
    "users": {
      "guest": {
        "username": "jdoe94",
        "name": "Jon Doe",
        "avatarUrl": "assets/profiles/1.jpg",
        "bio": "I'm awesome!",
        "postIds": [1, 4, 5],
        "followerIds": [2,5,6],
        "followingIds": [2,5,7]
      }

    },
    "posts": {
      1: {
        "imageUrl": "assets/posts/435.jpg",
        "thumbUrl": "assets/posts/thumb/435.jpg"
        "description": "What a day!",
        "authorId": 1,
        "datePosted": "8/12/2017",
        "daysAgo": "14 days",
        "commentIds": [1, 3, 6],
        "likeCount": [2,4,6],
        "liked": true
      }

    },
    "comments": {
      1: {
        "body": "Awesome shot!",
        "postId": 1,
        "userId": 4
      }
    }

  },
  "ui": {
    "loading": false,
    "uploadModal": false,
    "feed_ord": [1, 3, 6]
  },
  "errors": {
    "login": ["Password must be 6 characters long"],
    "signup": { username: 'cannot be empty'}
    "uploadPost" ["Invalid image"],
  },
  "session": {
    "userId": 1
  }
}

```
