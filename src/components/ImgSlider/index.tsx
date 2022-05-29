import React from 'react';

import {
    Container,
    ImgIndexes,
    ImgIndex,
    ImageCarWapper,
    CarImg,
} from './styles';

interface ImgSliderProps {
    urls: string[];
}
export function ImgSlider({ urls }: ImgSliderProps) {
    return (
        <Container>
            <ImgIndexes>
                <ImgIndex active={true} />
                <ImgIndex active={false} />
                <ImgIndex active={false} />
                <ImgIndex active={false} />
            </ImgIndexes>
            <ImageCarWapper>
                <CarImg 
                    source={{uri: urls[0]}}
                    resizeMode='contain'
                />
            </ImageCarWapper>

        </Container>
    );
}