import './style.scss';

const ImageInfo = ({image}) => (
  <div className='Image'>
    <div className='Image-picture' /* style={{background: 'url(' + image.download_url + ') no-repeat', backgroundSize: 'cover'}} */> 
    <img src={image.download_url} alt={image.author} />
    </div>
    <div className='Image-info'>
      <div className='Image-info-title'>Details</div>
      <div className='Image-info-detail'>

        <div>
          <div className='Image-info-detail-titles'>Resolution</div>
          <div className='Image-info-detail-text'>{image.width} x {image.height}</div>
        </div>
        <div>
          <div className='Image-info-detail-titles'>Author</div>
          <div className='Image-info-detail-text'>{image.author}</div>
        </div>
        <div>
          <div className='Image-info-detail-titles'>ID</div>
          <div className='Image-info-detail-text'>{image.id}</div>
        </div>

      </div>
    </div>
  </div>
);

export default ImageInfo;