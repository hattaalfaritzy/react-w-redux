import clsx from 'clsx';
import PropTypes from 'prop-types';
import { MdCheckCircle, MdError, MdInfo, MdInfoOutline } from 'react-icons/md';

export default function Message({ type = 'error', label, className, onClick = () => {}, }) {
    if (!label) return null;

    const Icon = {
        success: MdCheckCircle,
        info: MdInfo,
        warning: MdError,
        error: MdError,
        alert: MdInfoOutline,
    }[type];

    const style = {
        success: 'bg-success text-success',
        info: 'bg-primary text-primary',
        warning: 'bg-warning text-warning',
        error: 'bg-danger text-danger',
        alert: 'bg-neutral text-neutral',
    }[type];

    return (
        <div className={clsx('flex justify-center items-center rounded-lg px-3 py-1.5 bg-opacity-20 w-full', style, className)} onClick={onClick}>
            <Icon className='text-sm' />
            <div className='flex-1 px-1 text-xs'>{label}</div>
        </div>
    );
}

Message.propTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'alert']),
    label: PropTypes.string,
    className: PropTypes.string,
};
