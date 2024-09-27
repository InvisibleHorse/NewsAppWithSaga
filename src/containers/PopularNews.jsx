import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import s from '../components/Test.module.css';
import NewsList from '../components/Secondary/NewsList';
import { loadMorePopular } from '../store/actions/news';
import Preloader from '../components/partials/Preloader';

export default function PopularNews() {
    const { popularNews } = useSelector(store => store?.news || {});
    const pages = useSelector(store => store?.news.pages || 0);
    const { popularNewsError } = useSelector(store => store?.errors || {});
    const { isDataLoading } = useSelector(store => store?.loader || {});
    const dispatch = useDispatch();
    const { number } = useParams();

    const [currentPage, setCurrentPage] = useState(number);
    const [newsPerPage] = useState(10);

    useEffect(() => {
        dispatch(loadMorePopular({ limit: newsPerPage, page: currentPage }));
    }, [dispatch, newsPerPage, currentPage]);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className={s.main}>
            {isDataLoading ?
                <Preloader /> : (
                    <NewsList
                        news={popularNews}
                        error={popularNewsError}
                        newsPerPage={newsPerPage}
                        totalPosts={pages}
                        paginate={paginate}
                        title="Popular News"
                    />
                )}
        </div>
    );
}
