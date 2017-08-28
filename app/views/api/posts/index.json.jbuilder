feedOrd = []

@posts.each do |post|
  json.posts do

    comment_ids = post.comment_ids

    feedOrd << post.id
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


json.feedOrd feedOrd
