import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { loadMoreLatest } from '../store/actions/news';
import s from '../components/Main.module.css';
import NewsList from '../components/Secondary/NewsList';
import Preloader from '../components/partials/Preloader';

export default function LatestNews() {
    const latestNews = useSelector(store => store?.news?.latestNews || []);
    const pages = useSelector(store => store?.news.pages || 0);
    const { latestNewsError } = useSelector(store => store?.errors || {});
    const { isDataLoading } = useSelector(store => store?.loader || {});
    const dispatch = useDispatch();
    const { number } = useParams();
    const [currentPage, setCurrentPage] = useState(number);
    const [newsPerPage] = useState(10);

    useEffect(() => {
        dispatch(loadMoreLatest({ limit: newsPerPage, page: currentPage }));
    }, [dispatch, newsPerPage, currentPage]);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className={s.main}>
            {isDataLoading ?
                <Preloader /> : (
                    <NewsList
                        news={latestNews} newsPerPage={newsPerPage}
                        totalPosts={pages}
                        paginate={paginate} error={latestNewsError} title="Latest News"
                    />
                )}
        </div>
    );
}
