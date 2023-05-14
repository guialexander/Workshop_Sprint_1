import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout/Root'
import Home from '../Pages/Home.jsx'
import Product_detail, { loaderProducs }  from '../Pages/Product_detail'
import About from '../Pages/About'
import Article,{loaderArticle} from '../Pages/Article'
import NotFound from '../Pages/NotFound'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'productdetail',
        element: <Product_detail />,
        loader: loaderProducs,
        
      },
      {
        path: 'about',
        element: <About />,
      },

       {
        path: 'productdetail/:id',
        element: <Article />,
        loader: loaderArticle,
      },

 
    ],
  },
])

export default router