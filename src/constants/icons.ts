import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { BsFillPlayFill } from "react-icons/bs";

export const Icons = {
    PLAY: BsFillPlayFill,
    PREVIOUS: GrFormPrevious,
    NEXT: GrFormNext,
};

export function getIconComp(iconName: IconName) {
    return Icons[iconName];
}

export type IconName = keyof typeof Icons;
