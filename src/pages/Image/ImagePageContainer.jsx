import { useParams } from 'react-router-dom';

import useGetImage from 'api/getImage';

import Image from './ImagePage';

const ImageContainer = () => {
  const { imageId } = useParams();
  const { isLoading, data } = useGetImage(imageId);
  
  return (
    <Image data={data} isLoading={isLoading} /> 
  )
};

export default ImageContainer;