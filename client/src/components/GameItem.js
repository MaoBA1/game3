import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { MdArrowForwardIos } from 'react-icons/md';
import '../index.css'
import { useNavigate } from 'react-router-dom';

function GameItem({ game }) {
    const {
        _id,
        gameName,
        gamePrice,
        gameDescription,
        gameGenre,
        gameImage
    } = game;
    const navigate = useNavigate();
    return (  
        <div style={{
            margin:"10px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            padding:"10px",
            paddingTop:"20px",
            borderRadius:"5px",
            height:"350px",
            justifyContent:"center"
        }} className='game-item-container scal-grow-up' onClick={() => navigate("/review-details/" + _id)}>
            <div style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",                 
            }}>
                <div style={{ position:"relative", width:"350px", height:"210px" }}>
                    <div className='placholder' style={{ 
                        zIndex:-1, 
                        top:'0',
                        width:"350px",
                        height:"210px",
                        position:"absolute"
                    }}/>
                    <Image
                        src={gameImage[0].downloadUrl}
                        style={{ width:"100%", height:"100%", objectFit:"fill", zIndex:1 }}
                    />
                </div>

                <div style={{ 
                    width:"180px",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    marginTop:"10px"
                }}>
                    <label style={{
                        textAlign:"center",
                        fontSize:"18px",
                        fontWeight:"bold",
                        color:"#FFFFFF",
                    }}>
                        {gameName}
                    </label>

                    <label style={{
                        textAlign:"center",
                        fontSize:"14px",
                        fontWeight:"bold",
                        color:"#FFFFFF",
                    }}>
                        {gameGenre}
                    </label>
                    <label style={{
                        textAlign:"center",
                        color:"#FFFFFF",
                        fontSize:"14px",
                        fontWeight:"bold"
                    }}>
                        {"$ " + gamePrice.toFixed(2)}
                    </label>
                </div>
            </div>
        </div>
    );
}

export default GameItem;