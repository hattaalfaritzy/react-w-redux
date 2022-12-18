import { Lists, AddList, EditList, DetailList } from '../../pages';

const lists = [
    { path: 'lists', element: <Lists /> },
    { path: 'lists/:id', element: <DetailList /> },
    { path: 'lists/add', element: <AddList /> },
    { path: 'lists/edit/:id', element: <EditList /> },
];

export default lists;
