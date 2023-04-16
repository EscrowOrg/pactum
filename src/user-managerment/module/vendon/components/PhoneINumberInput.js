import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./phonenumber.scss"

const PhoneINumberInput = ({
    onChange,
    value,
    country='ng',
    autoFormat=true
}) => {

    return (
        <PhoneInput
        country={country}
        autoFormat={autoFormat}
        value={value}
        onChange={onChange} />
    )
}

export default PhoneINumberInput