import React from 'react';
const Card = ({name,id, email}) =>{
    return (
        <div className="tc bg-light-yellow dib grow pa3 ma3 bw2 shadow-5">
            <img alt="robofriends" src={`https://robohash.org/sdfasd${id}?50x50`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;