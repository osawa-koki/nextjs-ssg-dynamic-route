import React from 'react'
import Link from 'next/link'

import { Button } from 'react-bootstrap'

interface Props {
  params: { name: string }
}

export default async function NamePage({ params }: Props): Promise<React.JSX.Element> {
  const curr = Number(params.name)
  const prev = curr === 1 ? null : curr - 1
  const next = curr === 1000 ? null : curr + 1

  return (
    <>
      <h1>{params.name}</h1>
      <p>Hello World!!!</p>
      {
        prev != null && (
          <Button variant='primary' className='me-3'>
            <Link href={`/dynamic-routes/${prev}`} className='text-white text-decoration-none'>
              Prev ({prev})
            </Link>
          </Button>
        )
      }
      {
        next != null && (
          <Button variant='primary' className='me-3'>
            <Link href={`/dynamic-routes/${next}`} className='text-white text-decoration-none'>
              Prev ({next})
            </Link>
          </Button>
        )
      }
    </>
  )
}

export function generateStaticParams() {
  const names = Array.from({ length: 1000 }, (_, i) => i + 1).map((num) => num.toString())

  return names.map((name) => ({
    name: name,
  }))
}
