import { useParams } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import ImageInfo from '../../components/Image/ImageInfo';
import useGetImage from '../../api/getImage';

import './style.scss';

const Image = () => {
   const { imageId } = useParams();
   const { isLoading, data } = useGetImage(imageId);
   return (
    <Layout>
        {isLoading ? <p>Loading...</p> : <ImageInfo image={data} />}
    </Layout> 
   )
};

export default Image;