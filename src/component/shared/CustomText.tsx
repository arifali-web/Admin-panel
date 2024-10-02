import { CustomTextProps } from "../../type"


export default function CustomText({ text, color, fontSize, fontFamily, clasName }: CustomTextProps) {
    return (
        <p className={`text-[${fontSize}px] text-[${color}] ${fontFamily} ${clasName}`}>{text}</p>
    )
}
