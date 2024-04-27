import React from 'react'

const CardHome = (props) => {

  return (
    <>
      <style>
        {`
                .card{
                    border-radius: 25px;
                    background-color: #FFF;
                    // width: 300px;
                  }
                  .image-content,
                  .card-content{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 25px 14px;
                  }
                  .image-content{
                    position: relative;
                    row-gap: 5px;
                    padding: 25px 0;
                  }
                  .overlay{
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 100%;
                    background-color: #4070F4;
                    border-radius: 25px 25px 0 25px;
                  }
                  .overlay::before,
                  .overlay::after{
                    content: '';
                    position: absolute;
                    right: 0;
                    bottom: -40px;
                    height: 40px;
                    width: 40px;
                    background-color: #4070F4;
                  }
                  .overlay::after{
                    border-radius: 0 25px 0 0;
                    background-color: #FFF;
                  }
                  .card-image{
                    position: relative;
                    height: 150px;
                    width: 150px;
                    border-radius: 50%;
                    background: #FFF;
                    padding: 3px;
                  }
                  .card-image .card-img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                    border: 4px solid #4070F4;
                  }
                  .name{
                    font-size: 16px;
                    font-weight: 500;
                    color: #333;
                  }
                  .description{
                    font-size: 14px;
                    color: #707070;
                    text-align: center;
                  }
                  .button{
                    border: none;
                    font-size: 16px;
                    color: #FFF;
                    padding: 8px 16px;
                    background-color: #4070F4;
                    border-radius: 6px;
                    margin: 14px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                  }
                  .button:hover{
                    background: #265DF2;
                  }
                  
                  .swiper-navBtn{
                    color: #6E93f7;
                    transition: color 0.3s ease;
                  }
                  .swiper-navBtn:hover{
                    color: #4070F4;
                  }
                  .swiper-navBtn::before,
                  .swiper-navBtn::after{
                    font-size: 35px;
                  }
                  .swiper-button-next{
                    right: 0;
                  }
                  .swiper-button-prev{
                    left: 0;
                  }
                  .swiper-pagination-bullet{
                    background-color: #6E93f7;
                    opacity: 1;
                  }
                  .swiper-pagination-bullet-active{
                    background-color: #4070F4;
                  }
                  
                  @media screen and (max-width: 768px) {
                    .slide-content{
                      margin: 0 10px;
                    }
                    .swiper-navBtn{
                      display: none;
                    }
                  }
                   
            `}
      </style>
      <div className="card swiper-slide  w-[170px] md:w-[250px] border border-red-600">
        <div className="image-content">
          <span className="overlay"></span>
          <div className="card-image">
            <img src={props.photo} alt="" className="card-img rounded-full" />
          </div>
        </div>

        <div className="card-content flex flex-col mt-2">
          <h2 className="name text-center">{props.name}</h2>
          <p className="description mt-2 font-semibold">{props.designation.toUpperCase()}</p>


          <ul className="flex justify-center mt-4 space-x-4">
            {props.media.facebook && (
              <li>
                <a href={props.media.facebook} target='_blank' rel="noopener noreferrer" className="text-[#39569c] hover:text-gray-900 ">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
              </li>
            )}
            {props.media.linkedin && (
              <li>
                <a href={props.media.linkedin} target='_blank' rel="noopener noreferrer" className="text-[#00acee] hover:text-gray-900 ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-6 h-6'><path fill="#0078d4" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z" /><path d="M30,35v-9c0-1.103-0.897-2-2-2s-2,0.897-2,2v9h-6V18h6v1.027C27.04,18.359,28.252,18,29.5,18	c3.584,0,6.5,2.916,6.5,6.5V35H30z M13,35V18h2.966C14.247,18,13,16.738,13,14.999C13,13.261,14.267,12,16.011,12	c1.696,0,2.953,1.252,2.989,2.979C19,16.733,17.733,18,15.988,18H19v17H13z" opacity=".05" /><path d="M30.5,34.5V26c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v8.5h-5v-16h5v1.534	c1.09-0.977,2.512-1.534,4-1.534c3.309,0,6,2.691,6,6v10H30.5z M13.5,34.5v-16h5v16H13.5z M15.966,17.5	c-1.429,0-2.466-1.052-2.466-2.501c0-1.448,1.056-2.499,2.511-2.499c1.436,0,2.459,1.023,2.489,2.489	c0,1.459-1.057,2.511-2.512,2.511H15.966z" opacity=".07" /><path fill="#fff" d="M14,19h4v15h-4V19z M15.988,17h-0.022C14.772,17,14,16.11,14,14.999C14,13.864,14.796,13,16.011,13	c1.217,0,1.966,0.864,1.989,1.999C18,16.11,17.228,17,15.988,17z M35,24.5c0-3.038-2.462-5.5-5.5-5.5	c-1.862,0-3.505,0.928-4.5,2.344V19h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4C35,34,35,24.921,35,24.5z" /></svg>
                </a>
              </li>
            )}
            {props.media.instagram && (
              <li>
                <a href={props.media.instagram} target='_blank' rel="noopener noreferrer" className="text-[#00acee] hover:text-gray-900 ">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
              </li>
            )}
          </ul>




        </div>
      </div >
    </>
  )
}

export default CardHome