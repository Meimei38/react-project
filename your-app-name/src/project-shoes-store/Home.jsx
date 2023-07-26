import React, { Component } from 'react';
const style = {
	image:{
		width: '645px',
		height: '600px'
	}
}

export default class Home extends Component {
  render() {
    return (
      <div className='m-1'>
        <div
          id='carouselExampleIndicators'
          className='carousel slide'>
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='1'
              aria-label='Slide 2'></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='2'
              aria-label='Slide 3'></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                src='https://converse.ca/media/wysiwyg/cms_upload/home/1-col/06-27/D-Converse-06-15-23-GBL-Refresh-2-HP_new.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://www.converse.com/on/demandware.static/-/Library-Sites-ConverseEU01SharedLibrary/default/dw4c284089/firstspirit/converse-uk/media/homepage_1/2023_fall/desktop_33/D-CONVERSE-07-20-23-GBL-CBY-HP-NEW-PRINTS-BY-YOU.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://converse.ca/media/wysiwyg/cms_upload/home/1-col/06-27/D-Converse-06-15-23-GBL-Refresh-2-update.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='prev'>
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='next'>
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
		<br/>
		<div className='display'>
			<div className='row text-center'>
				<h4>New Arrivals</h4>
			</div>
			<br />
			<div className='row'>
				<div className='col-6 mx-0'>
					<img style={style.image} src='https://converse.ca/media/wysiwyg/cms_upload/home/1-col/3-21/D-2-16-January-Refresh-2-P2-Shop-Men.jpg' />
				</div>
				<div className='col-6 mx-0 px-0'>
				<img style={style.image} src='https://converse.ca/media/wysiwyg/cms_upload/home/1-col/3-21/D-2-16-January-Refresh-2-P2-Shop-Women-Backup.jpg' />
				</div>
			</div>
			<br />
			<div className='row text-center'>
				<h4>Summer Collections</h4>
			</div>
			<br />
			<div className='row'>
				<div className='col-6 mx-0'>
					<img style={style.image} src='https://images.vans.com/is/image/VansBrand/FA23_BTS_Sustain_690x582-v2?$fullres$' />
				</div>
				<div className='col-6 mx-0 px-0'>
				<img style={style.image} src='https://images.vans.com/is/image/VansBrand/FA23_UltrarangeNeoVR3_MobileHero_690x582px_Primary-1?$fullres$' />
				</div>
			</div>


		</div>
      </div>
    );
  }
}
