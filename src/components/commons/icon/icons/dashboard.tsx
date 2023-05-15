export default function Dashboard({ width = 20, ...props }: Props) {
    return (
        <svg width={width} height={width} {...props} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M10 18V8H18V18H10ZM0 10V0H8V10H0ZM6 8V2H2V8H6ZM0 18V12H8V18H0ZM2 16H6V14H2V16ZM12 16H16V10H12V16ZM10 0H18V6H10V0ZM12 2V4H16V2H12Z' />
        </svg>
    );
}

type Props = JSX.IntrinsicElements['svg'] & {
    width?: any;
};
