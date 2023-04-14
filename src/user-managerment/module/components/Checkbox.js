import React from 'react'
import "./checkbox.scss"

const Checkbox = ({
    value,
    onChange,
    disabled
}) => {
    return (
        <div className="checkbox-container">
            <label className="lb-container">
                <input
                disabled={disabled}
                type="checkbox"
                name="agreeTerms"
                checked={value}
                onChange={onChange}
                required
                />
            </label>
        </div>
    )
}

export default Checkbox