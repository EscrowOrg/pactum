import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./phonenumber.scss"

const PhoneINumberInput = ({
    onChange,
    name,
    value,
    country='ng',
    autoFormat=true,
    placeholder="(+234) 999 999 9999"
}) => {

    return (
        <PhoneInput
        country={country}
        countryCodeEditable={false}
        autoFormat={autoFormat}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
    )
}

export default PhoneINumberInput