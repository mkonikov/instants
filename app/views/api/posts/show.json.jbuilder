json.post do
  json.partial! 'api/posts/post', post: @post
  json.commentIds @post.comment_ids
end

json.comments do
  @post.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end
