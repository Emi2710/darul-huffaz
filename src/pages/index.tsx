import Layout from '@/components/layout/Layout'
import Navbar from '@/components/layout/Navbar'
import Header from '@/components/main/Header'
import About from '@/components/main/About'
import School from '@/components/main/School'
import Online from '@/components/main/Online'
import Quote from '@/components/main/Quote'
import Video from '@/components/main/Video'
import Gallery from '@/components/main/Gallery'
import Graduates from '@/components/main/Graduates'
import Inspiration from '@/components/main/Inspiration'
import Timetable from '@/components/main/Timetable'
import Info from '@/components/main/Info'
import Questions from '@/components/main/Questions'
import Contact from '@/components/main/Contact'


export default function Home() {
  return (
    <Layout>

      <Header />
      <About />
      <School />
      <Online />
      <Quote />
      <Video />
      <Gallery />
      <Graduates />
      <Inspiration />
      <Timetable />
      <Info />
      <Questions />
      <Contact />

    </Layout>
  )
}
