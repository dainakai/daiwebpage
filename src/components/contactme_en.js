import Helmet from 'react-helmet';

export const ContactMe_en = () => {
    return (
        <div className="contactme">
            <Helmet>
                <title>Contact Me | Dai Nakai, Kyoto Institute of Technology</title>
            </Helmet>
            <h2 className='contactme_title'>Contact</h2>
            <p className='contactme_text'>If you want to contact me, please email at <a href="mailto:d4821002@edu.kit.ac.jp">d4821002 at edu.kit.ac.jp</a> (please replace 'at' with '@')</p>
        </div>
    );
}