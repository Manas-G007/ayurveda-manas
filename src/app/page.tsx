"use client";
import Image from 'next/image';
// pages/index.js
import { useState } from 'react';

export default function ImageGallery() {
    const images = [
        'https://picsum.photos/300',
        'https://picsum.photos/301',
        'https://picsum.photos/302',
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center">
                <div className="flex gap-0 overflow-hidden rounded-2xl">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`relative transition-all duration-500 overflow-hidden cursor-pointer 
                                ${activeIndex === index ? 'flex-[2]' : 'flex-1'}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <Image
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            {activeIndex === index && (
                                <>
                                    <div className="absolute
                                     top-2 left-2 bg-black bg-opacity-50 text-white text-lg px-2 py-1 rounded">
                                        IMAGE {index + 1}
                                    </div>
                                    <div className="absolute top-2 right-2 bg-white rounded-full bg-opacity-50 text-black text-md px-2.5 py-1">
                                        ▶
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
