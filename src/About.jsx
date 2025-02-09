import fotoab1 from './asset/fotoab1.png';
import gambar10 from './asset/BACKGROUNDN3.png';

const About = () => {
    return (
        <div id="about" className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden">
            <img src={gambar10} alt="background" className="absolute w-full h-full object-cover min-h-screen" />
            <div className="relative w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 py-12">
                <div className="w-60 h-60 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 flex-shrink-0">
                    <img src={fotoab1} alt="foto" className="w-full h-full object-cover rounded-full shadow-lg" />
                </div>
                <div className="text-center lg:text-left mt-6 lg:mt-0 lg:ml-16 max-w-2xl">
                    <h2 className="font-bold text-4xl sm:text-2xl md:text-3xl lg:text-4xl">Pak D'JONGKO</h2>
                    <hr className="border-t-2 border-black w-40 sm:w-28 md:w-36 lg:w-48 my-2 mx-auto lg:mx-0" />
                    <p className="text-base sm:text-sm md:text-base text-justify">
                        Sejak tahun 1980, kami telah menyajikan nasi goreng yang lezat dan autentik, menghadirkan cita rasa khas yang terus dicintai oleh para pelanggan setia kami. Dengan pengalaman lebih dari empat dekade, kami bangga bisa menjadi bagian dari kenangan kuliner banyak orang, dan senantiasa menjaga konsistensi rasa dari generasi ke generasi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
