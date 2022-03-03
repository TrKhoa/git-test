import React from 'react';

function Footer(){
  return(
    <footer className="bg-primary mt-5 pt-5 pb-4 px-auto">
      <div className="container">
        <div className="row text-left">

          {/* Cột Contact */}
          <div className="col-12 col-md-3 mx-auto">
            <h2>Our address</h2>
            <p>121, Clear Water Bay Road<br />
            Clear Water Bay Road, Kowloon HONGKONG</p>
            <i className="fa fa-phone" aria-hidden="true"> +852 1234 5678</i><br />
            <i className="fa fa-fax" aria-hidden="true"> +852 1234 5678</i><br />
            <i className="fa fa-envelope" aria-hidden="true"> khoatmtfx14250@funix.edu.vn</i>
          </div>

          {/* Cột Social Contact */}
          <div className="col-12 col-md-3 mx-auto align-self-center">
            <i className="fa fa-facebook-official fa-3x" aria-hidden="true" />
            <i className="fa fa-google-plus-square fa-3x " aria-hidden="true" />
            <i className="fa fa-twitter-square fa-3x" aria-hidden="true" />
            <i className="fa fa-youtube-square fa-3x " aria-hidden="true" />
            <i className="fa fa-envelope-o fa-3x" aria-hidden="true" />
          </div>

        </div>
        {/* Copyright */}
        <div className="row justify-content-center">
          <p>Copyright: Trần Mạc Tư Khoa</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
