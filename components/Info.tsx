import { useRef, useState } from 'react';
import Landmark from '../interfaces/Landmark';

interface Props {
    landmark: Landmark
  }

const Info = (props: Props) => {
    return (
        <>
            <h2>{props.landmark.name}</h2>
            <p>{props.landmark.description}</p>
        </>
    )
}

export default Info;