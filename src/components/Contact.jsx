import React from 'react';
import { openingHours, socials, storeInfo } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';


const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut'
        });

        timeline.from(titleSplit.words, {
            opacity: 0, yPercent: 100, stagger: 0.02
        }).from('#contact h3, #contact p', {
            opacity: 0, yPercent: 100, stagger: 0.02
        }).to('#f-right-leaf', {
            y: '-50', duration: 1, ease: 'power1.inOut'
        }).to('#f-left-leaf', {
            y: '50', duration: 1, ease: 'power1.inOut'
        }, '<');
    }, []);

    return (
        <footer id='contact'>
            <img src="/images/footer-left-leaf.png" alt="left-leaf" id='f-left-leaf' />
            <img src="/images/footer-right-leaf.png" alt="right-leaf" id='f-right-leaf' />

            <div className='content'>
                <h2>Esta no es una web oficial</h2>
                <div>
                    <h3>{storeInfo.heading}</h3>
                    <p>{storeInfo.address}</p>
                    <p>{storeInfo.contact.phone}</p>
                    <p>{storeInfo.contact.email}</p>
                    <div className='mt-4 rounded-2xl overflow-hidden'>
                        <iframe
                            width="100%"
                            height="250"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?q=Paseo%20Mar%C3%ADtimo%20de%20Benalm%C3%A1dena&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        ></iframe>
                    </div>
                </div>


                <div>
                    <h3>Contáctame</h3>
                    <p>+34 663 56 61 32</p>
                    <p>sangiovannijuanmarcos@gmail.com</p>
                </div>

                <div>
                    <h3>Abierto todos los días</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Redes Sociales</h3>
                    <div className='flex-center gap-5'>
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} target='_blank' rel='noopener noreferrer' aria-label={social.name}>
                                <img src={social.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;