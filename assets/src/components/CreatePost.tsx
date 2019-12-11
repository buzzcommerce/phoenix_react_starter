/** @jsx jsx */

import { useFormik } from 'formik'
import { jsx } from 'theme-ui'

import { PostData } from '~/types'

export default function CreatePost({
  onSuccess,
  onError,
}: {
  onSuccess?: (post: PostData) => void
  onError?: (error: Error) => void
}) {
  const { values, handleBlur, handleChange, submitForm } = useFormik({
    initialValues: {
      title: 'Your Post',
      description: 'The post description',
      body: 'Hmm...',
    },
    onSubmit: async values => {
      try {
        const res = await fetch('/api/posts', {
          credentials: 'include',
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
        if (onSuccess) {
          onSuccess(await res.json())
        }
      } catch (err) {
        if (onSuccess) {
          if (onError) {
            onError(err)
          }
        }
      }
    },
  })
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        submitForm()
      }}
    >
      <div>
        <label sx={{ display: 'block' }}>Title</label>
        <input
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label sx={{ display: 'block' }}>Description</label>
        <textarea
          sx={{ width: '1005' }}
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label sx={{ display: 'block' }}>Body</label>
        <textarea
          sx={{ width: '1005' }}
          name="body"
          value={values.body}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  )
}
