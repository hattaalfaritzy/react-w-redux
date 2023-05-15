import clsx from 'clsx';
import Alert from './icons/alert';
import Bell from './icons/bell';
import CaretDown from './icons/caret-down';
import ChevronDown from './icons/chevron-down';
import ChevronLeft from './icons/chevron-left';
import ChevronRight from './icons/chevron-right';
import ChevronUp from './icons/chevron-up';
import ClaimManagement from './icons/claim-management';
import Clip from './icons/clip';
import Close from './icons/close';
import Dashboard from './icons/dashboard';
import Download from './icons/download';
import Employee from './icons/employee';
import EmployeeRounded from './icons/employee-rounded';
import Enrollment from './icons/enrollment';
import Favorite from './icons/favorite';
import File from './icons/file';
import Menu from './icons/menu';
import Search from './icons/search';
import Wallet from './icons/wallet';

export const icons: any = {
    dashboard: Dashboard,
    employee: Employee,
    'employee-rounded': EmployeeRounded,
    enrollment: Enrollment,
    'claim-management': ClaimManagement,
    search: Search,
    bell: Bell,
    wallet: Wallet,
    menu: Menu,
    'caret-down': CaretDown,
    'chevron-up': ChevronUp,
    'chevron-down': ChevronDown,
    'chevron-left': ChevronLeft,
    'chevron-right': ChevronRight,
    favorite: Favorite,
    alert: Alert,
    clip: Clip,
    download: Download,
    close: Close,
    file: File,
};

export default function Icon({ className, name, ...props }: Props) {
    const Component = icons[name];

    if (!Component) return null;

    return <Component className={clsx(className || 'fill-[#A0A8B6]')} {...props} />;
}

type Props = JSX.IntrinsicElements['svg'] & {
    className?: string;
    name?: any;
};
