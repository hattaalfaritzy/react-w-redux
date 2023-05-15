export default function CaretDown({ width = 20, ...props }: Props) {
    return (
        <svg width={width} height={width / 2} {...props} viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M4 4L-1.74846e-07 0L8 -3.49691e-07L4 4Z' />
        </svg>
    );
}

type Props = JSX.IntrinsicElements['svg'] & {
    width?: any;
};
