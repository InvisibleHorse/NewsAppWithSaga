import React from 'react';
import PropTypes from 'prop-types';
import s from '../Main.module.css';

export default function NewsItem(props) {
    const date = new Date(props.date).toLocaleDateString('en-US');
    return (
        <div className={`${s.card} card`}>
            <div className={`${s.cBody} card - body`}>
                <h5 className="card-title"><a className={s.link} href={props.url}>{props.title || 'Some post'}</a></h5>
                <p className={`${s.textOutline} card-text`}>
                    <span className={s.span}>{props.points || 0} points</span>
                    |
                    <span className={s.span}>{props.comments || 0} comments</span>
                    |
                    <span className={s.span}>{date || 'yesterday' }</span>
                    |
                    <span className={s.span}>{props.author || 'Author'}</span>
                </p>
            </div>
        </div>
    );
}
NewsItem.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    points: PropTypes.number,
    comments: PropTypes.number,
    date: PropTypes.string,
    url: PropTypes.string,
};
