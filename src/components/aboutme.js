import Helmet from 'react-helmet';

export const AboutMe = () => {
    return (
        <div className="aboutme">
            <Helmet>
                <title>About Me | 中井 大 (Dai Nakai) 京都工芸繊維大学大学院</title>
            </Helmet>
            <h2 className='aboutme_title'>About me</h2>
            <h3 className='aboutme_title'>Profile</h3>
            <p className='aboutme_text'>
                <ur>
                    <li>氏名：中井 大（なかい だい）</li>
                    <li>学位：修士（工学）</li>
                    <li>研究の興味：ディジタルホログラフィによる粒子計測，雲粒併合現象の観測，NVIDIA GPUによる画像処理，ビジョンモデルのホログラフィへの活用</li>
                    <li>趣味・特技：ジャズトランペット(<a href="https://www.youtube.com/watch?v=yFB-KJGaTWs">学部サークル時代の動画</a>，<a href="https://www.youtube.com/watch?v=CykqvBYCX-0">最近のコンボライブより</a> )，大河ドラマ『光る君へ』，麻雀</li>
                </ur>
            </p>
            <h3 className='aboutme_title'>Education</h3>
            <p className='aboutme_text'>
                <ur>
                    <li>2018年4月 京都工芸繊維大学 機械工学課程 入学</li>
                    <li>2022年3月 京都工芸繊維大学 機械工学課程 卒業</li>
                    <li>2022年4月 京都工芸繊維大学 博士前期課程 機械設計学専攻 入学</li>
                    <li>2024年3月 京都工芸繊維大学 博士前期課程 機械設計学専攻 修了</li>
                    <li>2024年4月- 京都工芸繊維大学 博士後期課程 設計工学専攻 入学</li>
                </ur>
            </p>
            <h3 className='aboutme_title'>Career</h3>
            <p className='aboutme_text'>
                <ur>
                    <li>2024年4月- 日本学術振興会特別研究員DC1</li>
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