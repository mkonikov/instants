# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
  - Edit Name
- `GET /api/user/:username`
  - Users index/search
- `GET /api/users/:id/following`
- `GET /api/users/:id/followers`
- `POST /api/users/:id/follow`
  - Follow user
- `DELETE /api/users/:id/follow`
  - Unfollow user

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
- `POST /api/posts/:id/like`
  - Like post by current user
- `DELETE /api/users/:id/like`
  - Unlike post by current user

### Comments

- `POST /api/posts/:id/comments`
- `DELETE /api/comments/:id`
