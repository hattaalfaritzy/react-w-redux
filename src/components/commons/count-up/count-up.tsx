import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';

export default function CountUp({ className, start = 0, end = 0 }: Props) {
    const [value, setValue] = useState<any | null>(null);
    const [isMounted, setIsMounted] = useState<boolean>(true);
    const ref = useRef(start);

    const accumulator = end / 200;

    const updateCounterValue = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + accumulator);
            if (result > end) return setValue(end);
            setValue(result);
            ref.current = result;
        }
        setTimeout(updateCounterValue, 5);
    };

    useEffect(() => {
        if (isMounted) {
            updateCounterValue();
        }

        return () => setIsMounted(false);
    }, [end, start]);

    return <div className={clsx('flex', className || 'text-white')}>{value}</div>;
}

type Props = {
    className?: string;
    start?: number;
    end?: number;
};
