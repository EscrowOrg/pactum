import {useState} from "react"
import {
    AiOutlineEye,
    AiOutlineEyeInvisible
} from "react-icons/ai"

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