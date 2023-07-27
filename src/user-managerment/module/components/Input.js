import { useState } from "react"
import {
    AiOutlineEye,
    AiOutlineEyeInvisible
} from "react-icons/ai"
import { HiOutlineSearch } from "react-icons/hi"

// TextLabel input
export const TextLabelInput = ({
    value,
    onChange,
    disabled,
    onBlur,
    onFocus,
    name,
    placeholderText,
    type="text",
    label,
    paddingRight
}) => {

    return(
        <div className="flex relative justify-between w-full h-14 [outline:1.4px_solid_#DAD7E0] rounded-xl focus:[outline:1.4px_solid_#3A0CA3] [appearance:textfield] hover:appearance-none">
            <input
            type={type}
            name={name}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            disabled={disabled}
            onChange={onChange}
            className={`w-full text-sm font-normal h-14 px-4 placeholder:font-normal border-none [outline:none] placeholder:text-xs placeholder:text-[#ACA6BA]`}
            placeholder={placeholderText} />

            {/* label */}
            <span className="text-sm min-w-fit my-auto pr-3 font-normal text-[#ACA6BA] cursor-pointer">
                {label}
            </span>
        </div>
    )
}

// Text input
export const TextInput = ({
    value,
    onChange,
    disabled,
    onBlur,
    onFocus,
    name,
    placeholderText,
    type="text"
}) => {

    return(
        <input
        type={type}
        name={name}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className="w-full text-sm font-normal h-14 px-4 placeholder:font-normal border-none [outline:1.4px_solid_#DAD7E0] rounded-xl focus:[outline:1.4px_solid_#3A0CA3] placeholder:text-xs placeholder:text-[#ACA6BA]"
        placeholder={placeholderText} />
    )
}

// Text input
export const SearchInput = ({
    value,
    onChange,
    disabled,
    onBlur,
    onFocus,
    name,
    type="search",
    placeholderText='Search'
}) => {

    return(
        <div className='bg-[#FAFAFB] rounded-lg border border-[#F5F3F6] flex items-center gap-2 pl-5 pr-2 h-[44px] w-full'>
            <HiOutlineSearch
            className='text-[#ACA6BA]' />

            <input 
            value={value}
            onChange={onChange}
            disabled={disabled}
            onBlur={onBlur}
            onFocus={onFocus}
            name={name}
            className='placeholder:font-normal placeholder:text-sm placeholder:text-[#ACA6BA] text-sm font-normal text-[#202223] rounded-lg bg-transparent outline-none w-full h-[95%]'
            type={type}
            placeholder={placeholderText} />
        </div>
    )
}

// Password Input
export const PasswordInput = ({
    value,
    onChange,
    disabled,
    onBlur,
    onFocus,
    name,
    placeholderText,
}) => {

    // STATES
    const [showPassword, setShowPassword] = useState(false)

    return(
        <div className="flex relative w-full">
            <input
            type={showPassword?"text":"password"}
            name={name}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            disabled={disabled}
            onChange={onChange}
            className="w-full text-sm font-normal h-14 px-4 placeholder:font-normal border-none [outline:1.4px_solid_#DAD7E0] rounded-xl focus:[outline:1.4px_solid_#3A0CA3] placeholder:text-xs placeholder:text-[#ACA6BA]"
            placeholder={placeholderText} />

            {/* Icon */}{
                showPassword?
                <AiOutlineEye
                onClick={()=>setShowPassword(!showPassword)}
                className="text-2xl text-[font-normal text-[#ACA6BA] absolute right-[5%] bottom-[50%] translate-y-[50%] cursor-pointer" />:
                <AiOutlineEyeInvisible
                onClick={()=>setShowPassword(!showPassword)}
                className="text-2xl text-[font-normal text-[#ACA6BA] absolute right-[5%] bottom-[50%] translate-y-[50%] cursor-pointer" />
            }

        </div>
    )
}