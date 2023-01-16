import { BsLink45Deg } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { Button, Accordion, HeadingLink, Breadcrumb, Avatar, Card, ListForm, Logo, Message, Tags, Dropdown } from '../../commons';

export default function Commons() {

    const breadcumb = [
        {
            label: '404',
            href: '/404',
        },
        {
            label: 'Playground',
            href: '/404/playground',
        },
    ];

    const dropdown = [
        {
            label: 'Relevansi',
            onClick: () => {
                console.log('ini func relevansi');
            },
        },
        {
            label: 'Populer',
            onClick: () => {
                console.log('ini func populer');
            },
        },
        {
            label: 'Pilihan',
            onClick: () => {
                console.log('ini func pilihan');
            },
        },
    ];

    return (
        <div className='flex flex-col space-y-6'>
            <div className='container-components-playground'>
                <span className='text-xl text-white'>Components Accordion</span>
                <Accordion title='Accordion' className='text-white text-base' classNameContent='text-white bg-white/30 p-3 rounded mt-3'>
                    <p>Content Accordion</p>
                </Accordion>
            </div>

            <div className='container-components-playground'>
                <span className='text-xl text-white'>Components Avatar</span>
                <Avatar src='/avatar.svg' name='Hatta' />
                <Avatar src='/avatar.svg' name='Hatta' variant='reverse' />
            </div>

            <div className='container-components-playground'>
                <span className='text-xl text-white'>Components Breadcrumb</span>
                <Breadcrumb routes={breadcumb} />
            </div>

            <div className='container-components-playground'>
                <span className='text-xl text-white'>Components Button</span>
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

                <Accordion className='text-white text-base' title='Button Small'>
                    <div className='flex flex-col max-w-sm space-y-4 my-4'>
                        <Button onClick={() => {}} label='Primary' size='sm' />
                        <Button onClick={() => {}} label='Primary Loading' size='sm' loading />
                        <Button onClick={() => {}} label='Primary Disabled' size='sm' disabled />
                    </div>
                </Accordion>

                <Accordion className='text-white text-base' title='Button Outline'>
                    <div className='flex flex-col max-w-sm space-y-4 my-4'>
                        <Button onClick={() => {}} label='Outline' className='w-full' outline />
                        <Button onClick={() => {}} label='Outline Loading' className='w-full' outline loading />
                        <Button onClick={() => {}} label='Outline Disabled' className='w-full' outline disabled />
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
                <span className='text-xl text-white'>Components Card</span>
                <Card className='text-white'>Card</Card>
            </div>

            <div className='container-components-playground'>
                <span className='text-xl text-white'>Components Dropdown</span>
                <div className='grid grid-cols-2 gap-x-2'>
                    <Dropdown label='Dropdown' data={dropdown} onChange={(val) => val.onClick()} />
                    <Dropdown data={dropdown} onChange={(val) => val.onClick()}>
                        <Avatar src='/avatar.svg' name='Hatta' />
                    </Dropdown>
                </div>
            </div>

            <div className='container-components-playground'>
                <span className='text-xl text-white'>Components Heading Link</span>
                <div className='grid grid-cols-2 gap-4'>
                    <HeadingLink title='Data Educations' />
                    <HeadingLink title='Add Educations' withBack={true} label={<Breadcrumb routes={breadcumb} />} />
                    <HeadingLink title='Edit Educations' withBack={true} />
                    <HeadingLink title='Data Educations' withBack={true} />
                </div>
            </div>

            <div className='container-components-playground'>
                <span className='text-xl text-white'>Components List Form</span>
                <ListForm title='First Name' label='Hatta' />
                <ListForm title='Last Name' label='Alfaritzy' />
            </div>

            <div className='container-components-playground'>
                <span className='text-xl text-white'>Components Logo</span>
                <Logo />
            </div>

            <div className='container-components-playground'>
                <span className='text-xl text-white'>Components Message</span>
                <Message type='success' label='Message Success' />
                <Message type='info' label='Message Info' />
                <Message type='warning' label='Message Warning' />
                <Message type='error' label='Message Error' />
                <Message type='alert' label='Message Alert' />
            </div>

            <div className='container-components-playground'>
                <span className='text-xl text-white'>Components Tags</span>
                <Tags label='404' className='max-w-fit' />
                <Tags label='404' variant='hashtags' href='/404' />
            </div>
        </div>
    );
}
