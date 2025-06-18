import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from '../components/Test.module.css';
import NewsItem from '../components/Secondary/NewsItem';
import { loadMoreLatest } from '../store/actions/news';

const getDayName = dayIndex => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex] || 'Today';
};

const getDateSuffix = day => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
};

export default function Home() {
    const date = new Date();
    const dayName = getDayName(date.getDay());
    const dayOfMonth = date.getDate();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const monthName = monthNames[date.getMonth()];
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loadMoreLatest({ limit: 10, page: 1 }));
    }, [dispatch]);

    const latestNews = useSelector(store => store?.news?.latestNews || []);

    const featuredNews = React.useMemo(() =>
        [...latestNews]
            .sort(() => 0.5 - Math.random()).slice(0, 3),
        [latestNews]
    );

    return (
        <div className={`${s.main} content`}>
            <h1 className={`${s.title} ${s.textOutline}`}>
                {dayName}, {dayOfMonth}{getDateSuffix(dayOfMonth)} of {monthName}
            </h1>

            <div className="newsComponent">
                <h2>Featured News</h2>
                <div className="cardContainer">
                    {featuredNews.map(story => (
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
            </div>
        </div>
    );
}
