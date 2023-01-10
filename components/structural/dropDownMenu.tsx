import { Menu } from '@headlessui/react'
import Link from 'next/link'

export default function DropDownMenu() {
  return (
    <Menu>
      <Menu.Button>Menu</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${active && 'bg-blue-500'}`}
              href="/#about"
            >
              About
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${active && 'bg-blue-500'}`}
              href="/#skills"
            >
              Skills
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${active && 'bg-blue-500'}`}
              href="/#contact"
            >
              Contact
            </Link>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Blog (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}