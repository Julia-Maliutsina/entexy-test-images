import { useRef } from 'react';

import useGetImages from 'api/getImages';

import Images from './ImagesPage';

const ImagesContainer = () => {
  const { data, isLoading } = useGetImages();
  const picturesRef = useRef(null);
  const scrollToPictures = () => picturesRef.current.scrollIntoView() 

  return (
    <Images data={data} isLoading={isLoading} scrollToPictures={scrollToPictures} picturesRef={picturesRef} />
  )
};

export default ImagesContainer;

