import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import s from '../Test.module.css';
import Paginator from './Paginator/Paginator';

export default function NewsList({ news, error, title, paginate, totalPosts, newsPerPage }) {
    if (!news || news.length === 0) {
        return error ? <h2 className={`${s.title} ${s.textOutline}`}>&#9888; {error} &#9888;</h2> : null;
    }
    return (
        <div className="newsComponent">
            <h1 className={`${s.title} ${s.textOutline}`}>{`${title}:`}</h1>
            <div className="cardContainer">
                {news.map(story => (
                    <NewsItem
                        key={story.created_at_i}
                        title={story.title}
                        date={story.created_at}
                        url={story.url}
                        author={story.author}
                        points={story.points}
                        comments={story.num_comments}
                    />
                ))}
            </div>
            <div className="centeringContainer">
                <Paginator paginate={paginate} totalPosts={totalPosts} newsPerPage={newsPerPage} />
            </div>
        </div>
    );
}
NewsList.propTypes = {
    news: PropTypes.instanceOf(Array),
    title: PropTypes.string.isRequired,
    error: PropTypes.string,
    paginate: PropTypes.func.isRequired,
    totalPosts: PropTypes.number,
    newsPerPage: PropTypes.number,
};
