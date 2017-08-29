# Instants

[Heroku link][heroku]
[Trello link][trello]

[heroku]: http://instants.cam/
[trello]: https://trello.com/b/mLegvxFJ/instants-full-stack


## Minimum Viable Products

Instants is a web app inspired by Instagram built using Ruby on Rails and React/Redux.

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Image Upload, API and User Profile (2 days)

**Objective:** Add image upload and deletion capability with images stored on AWS, to appear in feed and profile. User profile should display their created posts in index along with their profile details

### Phase 3: Follows (1 day)

**Objective** Users can follow and unfollow other users via profile page.

### Phase 4: Feed (1 day)

**Objective** User can view all posts from users they follow in descending order of upload date.

### Phase 5: Like and Unlike Posts (1 day)

**Objective** User can like and unlike posts. Like count adjusts accordingly.

### Phase 6: Comment and Delete Comments (1 day)

**Objective** User can add comments and delete their own.

### Phase 7: Search (1 day)

**Objective** Entering username in search field searches for all users on every keystroke

### Bonus Features:

* Infinite Scrolling - first 30 posts are loaded, and later photos are fetched as user reaches bottom of page
* Photo timestamp - Post displays timestamp of when photo was uploaded relative to today's date
