/** @jsx jsx */

import useSWR from 'swr'
import { jsx } from 'theme-ui'

import { PostData } from '~/types'

import CreatePost from './CreatePost'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function Posts() {
  const { data, error, revalidate } = useSWR<PostData[]>('/api/posts', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      <CreatePost
        onSuccess={revalidate}
        onError={error => alert(error.message)}
      />
      {data.map(post => (
        <div key={post.id} sx={{ border: 'light', p: 2, mb: 2 }}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  )
}
