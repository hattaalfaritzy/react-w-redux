export default function ClaimManagement({ width = 20, ...props }: Props) {
    return (
        <svg width={width} height={width} {...props} viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M18 5V2H2V5H18ZM18 7H2V16H18V7ZM1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM9 11H15V13H4.5L9 8.5V11Z' />
        </svg>
    );
}

type Props = JSX.IntrinsicElements['svg'] & {
    width?: any;
};
