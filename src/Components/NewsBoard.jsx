import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

function NewsBoard({category}) {
    const [article,setArticles] = useState([]);

useEffect(()=>{
    let url =  `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c972023157244c45a13401d1eb4e0abb`
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
},[category])

  return (
    <div>
      <h1 className="text-center">Latest <span className="badge bg-danger">News</span></h1>
      <div className="text-center">

      
      {
        article.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} url={news.url} src={news.urlToImage}/>
                
            
            
            
        })
      }
      </div>
    </div>
  )
}

export default NewsBoard
