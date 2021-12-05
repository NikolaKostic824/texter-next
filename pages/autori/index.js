import Link from 'next/link'
import WriterCard from '../../components/WriterCard';
export const getStaticProps = async () => {
    const res = await fetch('https://texter-test.herokuapp.com/user');
    const data = await res.json();
    return {
        props: { writers: data }
    }
}
const Autori = ({writers}) => {
    return ( 
        <div>
            <h1 className="user-page_header authors-heading">Autori</h1>
            <div className="writer-list">
            {writers &&
                writers.map((writer) => (
                <Link  href={"/autori/" + writer._id} key={writer._id}> 
                    <a className="writer-card">
                        <WriterCard
                        writer={writer}
                        />
                    </a>
                </Link>
                ))}
            </div>
      </div>
    );
}
 
export default Autori;