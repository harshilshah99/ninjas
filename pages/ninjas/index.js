import Link from "next/link";
import Head from 'next/head'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { ninjas: data }
    }
  }
  
  const Ninjas = ({ ninjas }) => {
    console.log(ninjas)
  
    return (
      <>
      <Head>
        <title>NinjaList | Ninjas</title>
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map(ninja => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            
              <h5>{ ninja.name }</h5>
            
          </Link>
        ))}
      </div>
      </>
    );
  }
   
  export default Ninjas;