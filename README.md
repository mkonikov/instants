# Instants

[Instant live](http://instants.cam)

Instants is a full-stack web application inspired by Instagram. Instants utilizes Ruby on Rails on the backend with a PostgreSQL database, and React.js with Redux architectural framework on the frontend.

## Features & Implementation

### User Authentication

![auth](doc/readme_images/auth.jpg)

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

### Share Post

![upload-post](doc/readme_images/upload-post.gif)

Users can share posts via a nifty upload modal that allows users to select a photo with a file picker or via simple drag and drop.

### Profile Feed

Visiting a profile page fetches all of the users posts and comments and utilizes includes on all the associations to avoid N+1 queries when the JSON response is being built out by the Jbuilder view.

```
if params[:username]
  @user = User
    .includes(:followees, :followers, :posts, posts: [:author, :likes, comments: [:author]])
    .find_by(username: params[:username])

  @posts = @user.posts
  @followers = @user.followers
  @followees = @user.followees

  render :profile
end
```

For elegance, the profile page route uses the user's username as opposed to a primary key ID integer and accordingly all searches for user on backend are done via the user's username.

The profile higher order container in React.js checks the route params (via React Router) to find the user as well as check if the profile is A) the current user, and therefore render an 'Edit Profile' button, B) a user that is followed by the current user with an option to unfollow or C) a follow button if current user does not follow.

Additionally if there are no posts a message will render either encouraging the user to create a post if it is the current user's profile or a simple 'No posts' message.

### Search

![search](doc/readme_images/search.gif)

A user search field is displayed in the navbar allowing visitors to search for users with a simple query that will match all users that either their username of Full name begins with the query search term. The results will display in a rendered component that appears below the search which disappears onBlur.

The search utilizes a setTimeout so that at most a search is fired every 500ms. The search component maintains state to determine if any search queries are currently enqueued.

```
enqueueSearch() {
  if (!this.state.enqueued) {
    this.setState({enqueued: true},
      () => {
        this.enqueuedSearchId = window.setTimeout(this.fireSearch, 500);
      });
  } else {
    window.clearTimeout(this.enqueuedSearchId);
    this.enqueuedSearchId = window.setTimeout(this.fireSearch, 500);
  }
}
```

### Post Detail with Likes and Comments

Using member routes in the Rails backend, follows, likes and comments CRUD actions are directed to the Posts and Users controllers respectively.

### Loading Bar

![loading](doc/readme_images/loading.gif)

A nice loading bar appears when an API call is being made and toggled off when it's returned. The appearance is styled with CSS keyframes as well as multiple setTimeouts to continuously widen the bar as time progresses. All timeouts are cleared when the React component unmounts.


## Future Directions for the Project

In addition to the features outlined above some of the next steps to continue working on this project are:

### Infinite scroll

Feed will only fetch the latest 30 posts and continue fetching additional posts by requesting from the API additional posts and specifying the offset.

### Direct Messaging

Leveraging Rails 5's support for Web Sockets with Action Cable, users will be able to send direct messages with images that will update live.

### Support for Video

Allow upload of videos and have them play on hover while counting views.
