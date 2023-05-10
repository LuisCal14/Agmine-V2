import React, { useState }  from 'react'
import Balaguer from '../../assets/images/J.Balaguer.jpg'
import Trujillo from '../../assets/images/trujillo.jpg'
import Bosch from '../../assets/images/Bosch.jpg'
import Intervencion from '../../assets/images/intervencion.jpg'
import Geografia from '../../assets/images/geografia.jpg'
import {Link} from 'react-router-dom'
import './QuizMenu.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function QuizM() {
    return (
        <div className='menu'>
            <div className='menu-container'>
                <h1 className='menu-h1'>seleccione el modo:</h1>
                
                <div className='menu__options-container'>
                    <Swiper className='carrusel'
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={15}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        style={{
                            "--swiper-pagination-color": "#9bf2ea",
                            "--swiper-navigation-color": "#9bf2ea",
                          }}
                        >
                        <SwiperSlide className='carrusel-option'>
                            <div className='quiz-option'>
                                <img src={Trujillo} alt="quiz" />
                                <Link to="/QuizTrujillo" target='_blank'>
                                    <button type='button' className='custom__buttonR'>Entrar</button>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='carrusel-option' >
                            <div className='quiz-option'>
                                <img src={Balaguer} alt="maps" />
                                <Link to="/QuizBalaguer" target='_blank'>
                                    <button type='button' className='custom__buttonR'>Entrar</button>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='carrusel-option'>
                            <div className='quiz-option'>
                                <img src={Bosch} alt="maps" />
                                <Link to="/QuizBosch" target='_blank'>
                                    <button type='button' className='custom__buttonR'>Entrar</button>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='carrusel-option' >
                            <div className='quiz-option'>
                                <img src={Intervencion} alt="quiz" />
                                <Link to="/QuizIntervencion" target='_blank'>
                                    <button type='button' className='custom__buttonR'>Entrar</button>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='carrusel-option'>
                            <div className='quiz-option'>
                                <img src={Geografia} alt="quiz" />
                                <Link to="/QuizGeografia" target='_blank'>
                                    <button type='button' className='custom__buttonR'>Entrar</button>
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
                <Link className='link' to="/games">Volver al menu</Link>
            </div>
        </div>
    )
} 

export default QuizM;

/*
                    <div className='maps-option'>
                        <img src={Balaguer} alt="maps" />
                        <Link to="/QuizBalaguer">
                            <button type='button' className='custom__buttonR'>Entrar</button>
                        </Link>
                    </div>
                    
                    <div className='maps-option'>
                        <img src={Trujillo} alt="quiz" />
                        <Link to="/QuizTrujillo">
                            <button type='button' className='custom__buttonR'>Entrar</button>
                        </Link>
                    </div>
                
                </div>
                <div className='menu__options-container'>
                    
                    <div className='maps-option'>
                        <img src={Bosch} alt="maps" />
                        <Link to="/QuizBosch">
                            <button type='button' className='custom__buttonR'>Entrar</button>
                        </Link>
                    </div>
                    
                    <div className='maps-option'>
                        <img src={Intervencion} alt="quiz" />
                        <Link to="/QuizIntervencion">
                            <button type='button' className='custom__buttonR'>Entrar</button>
                        </Link>
                    </div>
                

*/