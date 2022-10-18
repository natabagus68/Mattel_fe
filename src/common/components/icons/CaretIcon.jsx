import React from 'react';

export const CaretIcon = ({ width = 8, height = 14, ...props }) => {
    return (
        <>
            <svg width={ width } height={ height } { ...props } viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L7 7L1 1" stroke="#8FC3B5" strokeWidth={ 2 } strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    );
};
