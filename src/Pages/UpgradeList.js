import TeleporterImg from "../Assets/Teleporter.png";
import InvTeleporterImg from "../Assets/Inv Teleporter.png";
import LoudHornImg from "../Assets/Loud Horn.png";
import styles from "./Upgrades.module.css";

export const UPGRADES = [
    {
        id: "u1",
        upgradeName: "Teleporter",
        price: 375,
        upgradeImage: TeleporterImg
    },
    {
        id: "u2",
        upgradeName: "Inverse Teleporter",
        price: 425,
        upgradeImage: InvTeleporterImg
    },
    {
        id: "u3",
        upgradeName: "Loud Horn",
        price: 100,
        upgradeImage: LoudHornImg
    }
];