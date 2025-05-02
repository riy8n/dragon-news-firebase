import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex items-center gap-6'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-4' pauseOnHover={true}>
            <p className='font-bold bg-base-200 px-2 py-2'>
            Decoder Replay: What happens when tyrants fall from power?</p>
            <p className='font-bold bg-base-200 px-2 py-2'> 'If we can come back from that, we can come back from anything': The burning river that fuelled a US green movement</p>
            <p className='font-bold bg-base-200 px-2 py-2'> The photo of the 1952 fire came to symbolise how waterway pollution in the US had grown out of control, and it fed the flames of public outcry over environmental crises</p>



            </Marquee>

           
        </div>
    );
};

export default Latest;