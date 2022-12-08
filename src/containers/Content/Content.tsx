import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {Page} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";

const Content = () => {
  const {pageName} = useParams();
  const location = useLocation();
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(false);
  // //
  // const fetchPage = useCallback( async () => {
  //   try {
  //     setLoading(true);
  //     let url = '/home'
  //     if (pageName) {
  //      url = '/' + pageName;
  //     }
  //     const pageResponse = await axiosApi.get<Page>(url +'.json');
  //     console.log(pageResponse.data);
  //     setPage(pageResponse.data);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [pageName]);



  // useEffect(() => {
  //   void fetchPage;
  // }, [fetchPage]);
  // console.log(page);
  //
  const fetchResponse = async (link: string) => {
    try {
      setLoading(true);
      const pageResponse = await axiosApi.get<Page>(link);
      setPage(pageResponse.data);
    } finally {
      setLoading(false);
    }
  }

  const fetchQuotes = useCallback(() => {
    fetchResponse('/home.json').catch(console.error);
  }, [])

  useEffect(() => {
    if (location.pathname === '/') {
      fetchQuotes();
    }
  }, [fetchQuotes, location])

  const changePage = useCallback(() => {
    fetchResponse('/' + pageName + '.json').catch(console.error);
  }, [pageName]);

  useEffect(() => {
    if (pageName) {
      changePage();
    }
  }, [pageName, changePage])

  return (
    <>
      {loading ? <Spinner/> : page &&
        <div>
          <h2>{page.title}</h2>
          <p>{page.content}</p>
        </div>
      }
    </>
  );
};

export default Content;