import { useEffect } from 'react';
import { Card, ListForm, HeadingLink } from '../../commons';

export default function DetailList() {
    return (
        <div className='flex flex-col w-full space-y-6'>
            <HeadingLink title='Detail Data List' label='Name' withBack={true} />
            <Card className='flex flex-col justify-start items-start space-y-4'>
                <ListForm title='Name' label='Hatta' />
                <ListForm title='Phone' label='0183021830123' />
                <ListForm title='Email' label='hata@gmail.com' />
            </Card>
        </div>
    );
}
