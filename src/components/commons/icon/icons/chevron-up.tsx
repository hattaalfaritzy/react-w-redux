export default function ChevronUp({ width = 20, ...props }: Props) {
    return (
        <svg width={width} height={width} {...props} viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M6.99977 2.82795L2.04977 7.77795L0.635769 6.36395L6.99977 -4.63327e-05L13.3638 6.36395L11.9498 7.77795L6.99977 2.82795Z' />
        </svg>
    );
}

type Props = JSX.IntrinsicElements['svg'] & {
    width?: any;
};
