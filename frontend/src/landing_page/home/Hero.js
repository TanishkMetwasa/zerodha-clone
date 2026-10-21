import React from 'react';

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero' className='mb-5' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <div>
                    <button className='btn btn-primary fs-5 rounded-pill mt-3 mb-5 p-2 px-5'>Signup Now</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;    
