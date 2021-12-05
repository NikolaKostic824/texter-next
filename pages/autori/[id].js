import TextCategoriesItem from "../../components/TextCategoriesItem";
import Link from 'next/link'
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
    const res = await fetch('https://texter-test.herokuapp.com/user');
    const data = await res.json();

    const paths = data.map(writer => {
        return {
          params: {id: writer._id.toString()}
        }
    })
    return {
        paths:paths,
        fallback:false
    }
 }

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://texter-test.herokuapp.com/text/sorted_text_author/' + id);
    const data = await res.json();
    return {
      props: { articles: data }
    }
}
const ListOfTextByAuthor = ({articles}) => {
    const router = useRouter();
    return (
      <>
        <div className="list-of-texts-by-author">
            {articles &&
              articles.map((article) => (
                <Link href={`/tekst/${article._id}`} key={article._id} >
                  <a>
                  <TextCategoriesItem key={article._id} article={article} />
                  </a>
                </Link>
              ))}
          </div>
          <button
            className="button-form-submit_client writer-btn"
            onClick={() => router.back()}
          >
           <span>Nazad</span> <img src="/nazad.png" alt="Arrow Left"  />
          </button>
          </>
    );
}
 
export default ListOfTextByAuthor;