import './style.scss';

const Banner = ({scrollToPictures}) => (
  <div className='Banner'>
    <div className='Banner-info'>
      <div className='Banner-title'>Lorem ipsum dolor sit amet</div>
      <div className='Banner-text'>Lorem ipsum dolor sit amet, consectertur adipiscing elit</div>
      <div className='Banner-button' onClick={scrollToPictures}>To Pictures</div>
    </div>
    <div className='Banner-image'><div></div></div>
  </div>
);

export default Banner;