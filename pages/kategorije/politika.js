import Link from "next/link";
import TextCategoriesItem from "../../components/TextCategoriesItem";
export const getStaticProps = async () => {
    const res = await fetch('https://texter-test.herokuapp.com/text/category/politika');
    const data = await res.json();
    return {
      props: { articles: data }
    }
}

const Politika = ({articles}) => {
    return ( 
        <div>
          <h1 className="user-page_header">Politika</h1>
          <div className="list-of-texts-by-author">
            {articles &&
              articles.map((article) => (
                <Link href={`/tekst/${article._id}`} key={article._id}>
                  <a>
                  <TextCategoriesItem  article={article} />
                  </a>
                </Link>
              ))}
          </div>
          <Link href="/">
            <button className="button-form-submit_client">
              <span>Nazad</span> <img src="/nazad.png" alt="Arrow Left"  />
            </button>
          </Link>
        </div>

     );
}
 
export default Politika;