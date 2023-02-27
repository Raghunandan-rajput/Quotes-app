import React, { useContext,useEffect } from 'react'
import QuoteContext from '../Context/QuoteContext';
import {getData}  from '../Context/QuoteAction'

function Quote() {
    const {quoteData,dispatch} =useContext(QuoteContext)

    const handleClick=async()=>
        {
           const data=await getData()
           dispatch({
            type:"GET_DATA",
            payload:data
           })
        }   
 useEffect(()=>{
  handleClick()
 },[])

    if(!quoteData){

      return (
        <div>
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          &nbsp;&nbsp;
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }

  return (
    <div className="main-quote d-flex justify-content-center align-items-center position-absolute bg-success">
      <div className="card custom-card">
        <div className="card-header text-center fs-3 fw-bold">
          Thought of the day
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0 ">
            <p className="custom-para">{quoteData.content}</p>
            <footer className="blockquote-footer  float-end mt-4">
              {quoteData.author}{" "}
              <cite title="Source Title">{quoteData.tags[0]}</cite>
            </footer>
            <button
              className="btn btn-primary w-100 mt-2 getmore-btn"
              onClick={() => handleClick()}
            >
              Get More Thought
            </button>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Quote