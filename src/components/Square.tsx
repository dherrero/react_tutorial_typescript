import React from 'react';

type Props = {
    value: string,
    onClick: () => void
}

const Square = ({ value, onClick }: Props) => {
    return <button className="square" onClick={() => onClick()}>
        {value}
    </button>
}
export default Square;