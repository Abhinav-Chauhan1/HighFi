import React from 'react'
import TagsInput from 'react-tagsinput';

const FormField = ({ label, type, value, onChange, name }) => {
    return (
        <div>
            <label>{label}</label>
            {type === "textarea" ? (
                <textarea placeholder={label} className="resize-y mt-2 h-24 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" value={value} onChange={onChange} name={name} />
            ) : type === "tags" ? (
                <TagsInput
                    inputFieldPosition="bottom"
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring cursor-default"
                    value={value}
                    addKeys="32, 13, 188"
                    placeholder="Add a tag"
                    onChange={onChange}
                />
            ) : type === "file" ? (
                <input type="file" className="text-sm text-grey-500 file:mr-5 file:py-2 w-full mt-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-600 hover:file:cursor-pointer hover:file:bg-blue-600 hover:file:text-white" onChange={onChange} />
            ) : (
                <input type="text" placeholder={label} className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" value={value} onChange={onChange} name={name} />
            )}
        </div>
    );
};


export default FormField
