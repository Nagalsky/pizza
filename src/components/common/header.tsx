'use client'

import { cn } from '@/lib/utils'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, Separator } from '../ui'

interface Props {
	hasSearch?: boolean
	hasCart?: boolean
	className?: string
}

export const Header: React.FC<Props> = ({
	hasSearch = true,
	hasCart = true,
	className,
}) => {
	return (
		<header className={cn('border-b', className)}>
			<div className='flex items-center justify-between py-8 container'>
				<Link href='/' className='flex items-center gap-4'>
					<Image src='/logo.png' alt='Logo' width={35} height={35} />
					<div>
						<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>
							вкусней уже некуда
						</p>
					</div>
				</Link>

				<div className='flex items-center gap-3'>
					<Button variant={'outline'} className='flex items-centetr gap-1'>
						<User />
						Войти
					</Button>

					<Button className='group relative'>
						<b>520$</b>
						<Separator orientation='vertical' />
						<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
							<ShoppingCart strokeWidth={2} />
							<b>3</b>
						</div>
						<ArrowRight className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
					</Button>
				</div>
			</div>
		</header>
	)
}
