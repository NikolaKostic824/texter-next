
const TextCategoriesItem = ({article}) => {
    return (
        <div
        className="text-item"
        >
          <div className="text-item-1">
            <img src={article.authorImage} alt={article.author + "avatar"} />
            <h1>{article.author}</h1>
          </div>
          <div className="text-item-2">
            <img src={article.image} alt={article.title + "book"} />
            <div className="text-item-2_text">
              <h2>
                {article.title.length > 35
                  ? article.title.substring(0, 31) + "..."
                  : article.title}
              </h2>
              <p>{article.textSummary}</p>
            </div>
          </div>
          <div className="text-item-3">
            <div className="text-item-3_text">
              <p>{article.theme}</p>
            </div>
            <div className="text-item-3_text">
              <p>{article.readTime}</p>
            </div>
          </div>
        </div>
      );
}
 
export default TextCategoriesItem;