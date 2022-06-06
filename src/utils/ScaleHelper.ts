import { Dimensions } from "react-native";
import { PixelRatio } from "react-native";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;

function normalize(size, based = 'width') {
    const newSize = (based === 'height') ? size * heightBaseScale : size * widthBaseScale;

    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

function widthPixel(size) {
    return normalize(size, 'width');
};

function heightPixel(size) {
    return normalize(size, 'height');
};

function fontPixel(size){
    return heightPixel(size);
}

function pixelSizeVertical(size){
    return heightPixel(size);
}

function pixelSizeHorizontal(size) {
    return widthPixel(size);
}

export {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeHorizontal,
    pixelSizeVertical
}
