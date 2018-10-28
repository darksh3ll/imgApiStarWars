import React from 'react';


const DisplayPeoples = ({name ,height,hair_color,url}) => (

    <div className="cardPeople">
        <div className="image">
            <img src={`http://stephanejob.com/img/${imgPeople(url)}.jpg`} alt=""/>
        </div>
        <div className="content">
            <h2 className="name">{name}</h2>
            <p className="height">Height:{height}</p>
            <p className="hair_color">hair_color:{hair_color}</p>
            <button>Plus info</button>
        </div>
    </div>
);
function imgPeople(url) {
    const split= url.split("/");
    return split[5];
}


export default DisplayPeoples;