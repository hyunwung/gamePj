import React from 'react'
import "./Notice.scss"
import { AiFillHome ,AiFillStar ,AiFillEye} from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import like from "../../assets/heart.png"
import {Link} from "react-router-dom"

const Notice = () => {
  return (
    <div className='notice'>
      <div className='notice-container'>
        <div className='notice-title'>
          <AiFillHome style={{fontSize:"25px" , margin:"0 8px 4px 8px"}}></AiFillHome><h2 className='notice-span'>공지사항(2)</h2>
        </div>
        <hr className='notice-line'></hr>

        <div className='notice-box'>
          <div className='notice-box-contain'>
            <div className="notice-left">
              <AiFillStar style={{margin:"0 5px 0 0",fontSize:"25px",color:"rgb(255, 221, 89)"}}></AiFillStar>
              <Link to="/main"><h3>땡떙떙이가 변경되었습니다.</h3></Link>
            </div>
            <div className="notice-right">
              <span className="notice-date">2022. 10. 15</span>
              <img src={like} className="notice-like"></img>
              <span className="notice-like-count">8</span>
              <AiFillEye style={{margin:"0 4px 0 4px",fontSize:"24px",color:"gray",float:"right"}}></AiFillEye>
              <span className="notice-view">253</span>
            </div>
          </div>
          <hr className='notice-line'></hr>
        </div>

        <div className='notice-box'>
          <div className='notice-box-contain'>
            <div className="notice-left">
              <AiFillStar style={{margin:"0 5px 0 0",fontSize:"25px",color:"rgb(255, 221, 89)"}}></AiFillStar>
              <Link to="/main"><h3>땡떙떙이가 변경되었습니다.</h3></Link>
            </div>
            <div className="notice-right">
              <span className="notice-date">2022. 10. 15</span>
              <img src={like} className="notice-like"></img>
              <span className="notice-like-count">8</span>
              <AiFillEye style={{margin:"0 4px 0 4px",fontSize:"24px",color:"gray",float:"right"}}></AiFillEye>
              <span className="notice-view">253</span>
            </div>
          </div>
          <hr className='notice-line'></hr>
        </div>

        <div className='notice-box'>
          <div className='notice-box-contain'>
            <div className="notice-left">
              <AiFillStar style={{margin:"0 5px 0 0",fontSize:"25px",color:"rgb(255, 221, 89)"}}></AiFillStar>
              <Link to="/main"><h3>땡떙떙이가 변경되었습니다.</h3></Link>
            </div>
            <div className="notice-right">
              <span className="notice-date">2022. 10. 15</span>
              <img src={like} className="notice-like"></img>
              <span className="notice-like-count">8</span>
              <AiFillEye style={{margin:"0 4px 0 4px",fontSize:"24px",color:"gray",float:"right"}}></AiFillEye>
              <span className="notice-view">253</span>
            </div>
          </div>
          <hr className='notice-line'></hr>
        </div>
      </div>
      <FiMoreHorizontal style={{fontSize:"24px", margin:"20px 0 0 470px"}}></FiMoreHorizontal>
    </div>
  )
}

export default Notice