hasLiked = post.likes.any? do |like|
  like.user_id == current_user.id
end

json.id post.id
json.caption post.caption
json.authorId post.author_id
json.authorName post.author.username
json.likeCount post.likes.size
json.hasLiked hasLiked
json.imageUrl post.image.url(:original)
json.thumbUrl post.image.url(:thumb)
json.authorAvatar image_path(post.author.avatar.url(:original))
json.createdAt post.created_at
