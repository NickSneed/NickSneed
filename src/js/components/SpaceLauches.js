import React, { useState, useEffect } from 'react';
import str from '@/js/utils/strings.js';

import * as styles from './SpaceLaunches.module.css';

const apiUrl = 'https://fdo.rocketlaunch.live/json/launches/next/5';

// SpaceLaunches component
const SpaceLaunches = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(apiUrl);
                const jsonData = await response.json();
                const result = jsonData && jsonData.result[0] ? jsonData.result[0] : null;
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // Set data vars
    let name;
    let provider;
    let rocket;
    let desc;

    if (data) {
        name = data.name ? data.name : '';
        provider = data.provider ? data.provider.name : '';
        rocket = data.vehicle ? data.vehicle.name : '';
        desc = data.launch_description ? data.launch_description : '';
    }

    // Component HTML
    const html = (
        <div className={styles.spaceLaunches}>
            <h2>{str('rocketHeader')}</h2>
            <p>
                {isLoading && <span>{str('loading')}</span>}
                {error && (
                    <span>
                        {str('error')} {error.message}
                    </span>
                )}
                {data && str('rocketTxt', true, [name, provider, rocket, desc])}
            </p>
        </div>
    );

    return html;
};

export default SpaceLaunches;
