# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
  - Edit Name
- `GET /api/users/:id`
  - Users index/search

### Followings
- `POST /api/followings`
- `DELETE /api/followings`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Posts

- `GET /api/posts`
  - Posts index/feed. Includes posts' comments and like count
- `POST /api/posts`
  - Create Post
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`
  - TBD: accepts pagination params

## Comments

- `POST /api/comments`
- `DELETE /api/comments/:id`

### Likes

- `POST /api/likes`
- `DELETE /api/likes/:id`
