import React from 'react';

interface IProps {
    children: string | any;
    className?: string | any;
}

const Message = ({children, className}: IProps) => {
    return <p className={className}>{children}</p>
}

export default Message;