import React from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import t1 from '../Assets/hero-sldArtboard-2.jpeg'


const Testimonial = () => {
  return (
    <div className='test'>

        <div className="testimonial">

            <h2>People love to talk about us</h2>

            <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={2}

            pagination={{ clickable: true }}
            // navigation={true}
            autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            }}
            style={{ zIndex: 1 }}
            >
            <SwiperSlide>
            <section className='test-c'>

                <img src={t1} alt="" />

                <div className='t-c'>

                    <p>"Actually, I really enjoy the service rendered by this prestigious HMO. You are second to none. Your responses to calls and issues are good. Please keep it up. The delivery we had on 26-July-2018 was fine with the grace of God. Thank you!"</p>
                    <h5>Ocean Express Network</h5>

                </div>

                

            </section>

            </SwiperSlide>


            <SwiperSlide>
            <section className='test-c'>

                <img src={t1} alt="" />

                <div className='t-c'>

                    <p>"Actually, I really enjoy the service rendered by this prestigious HMO. You are second to none. Your responses to calls and issues are good. Please keep it up. The delivery we had on 26-July-2018 was fine with the grace of God. Thank you!"</p>
                    <h5>Ocean Express Network</h5>

                </div>

                

            </section>

            </SwiperSlide>


            <SwiperSlide>
                <section className='test-c'>

                    <img src={t1} alt="" />

                    <div className='t-c'>

                        <p>"Actually, I really enjoy the service rendered by this prestigious HMO. You are second to none. Your responses to calls and issues are good. Please keep it up. The delivery we had on 26-July-2018 was fine with the grace of God. Thank you!"</p>
                        <h5>Ocean Express Network</h5>

                    </div>

                    

                </section>
            </SwiperSlide>


            <SwiperSlide>
                <section className='test-c'>

                    <img src={t1} alt="" />

                    <div className='t-c'>

                        <p>"Actually, I really enjoy the service rendered by this prestigious HMO. You are second to none. Your responses to calls and issues are good. Please keep it up. The delivery we had on 26-July-2018 was fine with the grace of God. Thank you!"</p>
                        <h5>Ocean Express Network</h5>

                    </div>

                    

                </section>
            </SwiperSlide>


            <SwiperSlide>
                <section className='test-c'>

                    <img src={t1} alt="" />

                    <div className='t-c'>

                        <p>"Actually, I really enjoy the service rendered by this prestigious HMO. You are second to none. Your responses to calls and issues are good. Please keep it up. The delivery we had on 26-July-2018 was fine with the grace of God. Thank you!"</p>
                        <h5>Ocean Express Network</h5>

                    </div>

                    

                </section>

            </SwiperSlide>

            <SwiperSlide>
                <section className='test-c'>

                    <img src={t1} alt="" />

                    <div className='t-c'>

                        <p>"Actually, I really enjoy the service rendered by this prestigious HMO. You are second to none. Your responses to calls and issues are good. Please keep it up. The delivery we had on 26-July-2018 was fine with the grace of God. Thank you!"</p>
                        <h5>Ocean Express Network</h5>

                    </div>

                    

                </section>

            </SwiperSlide>


            <SwiperSlide>
                <section className='test-c'>

                    <img src={t1} alt="" />

                    <div className='t-c'>

                        <p>"Actually, I really enjoy the service rendered by this prestigious HMO. You are second to none. Your responses to calls and issues are good. Please keep it up. The delivery we had on 26-July-2018 was fine with the grace of God. Thank you!"</p>
                        <h5>Ocean Express Network</h5>

                    </div>

                    

                </section>

            </SwiperSlide>


        </Swiper>

        </div>

        

        
    </div>
  )
}

export default Testimonial