import wa2 from './asset/wa2.png';
import env2 from './asset/env2.png';
import loc1 from './asset/loc1.png';

const Contact = () => {
    return (
        <div id="contact" className="min-h-screen bg-white px-4 py-10 flex flex-col items-center">
            {/* Judul */}
            <h1 className="text-4xl font-bold mb-6 text-center mt-20 sm:text-3xl">Contact</h1>

            {/* Kotak Informasi */}
            <div className="w-full max-w-lg bg-gray-300 rounded-2xl p-6 shadow-lg">
                <p className="text-black text-center font-bold text-xl mb-4">Hubungi Kami di sini!</p>

                {/* WhatsApp */}
                <div className="flex items-center gap-3 mb-4">
                    <img src={wa2} alt="wa" className="w-10 h-10" />
                    <p className="text-black font-semibold text-lg sm:text-base">+62 882-2875-0758</p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 mb-4">
                    <img src={env2} alt="env" className="w-10 h-10" />
                    <p className="text-black font-semibold text-lg sm:text-base break-words">nasigorengdjongko@gmail.com</p>
                </div>

                {/* Lokasi */}
                <div className="flex items-start gap-3">
                    <a href="https://www.google.com/maps/search/?api=1&query=-6.975729,110.396588" target="_blank" rel="noopener noreferrer">
                        <img src={loc1} alt="loc" className="w-16 h-10" />
                    </a>
                    <p className="text-black font-semibold text-md sm:text-sm">
                        Jl. Pringgodani Dalam, Krobokan, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50141
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
