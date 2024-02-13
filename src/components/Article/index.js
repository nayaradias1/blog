
import Post from '../Post';


const Article = ()=> {

//fazer uma requisição pra uma api

    return (
        <section className="container">
            <h3>Article</h3>
            <div className="mt-5 container-posts">
            <Post subititle="tecnologia" title="O guia definitivo do blog">
            1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis fugiat harum quae eligendi corrupti sapiente possimus, libero porro quidem! Quo qui consequuntur dicta magni blanditiis animi maxime alias laboriosam consectetur.
            </Post>
            <Post subititle="fotografia" title="Quais as melhores cameras em 2021">
            2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis fugiat harum quae eligendi corrupti sapiente possimus, libero porro quidem! Quo qui consequuntur dicta magni blanditiis animi maxime alias laboriosam consectetur.
            </Post>
            <Post subititle="cinema" title="Os 10 filmes com maior bilheteria ">
            3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis fugiat harum quae eligendi corrupti sapiente possimus, libero porro quidem! Quo qui consequuntur dicta magni blanditiis animi maxime alias laboriosam consectetur.
            </Post>
            </div>
                    
        </section>
        
    )
}
export default Article;