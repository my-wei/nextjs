/*
 * @Author: gq
 * @Date: 2022-02-12 10:41:01
 * @LastEditors: gq
 * @LastEditTime: 2022-02-13 01:34:34
 * @Description: file content
 */
import Head from 'next/head'
import Link from 'next/link'
import demo from '../styles/demo.module.scss'

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_ENV)
  return (
    <div className={demo.demo}>
      <Link href={{ pathname: '/demo', query: { id: 2 } }}> directives </Link>
      {/* <Link href="/demo"> 123 </Link> */}
    </div>
  )
}
