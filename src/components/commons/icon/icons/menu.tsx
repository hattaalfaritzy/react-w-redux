export default function Menu({ width = 20, ...props }: Props) {
    return (
        <svg width={width} height={width} {...props} viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 0H18V2H0V0ZM0 15H18V17H0V15ZM0 10H18V12H0V10ZM0 5H18V7H0V5Z' />
        </svg>
    );
}

type Props = JSX.IntrinsicElements['svg'] & {
    width?: any;
};
