import Image from 'next/image'
import { client } from '@/lib/sanityClient'
import { describe } from 'node:test'
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../sanity/lib/image'; 
import ProductCart from './ProductCart';

export const getProductionData = async () => {
  const res = await client.fetch('*[_type=="product"]{price,_id,title,image, category -> { name }}');
  return res
}

interface IProduct {
  title: string,
  _id: string,
  description: string
  image: IImage,
  price: number,
  category:{
    name:string
  }
}

export default async function Home() {

  const data:IProduct[] = await getProductionData()
  console.log(data)

  return (
   <div className='grid grid-cols-[auto,auto,auto] justify-center gap-x-10'>

    {data.map((item) => (
      <div>
         <ProductCart item={item}/>
      </div>
    ))}

   </div>
  )
}
