import { useQuery } from 'react-query';
import axios from 'axios';

const useGetImages = () =>
  useQuery('orders', async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=12');
    return response.data;
  });

export default useGetImages;