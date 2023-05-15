import clsx from 'clsx';
import ReactPaginate from 'react-paginate';
import Icon from '../icon';

export default function Pagination({ className, handlePageClick, pageCount }: Props) {
    return (
        <div className={clsx('flex flex-row justify-between items-center', className)}>
            <ReactPaginate
                containerClassName='flex flex-row justify-between items-center space-x-4'
                breakLabel='...'
                previousLabel={<Icon name='chevron-left' width={8} />}
                nextLabel={<Icon name='chevron-right' width={8} />}
                previousClassName='flex justify-center items-center h-6 w-6 rounded-full hover:bg-primary/10 on-hover'
                nextClassName='flex justify-center items-center h-6 w-6 rounded-full hover:bg-primary/10 on-hover'
                breakClassName='flex justify-center items-center h-6 w-6 rounded-full hover:bg-primary/10 on-hover'
                pageClassName='flex justify-center items-center h-6 w-6 rounded-full'
                pageLinkClassName='text-sm'
                activeClassName='flex justify-center items-center h-6 w-6 bg-primary hover:bg-primary rounded-full'
                activeLinkClassName='text-sm text-white'
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

type Props = {
    className?: string;
    handlePageClick?: any;
    pageCount?: any;
};
