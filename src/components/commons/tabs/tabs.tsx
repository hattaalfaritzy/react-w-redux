import clsx from 'clsx';
import React, { useState } from 'react';
import Card from '../card/card';

export default function Tabs({ className, tabs, withCard = true }: TabsProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className={clsx('flex flex-col space-y-6 w-full', className)}>
            <div className={clsx('flex flex-row space-x-6', className)}>
                {tabs.map((tab, index) => (
                    <button key={index} className='flex flex-col justify-center items-center space-y-2' onClick={() => setActiveTabIndex(index)}>
                        <span className={clsx('text-base', index === activeTabIndex ? 'text-primary font-bold' : 'text-white/70')}>{tab.label}</span>
                        <div className={clsx('w-[33px] h-[2px]', index === activeTabIndex ? 'bg-primary' : 'bg-transparent')} />
                    </button>
                ))}
            </div>
            <div className='flex w-full'>
                {withCard ? <Card className='flex flex-col w-full'>{tabs[activeTabIndex].content}</Card> : tabs[activeTabIndex].content}
            </div>
        </div>
    );
}

type Tab = {
    label: string;
    content: React.ReactNode;
};

type TabsProps = {
    className?: string;
    tabs: Tab[];
    withCard?: boolean;
};
