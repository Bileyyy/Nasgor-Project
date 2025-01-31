import sat1 from './asset/sat1.jpg'
import sat2 from './asset/sat2.jpg'
import sat3 from './asset/sat3.jpg'

const Gallery = () => {
    const items = [
        {
          id: 1,
          image: sat1,
        },
        {
          id: 2,
          image: sat2,
        },
        {
          id: 3,
          image: sat3,
        },
    ];
    
    return (
        <div id="gallery"className="min-h-screen bg-white px-6 py-4">
            <h1 className="text-4xl font-bold mb-6 text-center mt-20">Gallery</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ml-6">
                {items.map((item) => (
                    <div
                    key={item.id}
                    className="bg-beige rounded-lg shadow-lg p-1 text-center max-w-xs mx-4 flex justify-center items-center h-auto"
                    >
                        <img
                        src={item.image}
                        className="rounded-lg h-80 w-full object-cover mb-4"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
} 

export default Gallery;