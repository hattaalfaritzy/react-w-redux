import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getDetail } from '../../../stores/actions/lists';
import { listsSelector } from '../../../stores/selectors';
import { Card, ListForm, HeadingLink } from '../../commons';

export default function DetailList() {
    const dispatch = useDispatch();

    const { id } = useParams();
    const { detail } = useSelector(listsSelector, shallowEqual);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDataDetail();
    }, []);

    const getDataDetail = async () => {
        setLoading(true);
        await dispatch(getDetail(id));
        setLoading(false)
    }

    return (
        <div className='flex flex-col w-full space-y-6'>
            <HeadingLink title='Detail Data List' label='Name' withBack={true} />
            <Card className='flex flex-col justify-start items-start space-y-4'>
                <ListForm title='Name' label={detail?.name} loading={loading} />
                <ListForm title='Phone' label={detail?.phone} loading={loading} />
                <ListForm title='Email' label={detail?.email} loading={loading} />
            </Card>
        </div>
    );
}
