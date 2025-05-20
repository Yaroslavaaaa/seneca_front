import React from 'react';
import '../static/css/Objects.css';

const Objects = () => (
  <div className="objects_container"  id="features">
    <div className="objects_block">
        <div className="image">
        </div>
        <div className="objects">
            <div className="images">
                <img src={require('../static/images/ob_terr.png')} alt="" className="objects_images_first" />
                <img src={require('../static/images/ob_school.png')} alt="" className="objects_images" />
                <img src={require('../static/images/ob_med.png')} alt="" className="objects_images" />
                <img src={require('../static/images/ob_pred.png')} alt="" className="objects_images" />
                <img src={require('../static/images/ob_dostyk.png')} alt="" className="objects_images" />
                <img src={require('../static/images/ob_koktobe.png')} alt="" className="objects_images" />
                <img src={require('../static/images/ob_esentai.png')} alt="" className="objects_images" />
                <img src={require('../static/images/ob_theatre.png')} alt="" className="objects_images" />
            </div>

            <div className="image_2">
            </div>
        </div>
    </div>
    <div className="osobennosti">
        <img src={require('../static/images/architecture.png')} alt="" className="architecture osobennosti_images" />
        <img src={require('../static/images/parking.png')} alt="" className="parking osobennosti_images" />
        <img src={require('../static/images/safety.png')} alt="" className="safety osobennosti_images" />
        <img src={require('../static/images/materials.png')} alt="" className="materials osobennosti_images" />
    </div>
  </div>
);

export default Objects;