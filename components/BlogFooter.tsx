import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react'
import React from 'react'

const navigation = {
  general: [
    { name: 'Home', href: 'https://www.stockpile.so/' },
    { name: 'Explore', href: 'https://www.stockpile.so/explore' },
    { name: 'Projects', href: 'https://www.stockpile.so/projects' },
    { name: 'Grants', href: 'https://www.stockpile.so/rounds' },
  ],
  support: [
    { name: 'Documentation', href: 'https://docs.stockpile.pro/' },
    { name: 'FAQ', href: 'https://www.stockpile.so/faq' },
  ],
  company: [
    { name: 'About', href: 'https://www.stockpile.so/about' },
    { name: 'Blog', href: 'https://www.stockpile.so/blog' },
    { name: 'Mission', href: 'https://www.stockpile.so/mission' },
    { name: 'Partners', href: 'https://www.stockpile.so/#partners' },
  ],
  legal: [
    { name: 'Privacy', href: 'https://www.stockpile.so/privacy-policy' },
    { name: 'Terms', href: 'https://www.stockpile.so/terms-of-service' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/GoStockpile',
      icon: IconBrandTwitter,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/StockpileLabs',
      icon: IconBrandGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/gostockpile/',
      icon: IconBrandLinkedin,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img className="h-7" src="/wordlogo.svg" alt="Stockpile" />
            <p className="font-poppins text-sm leading-6 text-zinc-300">
              Community dervied funding for the open internet.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-poppins text-zinc-500 hover:text-zinc-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-poppins text-sm font-semibold leading-6 text-white">
                  General
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.general.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="font-poppins text-sm leading-6 text-zinc-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-poppins text-sm font-semibold leading-6 text-white">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="font-poppins text-sm leading-6 text-zinc-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-poppins text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="font-poppins text-sm leading-6 text-zinc-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-poppins text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="font-poppins text-sm leading-6 text-zinc-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="font-poppins text-xs leading-5 text-zinc-400">
            &copy; 2023 Stockpile Labs, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
