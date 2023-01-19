import { useQuery } from 'react-query';
import axios from 'axios';

const useGetImage = (ID) =>
  useQuery('image', async () => {
    const response = await axios.get(`https://picsum.photos/id/${ID}/info`);
    return response.data;
  });

export default useGetImage;



