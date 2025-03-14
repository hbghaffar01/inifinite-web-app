import { useState, useCallback } from 'react';
import { useGetPhotosQuery } from '../../store/photosSlice';

export const useInfinitePhotos = () => {
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = useGetPhotosQuery(page);

  const loadMore = useCallback(() => {
    if (!isFetching) {
      setPage((prev) => prev + 1);
    }
  }, [isFetching]);

  return {
    photos: data || [],
    error,
    isLoading: isFetching && page === 1,
    isFetchingMore: isFetching && page > 1,
    loadMore,
  };
};