import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const Booking = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('¡Nos vemos pronto en la terraza!');
    };

    useGSAP(() => {
        const bookingTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#booking',
                start: 'top 80%',
            }
        });

        bookingTimeline.from('#booking h2', {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut'
        }).from('.booking-form input, .booking-form button', {
            yPercent: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power1.inOut',
            stagger: 0.1
        }, '-=0.5');
    }, []);

    return (
        <section id="booking" className='relative w-full min-h-dvh flex-center flex-col 2xl:px-0 px-5 py-20 radial-gradient'>
            <img src="/images/footer-left-leaf.png" alt="left-leaf" className='absolute bottom-0 left-0 pointer-events-none lg:w-fit w-1/3' />
            <img src="/images/footer-right-leaf.png" alt="right-leaf" className='absolute top-0 right-0 pointer-events-none hidden lg:block' />

            <div className='z-10'>
                <h2 className='lg:text-8xl text-5xl font-modern-negra mb-16 text-center'>Reservar Mesa</h2>

                <form onSubmit={handleSubmit} className="booking-form">
                    <input type="text" name="name" placeholder="Nombre" required />
                    <input type="number" name="people" placeholder="Número de personas" min={1} required />
                    <input type="date" name="date" required />
                    <input type="time" name="time" required />
                    <input type="tel" name="phone" placeholder="Teléfono de contacto" required />
                    <button type="submit">Reservar Mesa</button>
                </form>
            </div>
        </section>
    );
};

export default Booking;