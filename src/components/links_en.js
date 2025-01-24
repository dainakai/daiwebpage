import Helmet from 'react-helmet';

export const Links_en = () => {
    return (
        <div className="links">
            <Helmet>
                <title>Links | Dai Nakai, Kyoto Institute of Technology</title>
            </Helmet>
            <h2 className='links_title'>Links</h2>
            <h3>Researchmap</h3>
            <a href="https://researchmap.jp/dainakai/" target="_blank" rel="noopener noreferrer">https://researchmap.jp/dainakai/</a>
            <h3>ResearchGate</h3>
            <a href="https://www.researchgate.net/profile/Dai-Nakai" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/profile/Dai-Nakai</a>
            <h3>ORCiD</h3>
            <a href="https://orcid.org/0000-0002-6819-2825" target="_blank" rel="noopener noreferrer">https://orcid.org/0000-0002-6819-2825</a>
            <h3>Measurement System Laboratory</h3>
            <a href="http://www.measlab.kit.ac.jp/" target="_blank" rel="noopener noreferrer">http://www.measlab.kit.ac.jp/</a>
            <h3>Kyoto Institute of Technology</h3>
            <a href="http://www.kit.ac.jp/" target="_blank" rel="noopener noreferrer">http://www.kit.ac.jp/</a>
        </div>
    );
}