import clsx from 'clsx';
import PropTypes from 'prop-types';
import Card from '../card/card';
import { IoChevronBack } from 'react-icons/io5';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';
import { useNavigate } from 'react-router-dom';

export default function HeadingLink({ className, classNameTitle, classNameLabel, title, label, withBack = false, renderActions }) {
    const navigate = useNavigate();
    return (
        <Card className={clsx('flex flex-col w-full', withBack && 'pl-4')}>
            <div className={clsx('flex flex-row justify-between items-center w-full', className)}>
                <div className={clsx('flex flex-row justify-start items-center', withBack && 'space-x-4')}>
                    {withBack && (
                        <div onClick={() => navigate(-1)}>
                            <IoChevronBack className='text-3xl text-white hover:text-primary on-hover cursor-pointer' />
                        </div>
                    )}
                    <div className={clsx('flex flex-col justify-start items-start w-full', label && 'space-y-1')}>
                        <span className={clsx('text-xl text-white', classNameTitle)}>{title}</span>
                        {label && <span className={clsx('text-white text-sm', classNameLabel)}>{label}</span>}
                    </div>
                </div>
                {renderActions && renderActions}
            </div>
        </Card>
    );
}

HeadingLink.propTypes = {
    className: PropTypes.string,
    classNameTitle: PropTypes.string,
    classNameLabel: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.any,
    withBack: PropTypes.bool,
    renderActions: PropTypes.node,
};
