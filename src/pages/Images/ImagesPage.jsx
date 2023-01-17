import Layout from '../../components/Layout/Layout';
import Banner from '../../components/Images/Banner';
import AllImages from '../../components/Images/AllImages';
import useGetImages from '../../api/getImages';

import './style.scss';

const Images = () => {

  const { data, isLoading } = useGetImages();
  return (
    <Layout>
      <Banner />
      {
        isLoading ? <p>Loading</p> : <AllImages imagesArray={data} />
      }
    </Layout>
  )
};

export default Images;