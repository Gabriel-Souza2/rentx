import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

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

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImgSlider({ urls }: ImgSliderProps) {

    const [imageIndex, setImageIndex] = useState(0);

    const indexChanged = useRef((info: ChangeImageProps) => {
        const index = info.viewableItems[0].index!
        setImageIndex(index);
    });

    return (
        <Container>
            <ImgIndexes>
            {
                urls.map((_, index) => (
                    <ImgIndex active={index === imageIndex} />
                )) 
            }
            </ImgIndexes>
                <FlatList 
                    data={urls}
                    keyExtractor={key => key}
                    renderItem={({ item }) => 
                        <ImageCarWapper>

                            <CarImg 
                                source={{ uri: item }}
                                resizeMode='contain'
                            />
                        </ImageCarWapper>

                    }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={indexChanged.current}
                />

        </Container>
    );
}