import { useLoaderData } from 'react-router-dom'
import './Styles/article.css'

const Article = () => {
  const { post } = useLoaderData()
  return(
    <div className='Articlecard'>
      <h1 className='Articlecard__title'>{post.id} - {post.title}</h1>
      <img className='Articlecard__Image' src={post.image} alt={post.title}/>
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
