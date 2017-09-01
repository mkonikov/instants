# Instants

[Instant live](http://instants.cam)

Instants is a full-stack web application inspired by Instagram. Instants utilizes Ruby on Rails on the backend with a PostgreSQL database, and React.js with Redux architectural framework on the frontend.

## Features & Implementation

### User Authentication

Users sign up and log in to upload and edit personal information. While profiles are public, protected routes limit navigation and features accessibility. An animated guest login was added for fun!

### User Feed

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
