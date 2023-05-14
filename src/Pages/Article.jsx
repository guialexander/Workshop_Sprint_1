import { useLoaderData } from 'react-router-dom'

const Article = () => {
  const { post } = useLoaderData()
  return(
    <div>
      <h1>{post.id} - {post.title}</h1>
      <img src={post.image} alt={post.title}/>
    </div>
  )
}

export default Article

export const loaderArticle = async ({ params }) => {
  const { id } = params
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()
  return { post: data }
}
