import Helmet from 'react-helmet';

export const ContactMe = () => {
    return (
        <div className="contactme">
            <Helmet>
                <title>Contact Me | 中井 大 (Dai Nakai) 京都工芸繊維大学大学院</title>
            </Helmet>
            <h2 className='contactme_title'>Contact</h2>
            <p className='contactme_text'>If you want to contact me, please email at <a href="mailto:d4821002@edu.kit.ac.jp">d4821002 at edu.kit.ac.jp</a> (please replace 'at' with '@')</p>
            {/* ./home/topimage_2023_0614.jpg をページサイズの90%で表示。画像下部にコメント
            <figure className="contactmeimg">
                <img src="/img/home/topimage_2023_0614.jpg" alt="topimage" width="90%" />
                <figcaption className="figcap">Lovely scenery of the Kamo River in Kyoto</figcaption>
            </figure> */}
        </div>
    );
}