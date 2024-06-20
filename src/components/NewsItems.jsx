import News from '../assets/News.jpg';

/* eslint-disable react/prop-types */
const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src?src:News} style={{height:"200px",width:"330px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"asdfghjkl"}</p>
        <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
};

export default NewsItems;