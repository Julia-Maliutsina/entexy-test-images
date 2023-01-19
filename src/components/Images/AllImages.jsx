import { Link } from 'react-router-dom';

import './style.scss';

const AllImages = ({imagesArray, innerRef}) => (
  <div className='AllImages' ref={innerRef}>
    <div className='AllImages-title'>
      All images
    </div>
    <div className='AllImages-grid'>
      {imagesArray.map((img)=><Link to={`${img.id}`} key={img.id} ><div  className='AllImages-grid-item' style={{background: 'url(' + img.download_url + ')', backgroundSize: 'cover'}}></div></Link>)}
    </div>
  </div>
);

export default AllImages;