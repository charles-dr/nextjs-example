import React from 'react';

const Lesson = ({id, name, description, created_at, lesson_type, units }) => {
    const formatTime =(time) => {
        return time;
    }
    return (
        <div className="border border-grey-light my-3 p-3 rounded-md">
                <h3 className="text-2xl text-grey-mid">{name}</h3>
                <p className="text-grey">Id: {id}</p>
                <p className="text-blue">Created At: { formatTime(created_at) }</p>
                <p>Type: {lesson_type.label}</p>
        </div>
    );
}

export default Lesson;