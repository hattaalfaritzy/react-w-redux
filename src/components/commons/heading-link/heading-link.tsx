import clsx from 'clsx';
import Card from '../card/card';
import { useNavigate } from 'react-router-dom';
import Icon from '../icon';

export default function HeadingLink({ className, classNameTitle, classNameLabel, title, label, withBack = false, renderActions, loading }: Props) {
    const navigate = useNavigate();
    return (
        <Card className={clsx('flex flex-col w-full', withBack && 'pl-4')}>
            <div className={clsx('flex flex-row justify-between items-center w-full p-2', className)}>
                <div className={clsx('flex flex-row justify-start items-center', withBack && 'space-x-4')}>
                    {withBack && (
                        <div onClick={() => navigate(-1)}>
                            <Icon name='chevron-left' width={15} className='fill-white hover:fill-primary on-hover cursor-pointer' />
                        </div>
                    )}
                    <div className={clsx('flex flex-col justify-start items-start w-full', label && 'space-y-1')}>
                        <span className={clsx('text-base lg:text-xl text-white', classNameTitle)}>{title}</span>
                        {label && loading ? (
                            <span className='rounded-full bg-light-700 h-5 w-36 animate-pulse' />
                        ) : (
                            <span className={clsx('text-white text-sm', classNameLabel)}>{label}</span>
                        )}
                    </div>
                </div>
                {renderActions && renderActions}
            </div>
        </Card>
    );
}

type Props = {
    className?: string,
    classNameTitle?: string,
    classNameLabel?: string,
    title?: string,
    label?: React.ReactNode,
    withBack?: boolean,
    renderActions?: React.ReactNode,
    loading?: boolean
};
