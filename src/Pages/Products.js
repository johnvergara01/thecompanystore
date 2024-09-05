import proflashlight from '../Assets/Pro-Flashlight.png';
import flashlight from '../Assets/Flashlight.png';
import shovel from '../Assets/Shovel.png';
import walkietalkie from '../Assets/WalkieTalkie.png';
import spraypaint from '../Assets/SprayPaint.png';
import flashbang from '../Assets/FlashBang.png';

export const PRODUCTS = [
    {
        id: 'i1',
        name: 'Pro-Flashlight',
        price: 25,
        image: proflashlight,
        desc: 'The pro-flashlight, though slightly more expensive and heavier, is a direct upgrade to the Flashlight. It has a wider cone of light, a longer range, and is much brighter. In addition, it has over double the battery capacity.'
    },
    {
        id: 'i2',
        name: 'Flashlight',
        price: 15,
        image: flashlight,
        desc: 'The Flashlight is a cheap and semi-reliable way to navigate darker areas of the map. While not as strong as the Pro-Flashlight, it can still help with certain rooms being nearly impossible to go through without one.'
    },
    {
        id: 'i3',
        name: 'Shovel',
        price: 30,
        image: shovel,
        desc: 'It is used to attack most entities and is capable of harming fellow employees. It has the lowest weight out of all the offensive melee weapons, making it a very useful option for self-defense.'
    },
    {
        id: 'i4',
        name: 'Walkie Talkie',
        price: 12,
        image: walkietalkie,
        desc: 'The walkie-talkie is used to communicate between players over long distances. It can be very useful for information gathering and cross-map communication. It requires power and needs to be switched on to both transmit voice to other players, and receive voice.'
    },
    {
        id: 'i5',
        name: 'Spray Paint',
        price: 50,
        image: spraypaint,
        desc: 'It can be used just for fun to make art or otherwise mess around with, but it can also be used practically, such as to mark dead ends and the way back to prevent getting lost.'
    },
    {
        id: 'i6',
        name: 'Flash Bang',
        price: 30,
        image: flashbang,
        desc: 'A non-lethal explosive that will stun most entities for a short while. Once the striker lever is removed, the grenade will detonate after 3 seconds.'
    }
]