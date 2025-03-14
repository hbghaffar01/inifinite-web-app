import React, { useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import LoadingSpinner from './LoadingSpinner';
import { useInfinitePhotos } from '../bridge/hooks/useInfinitePhotos';

const InfiniteScrollList: React.FC = () => {
  const { photos, error, isLoading, isFetchingMore, loadMore } = useInfinitePhotos();
  
  // Using intersection observer to detect when we reach the bottom
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  React.useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        Error: {error instanceof Error ? error.message : 'Something went wrong'}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-red-600 mb-6">
        Infinite scroll app by Haseeb Ghaffar
      </h1>
      
      <div className="space-y-4">
        {photos.map((photo, index) => (
          <Card key={`${photo.id}-${index}`} photo={photo} index={index} />
        ))}
      </div>
      
      {/* Sentinel element for infinite scroll detection */}
      {photos.length > 0 && (
        <div ref={ref} className="h-10 flex justify-center items-center">
          {isFetchingMore && <LoadingSpinner />}
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollList;