import React, { Component } from 'react';
import { Parallax, Spring } from 'react-spring'

import './App.css';
import firebase from './firebase.js';

const content1 = (
    <div>
            <section className="content main--left">
                <h2>&nbsp;</h2>
            </section>
            <section className="content main--right">
                <h2>Profile</h2>
                <p>Former freelancer turned full time Front-end engineer and UI/UX designer. Based in San Francisco, Ca. Strong design and illustration skills backed by experience with native app, game and web development, 3D modeling / texturing, animation, flash and motion graphics. I work with SASS, HTML, Javascript, AngularJS and PHP on a daily basis. I’m always learning new software but, for now, I find these to be the most useful: Sketch, Photoshop, Sublime Text, After Effects, Illustrator, Maya, Unity and ZBrush.</p>
            </section>
            <section className="content main--left">
                <h2>&nbsp;</h2>
                <em>2013–Present</em>
            </section>
            <section className="content main--right">
                <h2>Current Job</h2>
                <em>Betabrand Corporation - UI/UX Developer</em> <a className="sample-link">See Samples &rarr;</a>
                <p>Develop an effective and unique user interface for a crowdsourced, crowdfunding clothing community and e-commerce website. Work closely with a small team of engineers to design, build and maintain our site. Coordinate with steakholders to implement experiments to optimize user funnels and experiences.</p>
                <p>Lead a team</p>
                <p>Partner with multiple stakeholders, including product managers, engineers, organizational leaders, and other designers, in drafting & brainstorming initial concepts.</p>
            </section>
            <section className="content main--left">
                &nbsp;
            </section>
            <section className="content main--right">
                <h2>Client List</h2>
            </section>
            <section className="content main--left">
                <em>2012, 2013</em>
            </section>
            <section className="content main--right">
                <em>Walt Disney Imagineering CXP, R&amp;D - Animator, Software Engineer, UX Design</em>
                <p>Worked on a small team to craft an in-park experience and motion comic for iPhone and Android. Animation, Flash development and User experience design.</p>
            </section>
            <section className="content main--left">
                <em>2012, 2013</em>
            </section>
            <section className="content main--right">
                <em>Stealthcustomseries.com - Front-End Development</em>
                <ul>
                    <li>Front-End Development</li>
                    <li>Wordpress integration</li>
                    <li>E-commerce integration</li>
                </ul>
            </section>
            <section className="content main--left">
                <em>2012, 2013</em>
            </section>
            <section className="content main--right">
                <em>StoneBlade Entertainment - UI/UX Designer</em>
                <ul>
                    <li>User experience design</li>
                    <li>Design and production of motion graphics for a mobile game</li>
                </ul>
            </section>
            <section className="content main--left">
                <em>2010-2012</em>
            </section>
            <section className="content main--right">
                <em>Cognito Comics - Technical Artist</em>
                <ul>
                    <li>Web development</li>
                    <li>App development </li>
                    <li>Pipeline development</li>
                    <li>UI/UX design</li>
                    <li>2D animation</li>
                    <li>New hire training</li>
                </ul>
            </section>
            <section className="content main--left">
                <h2>&nbsp;</h2>
                <em>2008-2013</em>
            </section>
            <section className="content main--right">
                <h2>Education</h2>
                <em>Academy of Art University, San Francisco, Ca. — Game Design</em>
            </section>
            </div>
            )


const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
    <Parallax.Layer className="text header" offset={offset} speed={0.4} onClick={onClick}>
        <div className="main">{caption}</div>
    </Parallax.Layer>
  </React.Fragment>
)



class App extends Component {

 

    constructor() {
        super();
    }
    componentDidMount() {
        const data = firebase.database();
        var content;
        
        data.ref('site').on('value', function(snapshot) {
            content = snapshot.val();
        })
    }
    
    scroll = to => this.refs.parallax.scrollTo(to)

    render() {

        return (
        <div>
        <header>
            <div className="header-content">
                <div className="header--left">
                   <a>

                         <Spring from={{ transform:'scale(1)' }} to={{ transform:'scale(2)' }}>
                        {styles =><svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792" className="logo">
                          <path d="M564.8 395.3v-38.7c0-16.1-2.4-32.1-7.5-47.3-4.9-14.8-12.1-28.9-21.5-41.2-8.8-11.6-19.3-21.9-31.3-30.3-12.2-8.6-25.9-15.3-40.2-19.8-16.6-5.3-34-7.9-51.5-7.7-15.1.1-30.1 2.2-44.7 6.4-13.9 4-27.4 9.9-39.7 17.8-12.1 7.7-23.2 17.1-32.3 28.2-9.4 11.3-16.9 24.2-22.2 37.9-5.5 14.3-8.8 29.4-9.8 44.6-.3 3.9-.4 7.7-.4 11.5v104h-85.3V0H47.2v50.8h12.9c2.7 0 5.2.5 6.6 3.1 1.4 2.7 2.2 5.9 2.6 8.9 1.3 7.7 1.3 15.7 1.3 23.6v469.2h193.1v90.2c0 14.2 1.9 28.3 5.8 42 3.7 13.1 9.4 25.6 16.6 37.1 7.2 11.3 16.1 21.8 26.3 30.5 10.4 9 22.2 16.6 34.7 22.4 15.2 7 31.6 11.5 48.2 13.3 17.1 1.9 34.5 1.2 51.3-2.2 15.5-3.1 30.7-8.4 44.6-16 13.4-7.2 25.8-16.5 36.2-27.6 10.8-11.5 19.5-24.9 25.6-39.4 6.4-15.2 10-31.4 11.3-47.8.3-4.1.5-8.4.5-12.5v-185H393.5v95h63.4v90.2c0 8.8-1.3 18-6.1 25.5-4.6 7.2-12.4 12-20.4 14.6-9.3 3-19.5 3.3-28.9 1-8.4-2.1-16.9-6.3-22.3-13.3-6.2-7.7-7.7-18.2-7.7-27.8v-90.2h.3v-95h-.3v-104c0-8.8 1.3-17.9 6.1-25.4 4.5-7.2 12.4-12 20.4-14.6 9.1-3 19.3-3.3 28.7-1 8.4 2.1 16.9 6.2 22.4 13.1 6.2 7.7 7.7 18.3 7.7 28v38.7h107.8v-.1z"/>
                        </svg>
                        }
                    </Spring>
                    </a>
                </div>
                <div className="nav header--right">
                    <a href="/"></a>
                    <a className="inactive">work</a>
                </div>
            </div>
        </header>

        <Parallax ref="parallax" pages={2} horizontal scrolling={false}>

            <Page offset={0} caption={content1} onClick={() => this.scroll(1)} />
            <Page offset={1} caption={content1} onClick={() => this.scroll(0)} />

        </Parallax>
      </div>

        );
    }
}

export default App;
