import { BsLink45Deg } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import {
    Accordion,
    Avatar,
    AvatarCircle,
    Breadcrumb,
    Button,
    Card,
    CountUp,
    Dropdown,
    HeadingLink,
    LimitPage,
    ListForm,
    Loading,
    Logo,
    Message,
    Modal,
    Table,
    Tabs,
    Tag,
    ViewAttachment,
} from '../../commons';
import useModal from '../../../hooks/use-modal';

export default function Commons() {
    const modal = useModal();

    const dropdown: any = [
        {
            label: 'Dropdown 1',
            onClick: () => {
                console.log('ini func dropdown 1');
            },
        },
        {
            label: 'Dropdown 2',
            onClick: () => {
                console.log('ini func dropdown 2');
            },
        },
        {
            label: 'Dropdown 3',
            onClick: () => {
                console.log('ini func dropdown 3');
            },
        },
    ];

    const limit_page: any = [
        {
            label: '5',
            onClick: () => {
                console.log('ini func 5 limit page');
            },
        },
        {
            label: '10',
            onClick: () => {
                console.log('ini func 10 limit page');
            },
        },
    ];

    const columns: any = ['Period', 'No. Claim', 'Claim', 'Submitted', 'Request', 'Approved', 'Status'];

    const dataSource: any = [
        {
            periods: '2023',
            no_claim: 'FLXBN.123',
            name: 'Billa Barbie',
            category: 'WFH Related',
            amount: 'IDR 250.000',
            submitted_at: '15 - 03 - 23',
            status: 'pending',
        },
        {
            periods: '2023',
            no_claim: 'FLXBN.123',
            name: 'Billa Barbie',
            category: 'WFH Related',
            amount: 'IDR 250.000',
            submitted_at: '15 - 03 - 23',
            status: 'approved',
        },
        {
            periods: '2023',
            no_claim: 'FLXBN.123',
            name: 'Billa Barbie',
            category: 'WFH Related',
            amount: 'IDR 250.000',
            submitted_at: '15 - 03 - 23',
            status: 'rejected',
        },
    ];

    const tabs: any = [
        {
            label: 'New Submission',
            content: <div className='text-white'>Content New Submission</div>,
        },
        {
            label: 'All Submission',
            content: <div className='text-white'>Content All Submission </div>,
        },
    ];

    const breadcrumb: any = [
        {
            label: '404',
            href: '/404',
        },
        {
            label: 'Playground',
            href: '/app/playground',
        },
    ];

    return (
        <div className='flex flex-col space-y-6'>
            <span className='text-lg lg:text-3xl text-white'>List Components Commons</span>
            <div className='container-components-playground'>
                <span className='title-playground'>Components Accordion</span>
                <Accordion title='Accordion' className='text-white text-base' classNameContent='text-white bg-white/30 p-3 rounded mt-3'>
                    <p>Content Accordion</p>
                </Accordion>
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Avatar</span>
                <Avatar src='/dummy-avatar.svg' title='Muhammad Hatta Alfaritzy' label='PT. Duta Digital Nusantara' />
                <Avatar src='/dummy-avatar.svg' title='Muhammad Hatta Alfaritzy' label='PT. Duta Digital Nusantara' variant='reverse' />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Avatar Circle</span>
                <AvatarCircle src='/dummy-avatar.svg' title='Muhammad Hatta Alfaritzy' label='PT. Duta Digital Nusantara' />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Dropdown</span>
                <div className='grid grid-cols-2 gap-x-2'>
                    <Dropdown label={dropdown[0].label} activeIndex={dropdown[0].label} data={dropdown} onChange={(val: any) => val.onClick()} />
                    <Dropdown data={dropdown} onChange={(val: any) => val.onClick()}>
                        <Avatar src='/dummy-avatar.svg' title='Hatta' />
                    </Dropdown>
                </div>
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Button</span>
                <Accordion className='text-white text-base' title='Button Align, Button Label & Icon, Button Icon'>
                    <div className='flex flex-col max-w-sm space-y-4 my-4'>
                        <Button onClick={() => {}} label='Lihat di olx.com' iconLeft={<BsLink45Deg size={18} />} className='w-full' align='start' />
                        <Button
                            label='Filter'
                            outline
                            iconRight={
                                <div className='relative'>
                                    <div className='h-2.5 w-2.5 rounded-full bg-special-warning absolute -right-0.5 -mt-0.5' />
                                    <FiFilter className='-mb-0.5' size={20} />
                                </div>
                            }
                        />
                        <Button
                            outline
                            iconLeft={
                                <div className='relative'>
                                    <div className='h-2.5 w-2.5 rounded-full bg-special-warning absolute -right-0.5 -mt-0.5' />
                                    <FiFilter className='-mb-0.5' size={20} />
                                </div>
                            }
                        />
                        <Button
                            rounded
                            iconLeft={
                                <div className='relative'>
                                    <div className='h-2.5 w-2.5 rounded-full bg-special-warning absolute -right-0.5 -mt-0.5' />
                                    <FiFilter className='-mb-0.5' size={20} />
                                </div>
                            }
                        />
                    </div>
                </Accordion>

                <Accordion className='text-white text-base' title='Button Primary'>
                    <div className='flex flex-col max-w-sm space-y-4 my-4'>
                        <Button onClick={() => {}} label='Primary' className='w-full' />
                        <Button onClick={() => {}} label='Primary Loading' className='w-full' loading />
                        <Button onClick={() => {}} label='Primary Disabled' className='w-full' disabled />
                    </div>
                </Accordion>

                <Accordion className='text-white text-base' title='Button Primary Small'>
                    <div className='flex flex-col max-w-sm space-y-4 my-4'>
                        <Button onClick={() => {}} label='Primary' size='sm' />
                        <Button onClick={() => {}} label='Primary Loading' size='sm' loading />
                        <Button onClick={() => {}} label='Primary Disabled' size='sm' disabled />
                    </div>
                </Accordion>

                <Accordion className='text-white text-base' title='Button Primary Outline'>
                    <div className='flex flex-col max-w-sm space-y-4 my-4'>
                        <Button onClick={() => {}} label='Outline' className='w-full' outline />
                        <Button onClick={() => {}} label='Outline Loading' className='w-full' outline loading />
                        <Button onClick={() => {}} label='Outline Disabled' className='w-full' outline disabled />
                    </div>
                </Accordion>

                <Accordion className='text-white text-base' title='Button Light'>
                    <div className='flex flex-col max-w-sm space-y-4 my-4'>
                        <Button onClick={() => {}} label='Light Button' className='w-full' variant='light' />
                        <Button onClick={() => {}} label='Light Button Loading' className='w-full' variant='light' loading />
                        <Button onClick={() => {}} label='Light Button Disabled' className='w-full' variant='light' disabled />
                    </div>
                </Accordion>

                <Accordion className='text-white text-base' title='Button Outline Light'>
                    <div className='flex flex-col max-w-sm space-y-4 my-4'>
                        <Button onClick={() => {}} label='Light Outline Button' className='w-full' outline variant='light' />
                        <Button onClick={() => {}} label='Light Outline Button Loading' className='w-full' outline variant='light' loading />
                        <Button onClick={() => {}} label='Light Outline Button Disabled' className='w-full' outline variant='light' disabled />
                    </div>
                </Accordion>

                <Accordion className='text-white text-base' title='Button Error'>
                    <div className='flex flex-col max-w-sm space-y-4 my-4'>
                        <Button onClick={() => {}} label='Error Button' className='w-full' variant='error' />
                        <Button onClick={() => {}} label='Error Button Loading' className='w-full' variant='error' loading />
                        <Button onClick={() => {}} label='Error Button Disabled' className='w-full' variant='error' disabled />
                    </div>
                </Accordion>

                <Accordion className='text-white text-base' title='Button Error Outline'>
                    <div className='flex flex-col max-w-sm space-y-4 my-4'>
                        <Button onClick={() => {}} label='Error Outline Button' className='w-full' outline variant='error' />
                        <Button onClick={() => {}} label='Error Outline Button Loading' className='w-full' outline variant='error' loading />
                        <Button onClick={() => {}} label='Error Outline Button Disabled' className='w-full' outline variant='error' disabled />
                    </div>
                </Accordion>

                <Accordion className='text-white text-base' title='Button Transparent'>
                    <div className='flex flex-col max-w-sm space-y-4 my-4'>
                        <Button onClick={() => {}} label='Transparent' className='w-full' variant='transparent' />
                        <Button onClick={() => {}} label='Transparent Loading' className='w-full' variant='transparent' loading />
                        <Button onClick={() => {}} label='Transparent Disabled' className='w-full' variant='transparent' disabled />
                    </div>
                </Accordion>
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Card</span>
                <Card className='text-white' withShadow>
                    Card
                </Card>
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Count Up</span>
                <CountUp end={1100} />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Loading</span>
                <Loading />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Logo</span>
                <Logo />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Heading Link</span>
                <HeadingLink title='Data Educations' />
                <HeadingLink title='Add Educations' withBack={true} label={<Breadcrumb routes={breadcrumb} />} />
                <HeadingLink title='Edit Educations' withBack={true} />
                <HeadingLink title='Data Educations' withBack={true} />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Message</span>
                <Message type='primary' label='Message Primary' />
                <Message type='success' label='Message Success' />
                <Message type='informative' label='Message Informative' />
                <Message type='warning' label='Message Warning' />
                <Message type='error' label='Message Error' />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Tag</span>
                <Tag type='pending' label='Tag Pending' />
                <Tag type='approved' label='Tag Approved' />
                <Tag type='rejected' label='Tag Rejected' />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Modal</span>
                <Button onClick={modal.openModal} label='Open Modal' className='w-full' />
                <Modal {...modal.props} title='test 1234' className='flex flex-col'>
                    <span>modal 1</span>
                    <span>modal 1</span>
                    <span>modal 1</span>
                    <span>modal 1</span>
                </Modal>
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Tabs</span>
                <Tabs tabs={tabs} />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Breadcrumb</span>
                <Breadcrumb routes={breadcrumb} />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components List Form</span>
                <ListForm title='Full Name' value='Emilia Winson Lazuardi' />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components View Attachment</span>
                <ViewAttachment src='/images/dummy-receipt-1.svg' fileName='receipt_scaling.pdf' />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Limit Page</span>
                <LimitPage label={limit_page[0].label} activeIndex={limit_page[0].label} data={limit_page} />
            </div>

            <div className='container-components-playground'>
                <span className='title-playground'>Components Table</span>
                <Table columns={columns}>
                    {dataSource.map((value: any, index: string | number) => (
                        <tr key={index} className='cursor-pointer'>
                            <td>{value.periods}</td>
                            <td>{value.no_claim}</td>
                            <td>{value.name}</td>
                            <td>{value.category}</td>
                            <td>{value.amount}</td>
                            <td>{value.submitted_at}</td>
                            <td>
                                <Tag type={value.status} label={value.status} />
                            </td>
                        </tr>
                    ))}
                </Table>
            </div>
        </div>
    );
}
