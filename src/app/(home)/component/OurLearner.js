import React from 'react'
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

    const images = [
        One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten
    ].map((image) => ({
        id: Math.random().toString,
        image
    }));

    return (
        <div className='  relative h-[210px] md:h-[250px] '>
                    <p className='text-center h28 font-semibold text-secondry my-5  '>Trusted by learners working at top companies</p>

            <HorizontalSlider images={images} speed={10000} />

        </div>
    )
}

export default OurLearner