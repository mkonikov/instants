# json.extract! post, :caption, :author_id, :id, :image.url

json.caption post.caption
json.author_id post.author_id
json.id post.id
json.image_url post.image.url
json.thumb_url post.image.url(:thumb)
