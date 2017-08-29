json.post do
  json.set! @post.id do
    json.partial! 'api/posts/post', post: @post
    json.commentIds @post.comment_ids
  end
end

json.comments do
  @post.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end
