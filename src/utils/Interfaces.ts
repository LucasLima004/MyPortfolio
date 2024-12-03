export interface AboutMe {
    user: string;
    function: string;
    current_education: string;
    hobbies: string[];
}

export interface ImageWithTitleProps {
    svg: React.ReactNode;
    title: string;
    link: string;
    color?: string;
}

export interface StyledBurgerProps {
    open: boolean;
}

export interface BurgerProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}