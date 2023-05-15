export default function Download({ width = 20, ...props }: Props) {
    return (
        <svg width={width} height={width} {...props} viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M9.83317 6.33333H13.9998L8.99984 11.3333L3.99984 6.33333H8.1665V0.5H9.83317V6.33333ZM2.33317 13.8333H15.6665V8H17.3332V14.6667C17.3332 14.8877 17.2454 15.0996 17.0891 15.2559C16.9328 15.4122 16.7208 15.5 16.4998 15.5H1.49984C1.27882 15.5 1.06686 15.4122 0.910582 15.2559C0.754301 15.0996 0.666504 14.8877 0.666504 14.6667V8H2.33317V13.8333Z' />
        </svg>
    );
}

type Props = JSX.IntrinsicElements['svg'] & {
    width?: any;
};
