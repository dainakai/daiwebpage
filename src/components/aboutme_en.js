import Helmet from 'react-helmet';

export const AboutMe_en = () => {
    return (
        <div className="aboutme">
            <Helmet>
                <title>About Me | Dai Nakai, Kyoto Institute of Technology</title>
            </Helmet>
            <h2 className='aboutme_title'>About me</h2>
            <h3 className='aboutme_title'>Profile</h3>
            <p className='aboutme_text'>
                <ur>
                    <li>Name: Dai Nakai</li>
                    <li>Degree: Master of Engineering</li>
                    <li>Research interests: Particle measurement by digital holography, observation of cloud droplet coalescence, image processing by NVIDIA GPU, application of vision models to holography</li>
                    <li>What I do on weekends: Jazz trumpet (<a href="https://www.youtube.com/watch?v=yFB-KJGaTWs">video from undergrad circle days</a>, <a href="https://www.youtube.com/watch?v=CykqvBYCX-0">more recent combo live</a>), Tale of Genji, mahjong game</li>
                </ur>
            </p>
            <h3 className='aboutme_title'>Education</h3>
            <p className='aboutme_text'>
                <table>
                    <tr>
                        <td>April 2018:</td>
                        <td>Entered the Undergraduate Program of Mechanical Engineering, Kyoto Institute of Technology</td>
                    </tr>
                    <tr>
                        <td>March 2022:</td>
                        <td> Completed the Undergraduate Program of Mechanical Engineering, Kyoto Institute of Technology</td>
                    </tr>
                    <tr>
                        <td>April 2022:</td>
                        <td>Entered the Master's Program of Mechanodesign, Kyoto Institute of Technology</td>
                    </tr>
                    <tr>
                        <td>March 2024:</td>
                        <td>Completed the Master's Program of Mechanodesign, Kyoto Institute of Technology</td>
                    </tr>
                    <tr>
                        <td>April 2024:</td>
                        <td>Entered the Doctoral Program of Engineering Design, Kyoto Institute of Technology</td>
                    </tr>
                </table>
            </p>
            <h3 className='aboutme_title'>Career</h3>
            <p className='aboutme_text'>
                <ur>
                    <li>April 2024-: The Japan Society for the Promotion of Science (JSPS)’s Research Fellowships for Young Scientists DC1.</li>
                </ur>
            </p>
            <h3 className='aboutme_title'>Academic Memberships</h3>
            <p className='aboutme_text'>
                <ur>
                    <li>日本機械学会 The Japanese Society for Mechanical Engineers <a href="https://www.jsme.or.jp/">https://www.jsme.or.jp/</a> </li>
                    <li>日本混相流学会 The Japanese Society for Multiphase Flow <a href="http://www.jsmf.gr.jp/">http://www.jsmf.gr.jp/</a></li>
                    <li>日本気象学会 The Meteorological Society of Japan <a href="https://www.metsoc.jp/">https://www.metsoc.jp/</a></li>
                </ur>
            </p>

        </div>
    );
}