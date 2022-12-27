import React from 'react';
import { Alert, ProgressBar, Button } from 'react-bootstrap';

function Left() {
    const html = 90;
    const css = 95;
    const js = 85;
    const bootstrap = 90;
    const react = 80;
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
                    <div className='project-title'>Coding</div>
                    <div className='project-name'>
                        <ProgressBar className='project-space' variant="success" animated now={html} label={'HTML  -  ' + `${html}%`} />
                        <ProgressBar className='project-space' animated now={css} label={'CSS  -  ' + `${css}%`} />
                        <ProgressBar className='project-space' variant="info" animated now={js} label={'JAVA SCRIPT  -  ' + `${js}%`} />
                        <ProgressBar className='project-space' variant="warning" animated now={bootstrap} label={'BOOTSTRAP  -  ' + `${bootstrap}%`} />
                        <ProgressBar className='project-space' variant="danger" animated now={react} label={'REACT JS  -  ' + `${react}%`} />
                    </div>
                </div>
                <div className='side-wrapper'>
                    <div className='project-title'>Knowledge</div>
                    <div className='project-name'>
                        <div class="project-department">Data Structure, C++, Php, React Js</div>
                        <div class="project-department">Bootstrap, Materialize</div>
                        <div class="project-department">GIT knowledge</div>
                    </div>
                </div>
                <div className='side-wrapper'>
                    <div className='social-link'>
                        <Alert.Link href={"https://github.com/iamsarank"} target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" className='s-url' /></Alert.Link>
                        <Alert.Link href={"https://www.linkedin.com/in/saravanakumar-k-460a8114b/"} target='_blank'><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" className='s-url' /></Alert.Link>
                        <Alert.Link href={"https://www.hackerrank.com/iamsarank"} target='_blank'><img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png" className='s-url' /></Alert.Link>
                        <Alert.Link href={"mailto:iamsarank@gmail.com"} target='_blank'><img src="https://cdn-icons-png.flaticon.com/128/6806/6806987.png" className='s-url' /></Alert.Link>
                        <Alert.Link href={"tel:+919047396553"} target='_blank'><img src="https://cdn-icons-png.flaticon.com/512/552/552489.png" className='s-url' /></Alert.Link>
                    </div>
                </div>
                <div className='side-wrapper tnc'>
                <Alert.Link href="" className='cv-link'>Download CV</Alert.Link>
                </div>
            </div>
        </>
    )
}

export default Left;