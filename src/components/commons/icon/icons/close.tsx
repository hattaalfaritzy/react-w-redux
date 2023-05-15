export default function Close({ width = 20, ...props }: Props) {
    return (
        <svg width={width} height={width} {...props} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M8.99998 7.11465L15.6 0.514648L17.4853 2.39998L10.8853 8.99998L17.4853 15.6L15.6 17.4853L8.99998 10.8853L2.39998 17.4853L0.514648 15.6L7.11465 8.99998L0.514648 2.39998L2.39998 0.514648L8.99998 7.11465Z' />
        </svg>
    );
}

type Props = JSX.IntrinsicElements['svg'] & {
    width?: any;
};
