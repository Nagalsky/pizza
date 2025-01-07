import { Header } from '@/components/common'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Next Pizza | Главная',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link data-rh='true' rel='icon' href='/logo.png' />
			</head>
			<body className={`${nunito.className} antialiased`}>
				<Header />
				<main className='min-h-dvh'>{children}</main>
			</body>
		</html>
	)
}
