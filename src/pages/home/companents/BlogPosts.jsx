import blogData from "../../../utils/blogData";

const BlogPosts = () => {
  return (
    <div className="blogPosts">
      <h1 className="blogPosts__title">Our Blog Posts</h1>
      <p className="blogPosts__text">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <div className="blogPosts__cards">
        {blogData.map((item) => (
          <div className="blog__card" key={item.id}>
            <div className="blog__card__image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="blog__card__info">
              <p className="blog__card__info__date">
                Septembet {item.date} | Read in {item.view} minutes
              </p>
              <h2 className="blog__card__info__title">{item.title}</h2>
              <p className="blog__card__info__text">{item.text}</p>
              <button className="blog__card__info__btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
