```js
{
  "entities": {
    "users": {
      "guest": {
        "username": "jdoe94",
        "name": "Jon Doe",
        "avatarUrl": "assets/profiles/1.jpg",
        "bio": "I'm awesome!",
        "profileFeed": [1, 4, 5],
        "followerIds": [2,5,6],
        "followeeIds": [2,5,7]
      }

    },
    "posts": {
      1: {
        "imageUrl": "assets/posts/435.jpg",
        "thumbUrl": "assets/posts/thumb/435.jpg"
        "caption": "What a day!",
        "authorId": 1,
        "authorName": "jdoe94",
        "createdAt": "2017-08-25T16:50:12.513Z",
        "commentIds": [1, 3, 6],
        "likeCount": 3,
        "hasLiked": true
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
    "feedOrd": [1, 3, 6]
  },
  "errors": {
    "login": ["Password must be 6 characters long"],
    "signup": { username: 'cannot be empty'}
    "uploadPost" ["Invalid image"],
  },
  "session": {
    "currentUser": 1
  }
}

```
