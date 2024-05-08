import React, { useState } from 'react'
import One from '@/assets/EnglishYaari2.0_Product Design/Google.png';
import Two from '@/assets/EnglishYaari2.0_Product Design/Tcs.png';
import Three from '@/assets/EnglishYaari2.0_Product Design/amazon.png';
import Four from '@/assets/EnglishYaari2.0_Product Design/Microsoft.png';
import Five from '@/assets/EnglishYaari2.0_Product Design/congizent.png';
import Six from '@/assets/EnglishYaari2.0_Product Design/hcl.png';
import Seven from '@/assets/EnglishYaari2.0_Product Design/ibm.png';
import Eight from '@/assets/EnglishYaari2.0_Product Design/infosys.png';
import Nine from '@/assets/EnglishYaari2.0_Product Design/samsung.png';
import Ten from '@/assets/EnglishYaari2.0_Product Design/uniliver.png';
import Wipro from '@/assets/EnglishYaari2.0_Product Design/wipro.png';
import ICICI from '@/assets/EnglishYaari2.0_Product Design/ICICI.png';




import { HorizontalSlider } from './HorizontalSlider';
function OurLearner() {

    const [speed, setSpeed] = useState(20000)
    const images = [
        One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten,Wipro,ICICI
    ].map((image) => ({
        id: Math.random().toString,
        image
    }));

    return (
        <div >
            <p className='text-center h28 font-semibold text-secondry my-5 w-[60%] mx-auto lg:w-auto '>Trusted by learners working at top companies</p>

            <HorizontalSlider images={images} speed={speed} />

        </div>
    )
}

export default OurLearner