import React from "react";
const NewsItems = (props) => {
  const { title, description, imgeUrl, newsUrl, author, date } = props;
  if (title !== null && description != null && imgeUrl != null)
    return (
      <div>
        <div className="card">
          <img className="card-img-top " src={imgeUrl} alt="No image preview" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} ...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} and Last updated on {date}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
};

export default NewsItems;
