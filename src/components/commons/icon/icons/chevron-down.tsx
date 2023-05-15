export default function ChevronDown({ width = 20, ...props }: Props) {
    return (
        <svg width={width} height={width} {...props} viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M6.99999 5.17198L11.95 0.221985L13.364 1.63598L6.99999 7.99998L0.635986 1.63598L2.04999 0.221985L6.99999 5.17198Z' />
        </svg>
    );
}

type Props = JSX.IntrinsicElements['svg'] & {
    width?: any;
};
