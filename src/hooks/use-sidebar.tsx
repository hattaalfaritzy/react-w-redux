export default function useSidebar() {
    const openSidebar = () => {
        (document.getElementById('layout-default') as HTMLElement).classList.add('sidebar-expanded');
    };

    const closeSidebar = () => {
        (document.getElementById('layout-default') as HTMLElement).classList.remove('sidebar-expanded');
    };

    const toggleSidebar = () => {
        (document.getElementById('layout-default') as HTMLElement).classList.toggle('sidebar-expanded');
    };

    return {
        openSidebar,
        closeSidebar,
        toggleSidebar,
    };
}
