import React, { useState } from 'react'
import One from '@/assets/EnglishYaari2.0_Product Design/one.png';
import Two from '@/assets/EnglishYaari2.0_Product Design/two.png';
import Three from '@/assets/EnglishYaari2.0_Product Design/three.png';
import Four from '@/assets/EnglishYaari2.0_Product Design/four.png';
import Five from '@/assets/EnglishYaari2.0_Product Design/five.png';
import Six from '@/assets/EnglishYaari2.0_Product Design/six.png';
import Seven from '@/assets/EnglishYaari2.0_Product Design/seven.png';
import Eight from '@/assets/EnglishYaari2.0_Product Design/eight.png';
import Nine from '@/assets/EnglishYaari2.0_Product Design/nine.png';
import Ten from '@/assets/EnglishYaari2.0_Product Design/ten.png';
import { HorizontalSlider } from './HorizontalSlider';
function OurLearner() {

    const [speed, setSpeed] = useState(20000)
    const images = [
        One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten
    ].map((image) => ({
        id: Math.random().toString,
        image
    }));

    return (
        <div onMouseLeave={() => setSpeed(20000)} onMouseEnter={() => setSpeed(50000)} className='  relative h-[210px] md:h-[250px] '>
            <p className='text-center h28 font-semibold text-secondry my-5 w-[60%] mx-auto lg:w-auto '>Trusted by learners working at top companies</p>

            <HorizontalSlider images={images} speed={speed} />

        </div>
    )
}

export default OurLearner