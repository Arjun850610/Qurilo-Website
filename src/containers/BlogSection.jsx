
import Title from '../titles/Title'
import { blogData } from '../data/crm'
import BlogCards from '../cards/BlogCards'
import ContactButton from '../buttons/ContactButton'

const Blogs = () => {
  return (
    <div className='my-10 flex items-center flex-col gap-10 lg:py-20'>
      <Title heading="Blog Posts" subheading="Want to learn about technological stuff? Go ahead and educate yourself."/>
       <div className='grid mt-8 px-6 md:px-10 xl:px-20 mx-auto lg:grid-cols-2 grid-cols-1 gap-5'>
        <div className=' '>
            <BlogCards data={blogData[0]} type="bigCard"/>
        </div>
        <div className=' lg:flex flex-col gap-y-[2rem] hidden  '>
            {blogData.slice(1, 3).map((data, index) => (
                <BlogCards key={index} data={data} type="smallCard"/>
            ))}
        </div>
        <div className=' lg:hidden flex flex-col gap-y-5   '>
            {blogData.slice(1, 3).map((data, index) => (
                <BlogCards key={index} data={data} type="bigCard"/>
            ))}
        </div>
       </div>
       <ContactButton text={"View All Posts"} />
</div>
  )
}

export default Blogs