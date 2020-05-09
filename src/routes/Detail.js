import React, { useEffect } from 'react';
import DetailLayout from './DetailLayout';

export default function Details({ location, history }) {

    useEffect(() => {
        location.state === undefined && history.push("/");
    });

    return (
        (location.state && <DetailLayout {...location.state}/>) || null
    );
}
