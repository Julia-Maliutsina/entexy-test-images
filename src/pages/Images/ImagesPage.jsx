import { useRef } from 'react';

import Layout from '../../components/Layout/Layout';
import Banner from '../../components/Images/Banner';
import AllImages from '../../components/Images/AllImages';
import useGetImages from '../../api/getImages';

import './style.scss';

const Images = () => {
  const { data, isLoading } = useGetImages();
  const picturesRef = useRef(null);
  const scrollToPictures = () => picturesRef.current.scrollIntoView() 

  return (
    <Layout>
      <Banner scrollToPictures={scrollToPictures} />
      {
        isLoading ? <p>Loading</p> : <AllImages imagesArray={data} innerRef={picturesRef} />
      }
    </Layout>
  )
};

export default Images;