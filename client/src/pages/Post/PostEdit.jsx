import React from 'react';

const PostEdit = () => {
  return (
    <>
      <h1>New post</h1>
      <form method="POST" class="post-form">
        {/* {% csrf_token %}
        {{ form.as_p }} */}
        <button type="submit" class="save btn btn-default">Save</button>
      </form>
    </>
  )
}

export default PostEdit