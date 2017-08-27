json.partial! 'api/users/user', user: @user
json.partial! 'api/users/followings', followers: @followers, followees: @followees
