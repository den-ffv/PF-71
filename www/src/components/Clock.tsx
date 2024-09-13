import React from "react";
import moment from "moment-timezone";

const Clock = () => {
    const [time, setTime] = React.useState(moment.tz('Europe/Kiev'));

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(moment.tz('Europe/Kiev'));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='header__time'>
            <p>Kyiv, Kivy city</p>
            <span>{time.format('HH:mm:ss')}</span>
        </div>
    );
};

export default Clock