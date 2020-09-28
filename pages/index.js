import { request } from 'lib/graphQLClient.ts';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const TestQuery = `
  query TestQuery {
    querycustomer {
      location
      name
    }
  }
`;

export async function getStaticProps() {
  const data = await request({
    query: TestQuery
  })

  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Dis my Data:
        <ul>
          {
            data.querycustomer.map((customer) => (
                <li key={customer.name}>Name: {customer.name} Location: {customer.location ? customer.location : '???'}</li>
            ))
          }
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
