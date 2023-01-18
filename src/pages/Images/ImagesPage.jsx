import Layout from 'components/Layout/Layout';
import Banner from 'components/Images/Banner';
import AllImages from 'components/Images/AllImages';

import './style.scss';

const Images = ({data, isLoading, scrollToPictures, picturesRef}) => (
    <Layout>
      <Banner scrollToPictures={scrollToPictures} />
      {
        isLoading ? <p>Loading</p> : <AllImages imagesArray={data} innerRef={picturesRef} />
      }
    </Layout>
  )

export default Images;