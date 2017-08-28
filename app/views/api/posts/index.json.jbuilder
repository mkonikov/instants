feedOrd = []

json.posts do
  @posts.each do |post|
    feedOrd << post.id
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.feedOrd feedOrd
