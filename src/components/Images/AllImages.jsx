import './style.scss';

const AllImages = ({imagesArray}) => (
  <div className='AllImages'>
    <div className='AllImages-title'>
      All images
    </div>
    <div className='AllImages-grid'>
      {imagesArray.map((img)=><div key={img.url} className='AllImages-grid-item' style={{background: 'url(' + img.download_url + ')', backgroundSize: 'cover'}}></div>)}
    </div>
  </div>
);

export default AllImages;