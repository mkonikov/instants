# Component Hierarchy

### Feed

* App
  * Navbar
    * Search
      * Search Form
      * Search Results -
    * Login/Upload/Explore - Login `connect`s to `session`, etc.
  * PostsIndex - `connect`s to `posts`
    * Post - receives `post` as prop with associated `comments` and `likes`
      * CommentsIndex - receives `comments` as prop
        * CommentItem - receives `comment` as prop
      * CommentForm



## Routes

|Path                                       | Component              |
|-------------------------------------------|------------------------|
| "/sign-up"                                | "AuthFormContainer"    |
| "/log-in"                                 | "AuthFormContainer"    |
| "/"                                       | "PostsContainer"       |
| "/users/:userId"                          | "ProfileContainer"     |
