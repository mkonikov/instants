profileIds = []


@posts.each do |post|
  profileIds << post.id
  comment_ids = post.comment_ids


  json.posts do
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
      json.commentIds comment_ids
    end
  end

  json.comments do
    post.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end

  end

end

json.user do
  json.partial! 'api/users/user', user: @user
  json.partial! 'api/users/followings', followers: @followers, followees: @followees
  json.profileFeed profileIds
end
