import React from 'react'
import Select from 'react-select'
import "./selectinput.scss"

const SelectInput = ({
    options,
    classNamePrefix,
    defaultValue,
    isDisabled=false,
    isLoading=false,
    isClearable=false,
    isRtl=false,
    isSearchable=false,
    name,
    menuIsOpen,
    value,
    onChange,
    onBlur,
    inputValue,
    defaultInputValue
}) => {

    return (
        <Select 
        menuIsOpen={menuIsOpen}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputValue={inputValue}
        defaultInputValue={defaultInputValue}
        className={"my-select-comp"}
        classNamePrefix={classNamePrefix}
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name={name}
        options={options} />
    )
}

export default SelectInput