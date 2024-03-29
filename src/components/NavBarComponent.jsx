import { Avatar, Dropdown, Navbar } from 'flowbite-react';
const Product = () =>{
    return(
        <Navbar fluid rounded className="bg-gray-800">
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Flowbite React</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#" className="text-white">About</Navbar.Link>
                <Navbar.Link href="#" className="text-white">Services</Navbar.Link>
                <Navbar.Link href="#" className="text-white">Pricing</Navbar.Link>
                <Navbar.Link href="#" className="text-white">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Product;