import React from 'react';

function Left() {
    return (
        <>
            <div className='header-task'></div>
            <div className='user-profile-area'>
                <div className='side-wrapper'>
                    <div className='user-profile'>
                        <img src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png" alt="" className="user-photo" />
                        <div className='user-name'>Saravanakumar K</div>
                        <div className='user-des'>UI Developer</div>
                        <div className='user-email'>iamsarank@gmail.com</div>
                    </div>
                </div>
                <div className='side-wrapper'>
                    <div className='social-link'>
                        <a href={"https://github.com/iamsarank"} target={'_blank'}><img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" className='s-url' /></a>
                        <a href={"https://www.linkedin.com/in/saravanakumar-k-460a8114b/"}target={'_blank'}><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" className='s-url' /></a>
                        <a href={"https://www.hackerrank.com/iamsarank"}target={'_blank'}><img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png" className='s-url' /></a>
                        <a href={"mailto:iamsarank@gmail.com"}target={'_blank'}><img src="https://cdn-icons-png.flaticon.com/128/6806/6806987.png" className='s-url' /></a>
                        <a href={"tel:+919047396553"}target={'_blank'}><img src="https://cdn-icons-png.flaticon.com/512/552/552489.png" className='s-url' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Left;