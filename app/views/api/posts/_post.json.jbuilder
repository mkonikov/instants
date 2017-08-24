# json.extract! post, :caption, :author_id, :id, :image.url

json.caption post.caption
json.authorId post.author_id
json.id post.id
json.imageUrl post.image.url
json.thumbUrl post.image.url(:thumb)
