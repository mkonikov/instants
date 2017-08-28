json.caption post.caption
json.authorId post.author_id
json.authorName post.author.username
json.authorAvatar image_path(post.author.avatar.url(:thumb))
json.id post.id
json.createdAt post.created_at
json.imageUrl post.image.url(:square)
json.thumbUrl post.image.url(:thumb)
