import clsx from 'clsx';

export default function Loading({ className }: Props) {
    return (
        <div className={clsx('loader text-center relative flex items-center', className)}>
            <div className='dots'>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>
            <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
                <defs>
                    <filter id='goo'>
                        <feGaussianBlur in='SourceGraphic' stdDeviation='12' result='blur' />
                        <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7' result='goo' />
                        <feBlend in='SourceGraphic' in2='goo' />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

type Props = {
    className?: string;
};
