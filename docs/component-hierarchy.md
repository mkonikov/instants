# Component Hierarchy

### Auth

* AuthFormContainer
  * Renders Login or Signup form depending on path in URL.

Visitors are greeted by a login or signup form. Demo account is also an option. All logged out visitors are redirected here.

### Feed

* NavContainer
  * Search
    * Search Form
    * Search Results -
  * NavTools
    * Profile Link
    * Upload
    * Logout

* PostsIndex - `connect`s to `posts`
  * Post - receives `post` as prop with associated `comments` and `likes` count as well as boolean if current user liked.
    * Comments Container
      * CommentsIndex - receives `comments` as prop
        * CommentItem - receives `comment` as prop
      * CommentForm

### Profile
  * NavContainer (as above)

  * ProfileContainer
    * ProfileDetail
    * ProfilePostsIndex
      * ProfilePostItem
        * PostItemDetail (modal) - receives `post` with associated `comments` and `likes` info as props
          * CommentsIndex - receives `comments` as props
            * CommentItem - receives `comment` as props
          * CommentForm






## Routes

|Path                                       | Component              |
|-------------------------------------------|------------------------|
| "/sign-up"                                | "AuthFormContainer"    |
| "/log-in"                                 | "AuthFormContainer"    |
| "/"                                       | "PostsContainer"       |
| "/users/:username"                        | "ProfileContainer"     |
| "/posts/:postId"                          | "PostDetail"
