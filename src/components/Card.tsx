import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { PhotoItem } from '../store/photosSlice';
import { fetchImages } from '../bridge/utils/helper';

interface CardProps {
  photo: PhotoItem;
  index: number;
}

const Card: React.FC<CardProps> = ({ photo, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for the tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform the mouse position to rotation values
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-lg shadow-lg p-4 mb-4 overflow-hidden"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <motion.img
            src={fetchImages(index)}
            alt={photo.title}
            className="w-16 h-16 rounded-md object-cover"
            style={{ transformStyle: "preserve-3d", z: 10 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <motion.p 
            className="text-sm font-medium text-gray-900 truncate"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {photo.title}
          </motion.p>
          <motion.p 
            className="text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Photo ID: {photo.id}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;