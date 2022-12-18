export default function useSidebar() {
    const openSidebar = () => {
        document.getElementById('layout-default').classList.add('sidebar-expanded');
    };

    const closeSidebar = () => {
        document.getElementById('layout-default').classList.remove('sidebar-expanded');
    };

    const toggleSidebar = () => {
        document.getElementById('layout-default').classList.toggle('sidebar-expanded');
    };

    return {
        openSidebar,
        closeSidebar,
        toggleSidebar,
    };
}
