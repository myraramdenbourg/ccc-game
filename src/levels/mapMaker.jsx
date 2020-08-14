import React from 'react';

const SPRITE_SIZE = 16;

const MapTile = ({ tile }) => {

    return (
        <GroundTile>
            <div style={{
                // backgroundImage: `url(/tiles/${getTileSprite(tile.value)}.png)`,
                // backgroundImage: `url(/assets/${getTileSprite(tile.value)}.png)`,
                backgroundImage: `url(/assets/town.png)`,
                height: SPRITE_SIZE,
                width: SPRITE_SIZE
            }}>
            </div>
        </GroundTile>
    );
};

export function getTileSprite(type) {
    switch (type) {
        case -2:
            return 'chest-open';
        case -1:
            return 'blood-splatter';
        case 0:
            return `ground-`;
        case 2:
            return 'stairs-down';
        case 3:
            return 'stairs-up';
        case 4:
            return 'chest';
        case 5:
            return `brick-wall`;
        case 9:
            return 'shop';
        case 10:
            return 'shrine';
        default:
    }
}

const GroundTile = ({ children }) => {
    return (
        <div style={{
            // backgroundImage: `url('/tiles/ground.png')`,
            backgroundImage: `url(/assets/town.png)`,
            display: 'inline-flex',
            height: SPRITE_SIZE,
            width: SPRITE_SIZE
        }}>
            {children}
        </div>
    );
};

export default MapTile;