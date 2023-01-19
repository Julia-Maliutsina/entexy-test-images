import {Layout} from 'components/Layout';
import ImageInfo from 'components/Image/ImageInfo';

import './style.scss';

const Image = ({data, isLoading}) => (
  <Layout>
    {isLoading ? <p>Loading...</p> : <ImageInfo image={data} />}
  </Layout> 
);

export default Image;