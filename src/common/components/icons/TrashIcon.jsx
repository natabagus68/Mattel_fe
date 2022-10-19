import React from 'react';

export const TrashIcon = ({ width = 18, height = 18, ...props }) => {
    return (
        <>
            <svg width={ width } height={ height } { ...props } viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75 2.25V3H3V4.5H3.75V14.25C3.75 14.6478 3.90804 15.0294 4.18934 15.3107C4.47064 15.592 4.85218 15.75 5.25 15.75H12.75C13.1478 15.75 13.5294 15.592 13.8107 15.3107C14.092 15.0294 14.25 14.6478 14.25 14.25V4.5H15V3H11.25V2.25H6.75ZM6.75 6H8.25V12.75H6.75V6ZM9.75 6H11.25V12.75H9.75V6Z" fill="#FEECEB" />
            </svg>
        </>
    );
};
