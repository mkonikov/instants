
TO fix now that receiving author_name:
before adding latest post to feed array.

Profile Container extensive if logic.

q/ Currently storing avatar with posts. How bad for normalizing state?
q/ Meagan - ordering comments

q/ liking too quickly causes error

* Document Title Changes
* go to next photo in detail view (with keyboard and/or mouse)
* support video
* error handling
* constrain originals
* Loading animations and disabled buttons
* ensure enter works on forms to submit
* like post rapidly
* favicon


//USE eager loading detected
  Comment => [:author]
  Add to your finder: :includes => [:author]
