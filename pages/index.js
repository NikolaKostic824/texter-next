import TextCategories from "../components/TextCategories"
export const getStaticProps = async () => {
  const res = await fetch('https://texter-test.herokuapp.com/text');
  const data = await res.json();
  return {
    props: { articles: data }
  }
}
export default function Home({articles}) {
  return (
    <div className="app"> 
      <TextCategories articles={articles} />
    </div>
  )
}
