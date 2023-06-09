import { GetStaticProps } from 'next';
import React from 'react'
import PortableText from 'react-portable-text'
import { sanityClient, urlFor } from '../../lib/sanity';

import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';



interface Props {
    post: Post;
}

type Post = {
    _id : string;
    _createdAt: string;
    title: string;
    slug: {
        current: string;
    };
    publishedAt: string;
    body: [object];
    references: ArticleReferences;
    descriptionSEO: string;
    
    
}


type ArticleReference = {
  title: string;
  publishedAt: string;
  slug: {
    current: string;
  }
};

type ArticleReferences = Array<ArticleReference>;



const Page = ({post}: Props) => {
    
  return (
    <div>
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={`${post.descriptionSEO}`} />
          
        </Head>

        <Navbar />
    
    <main className='jakarta max-w-3xl mx-auto p-5'>
        <h1 className='text-center text-3xl md:text-4xl mt-10 mb-3 deep-gold-color tracking-widest'>{post.title}</h1>
        
        <div className='mt-10 portable-text leading-7 text-lg'>
            <PortableText
             dataset= {process.env.NEXT_PUBLIC_SANITY_DATASET}
             projectId= {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
             content={post.body}
             serializers={{
                 h1: (props: any) => (
                     <h1 className=' text-center text-3xl md:text-4xl my-5 tracking-widest' {...props} />
                 ),
                 h2: (props: any) => (
                    <h2 className='text-center text-2xl md:text-3xl mt-12 mb-5 tracking-widest' {...props} />
                ),
                li: ({children}: any) => (
                    <li className='ml-4 list-disc'>{children}</li>
                ),
                link: ({href, children}: any) => (
                    <a href={href} className='text-blue-500 hover:underline'>{children}</a>
                ),

             }}
            />
        </div>
        
    </main>

    <Footer />
    
    
    </div>
  )
}


export async function getStaticPaths() {
    const query = 
    `*[_type == 'post']{
        _id,
        slug  {
        current
      }
      }`;
      const posts = await sanityClient.fetch(query);

      const paths = posts.map((post : Post) => ({
        params: {
            slug: post.slug.current
        }
      }))
    return {
      paths,
      fallback: 'blocking' // false or 'blocking'
    };
  }

export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = `
    *[_type == 'post' && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        slug,
        body,
        descriptionSEO,
        "references": references[]->{
        title,
        publishedAt,
        "slug": slug.current,
      },
      }
    `
    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    })
    if(!post){
        return {
            notFound: true
        }
    }
    return {
        props: {
            post,
        },
        revalidate: 60,
    }
}

export default Page