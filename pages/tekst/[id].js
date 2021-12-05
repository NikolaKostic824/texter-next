import { useState, useLayoutEffect } from "react";
import Link from 'next/link'
import Head from 'next/head';

import TextCategoriesItem from "../../components/TextCategoriesItem";
import axios from "axios";

//Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SingleTextItem from '../../components/SingleTextItem';
export const getStaticPaths = async () => {
    const res = await fetch('https://texter-test.herokuapp.com/text');
    const data = await res.json();
    const paths = data.map(text => {
        return {
          params: {id: text._id.toString()}
        }
    })
    return {
        paths:paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://texter-test.herokuapp.com/text/' + id);
    const data = await res.json();
    return {
      props: { article: data }
    }
}

const Text = ({article}) => {
    const [articles, setArticles] = useState(null);
    useLayoutEffect(() => {
        let mounted = true;
        axios.get("https://texter-test.herokuapp.com/text/swipe").then((response) => {
          const res = response.data;
          setArticles(res)
        });
        return () => (mounted = false);
    }, []);
    return ( 
        <>
        <Head>
          <title>Texter - {article.title}</title>
          <meta property="og:title" content={article.title}/>
          <meta property="og:description" content={article.title}/>
          <meta property="og:image" content={article.image}/>
        </Head>
            <div className="single-text-holder">
                <SingleTextItem article={article} />
            </div>
            <div className="single-text-swiper">
                <div className="single-text-swiper-holder">
                    <Swiper
                        breakpoints={{
                            // when window width is >= 640px
                            320: {
                            slidesPerView: 1.2,
                            spaceBetween: 10,
                            },
                            550: {
                            slidesPerView: 1.2,
                            spaceBetween: 15,
                            },
                            // when window width is >= 768px
                            768: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                            },
                            1600: {
                            slidesPerView: 3.5,
                            spaceBetween: 10,
                            },
                            1900: {
                            slidesPerView: 3.5,
                            spaceBetween: 10,
                            }
                        }
                        }
                    >
                        {articles &&
                            articles.map((article) => (
                            <SwiperSlide key={article._id} >
                                <Link href={`/tekst/${article._id}`}>
                                    <a>
                                        <TextCategoriesItem key={article._id} article={article} />
                                    </a>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
            </div>
        </>
     );
}
 
export default Text;