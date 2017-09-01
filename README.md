# Instants

[Instant live](http://instants.cam)

Instants is a full-stack web application inspired by Instagram. Instants utilizes Ruby on Rails on the backend with a PostgreSQL database, and React.js with Redux architectural framework on the frontend.

## Features & Implementation

### User Authentication

Users sign up and log in to upload and edit personal information. While profiles are public, protected routes limit navigation and features accessibility. The current user is bootstrapped to the window to ensure the current user (when logged in) appears immediately without the need for an additional API call.

### User Feed

The feed populates with posts from users the current user follows.

When a new user joins, the feed is populated with follow suggestions listing the top 10 most followed users with an option to follow each. Once a user has selected their follow preferences they can hit 'Get Started' to fetch their new feed.

```
if params[:suggestions] == "new_user"
  @users = User
  .joins(:follower_followings)
  .group(:id)
  .order("COUNT(users.id) DESC")
  .limit(10)

  return render :search
end
```



### Profile Feed

### Post Detail with Likes and Comments

## Future Directions for the Project

In addition to the features outlined above some of the next steps to continue working on this project are:

### Infinite scroll

Feed will only fetch the latest 30 posts and continue fetching additional posts by requesting from the API additional posts and specifying the offset.

### Direct Messaging

Leveraging Rails 5's support for Web Sockets with Action Cable, users will be able to send direct messages with images that will update live.

### Support for Video

Allow upload of videos and have them play on hover while counting views.
