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
}) => {

    return (
        <Select 
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