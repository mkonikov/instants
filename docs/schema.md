# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
bio             | text      |
avatar          | attachment|
name            | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## followings

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
followee_id     | integer   | not null, foreign key (references users), indexed, unique [follower_id]
follower_id     | integer   | not null, foreign key (references users), indexed

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
caption     | text      |
image       | attachment| not null
author_id   | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts), indexed
author_id   | integer   | not null, foreign key (references users), indexed
body        | text      | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique [post_id]
post_id     | integer   | not null, foreign key (references posts), indexed
