import Link from "next/link";
import TextCategoriesItem from "./TextCategoriesItem.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const TextCategories = ({articles}) => {
    return (
        <div className="text_categories-wrapper">
        <div className="text_categories">
          <h1 className="user-page_header">
            <Link href="/kategorije/politika">Politika</Link>
          </h1>
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
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2.7,
                spaceBetween: 10,
              }, 
              1600: {
                slidesPerView: 3.7,
                spaceBetween: 10,
              },
              1900: {
                slidesPerView: 3.7,
                spaceBetween: 30,
              },
            }}
          >
            {articles &&
              articles
                .filter((text) => text.theme === "Politika")
                .reverse()
                .slice(0, 6)
                .map((article) => (
                  <SwiperSlide key={article._id}>
                    <Link href={`/tekst/${article._id}`}>
                      <a>
                      <TextCategoriesItem
                        key={article._id}
                        article={article}
                      />
                    </a>

                    </Link>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
        <div className="text_categories">
          <h1 className="user-page_header">
            <Link href="/kategorije/sport">Sport</Link>
          </h1>

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
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2.7,
                spaceBetween: 10,
              }, 
              1600: {
                slidesPerView: 3.7,
                spaceBetween: 10,
              },
              1900: {
                slidesPerView: 3.7,
                spaceBetween: 30,
              },
            }}
          >
            {articles &&
              articles
                .filter((text) => text.theme === "Sport")
                .reverse()
                .slice(0, 6)
                .map((article) => (
                  <SwiperSlide key={article._id}>
                    <Link href={`/tekst/${article._id}`}>
                    <a>
                      <TextCategoriesItem
                        key={article._id}
                        article={article}
                      />
                    </a>
                    </Link>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
        <div className="text_categories">
          <h1 className="user-page_header">
            <Link href="/kategorije/price">Priče</Link>
          </h1>
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
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2.7,
                spaceBetween: 10,
              }, 
              1600: {
                slidesPerView: 3.7,
                spaceBetween: 10,
              },
              1900: {
                slidesPerView: 3.7,
                spaceBetween: 30,
              },
            }}
          >
            {articles &&
              articles
                .filter((text) => text.theme === "Priče")
                .reverse()
                .slice(0, 6)
                .map((article) => (
                  <SwiperSlide key={article._id}>
                    <Link href={`/tekst/${article._id}`}>
                    <a>
                      <TextCategoriesItem
                        key={article._id}
                        article={article}
                      />
                    </a>
                    </Link>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
        <div className="text_categories">
          <h1 className="user-page_header">
            <Link href="/kategorije/svastara">Svaštara</Link>
          </h1>
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
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2.7,
                spaceBetween: 10,
              }, 
              1600: {
                slidesPerView: 3.7,
                spaceBetween: 10,
              },
              1900: {
                slidesPerView: 3.7,
                spaceBetween: 30,
              },
            }}
          >
            {articles &&
              articles
                .filter((text) => text.theme === "Svaštara")
                .reverse()
                .slice(0, 6)
                .map((article) => (
                  <SwiperSlide key={article._id}>
                    <Link href={`/tekst/${article._id}`}>
                    <a>
                      <TextCategoriesItem
                        key={article._id}
                        article={article}
                      />
                    </a>
                    </Link>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
        <div className="text_categories">
          <h1 className="user-page_header">
            <Link href="/kategorije/kultura">Kultura</Link>
          </h1>
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
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2.7,
                spaceBetween: 10,
              }, 
              1600: {
                slidesPerView: 3.7,
                spaceBetween: 10,
              },
              1900: {
                slidesPerView: 3.7,
                spaceBetween: 30,
              },
            }}
          >
            {articles &&
              articles
                .filter((text) => text.theme === "Kultura")
                .reverse()
                .slice(0, 6)
                .map((article) => (
                  <SwiperSlide key={article._id}>
                    <Link href={`/tekst/${article._id}`}>
                    <a>
                      <TextCategoriesItem
                        key={article._id}
                        article={article}
                      />
                    </a>
                    </Link>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
        <div className="text_categories reader-writer">
          <h1 className="user-page_header">
            <Link href="/kategorije/citaoci">Čitaoci pisci</Link>
          </h1>
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
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2.7,
                spaceBetween: 10,
              }, 
              1600: {
                slidesPerView: 3.7,
                spaceBetween: 10,
              },
              1900: {
                slidesPerView: 3.7,
                spaceBetween: 30,
              },
            }}
          >
            {articles &&
              articles
                .filter((text) => text.theme === "Čitaoci pisci")
                .reverse()
                .slice(0, 6)
                .map((article) => (
                  <SwiperSlide key={article._id}>
                    <Link href={`/tekst/${article._id}`}>
                    <a>
                      <TextCategoriesItem
                        key={article._id}
                        article={article}
                      />
                    </a>
                    </Link>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
    </div>
    );
}
 
export default TextCategories;