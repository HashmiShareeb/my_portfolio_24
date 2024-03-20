import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section id="about" className="py-10 h-screen grid place-items-center">
        <div className="mx-auto px-6 py-3 max-w-2xl">
          <div className="mx-auto mb-8 lg:mt-10 mt-20 h-56 w-56 overflow-hidden rounded-full bg-gradient-to-tr from-teal-300 to-blue-500">
            <Image width={500} height={500} src="" alt="Shareeb Hashmi" />
          </div>
          <div className="text-center">
            <h1 className="lg:text-7xl md:text-5xl text-4xl text-nowrap font-extrabold leading-10 tracking-tight">
              Shareeb Hashmi
            </h1>
            <h2 className="mt-4 text-2xl lg:text-6xl font-bold text-center bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent">
              Web developer
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              I&apos;m a graduate in MIT currently studying{' '}
              <Link
                href="https://mct.be/"
                target="_blank"
                className="text-teal-500 hover:underline hover:text-teal-400 transition-colors"
              >
                MCT-Next Web Developer{' '}
              </Link>
              in Howest in Belgium. I have a passion for web development and
              love to create new things. I am a fast learner and always eager to
              something new or face challanges.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href={''}
              className="transform rounded-md  bg-teal-800 px-5 py-3 font-medium transition-colors hover:bg-teal-700 transition-colors duration-200"
            >
              {' '}
              More about me{' '}
            </Link>

            <Link href="#" className="group text-white transition duration-300">
              Download Resume
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
            </Link>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="grid place-items-center py-10 h-screen">
          <h1 className="text-5xl font-bold">Projects</h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio,
          hic? Vero quo quos architecto aperiam alias quaerat, quia ab veniam!
          Tempora qui nemo quae ipsa? Hic nesciunt neque tenetur deserunt! Unde
          ea sit ad rem magnam natus, nam dolores voluptas corrupti, laborum
          deserunt facilis quisquam. Aliquam, accusamus voluptates! Ipsam
          architecto nemo deleniti corrupti perspiciatis dignissimos dolor enim
          molestiae rerum? Ullam? Enim velit consectetur et eveniet qui deserunt
          eligendi odit sit officiis, laboriosam, fugiat eaque expedita
          voluptatibus possimus inventore a iure vitae ipsum corrupti
          doloremque, veritatis incidunt! Earum, autem temporibus! Facere! Nobis
          deleniti cupiditate veniam corrupti aliquam ratione fuga adipisci
          reprehenderit id distinctio unde placeat accusamus at quasi non nihil
          itaque dolorem quidem dicta culpa aliquid, error, tempore suscipit!
          Laudantium, pariatur? Minus a voluptatum voluptatibus temporibus
          doloribus omnis dolorum adipisci eum nemo aut iste nihil non possimus
          error iure ducimus itaque sed obcaecati unde ratione, ullam ad. Id,
          corporis ullam. Architecto. Quod fugiat necessitatibus vel, itaque
          consequuntur asperiores soluta ea nostrum, doloribus alias dolor rerum
          ullam nam optio voluptate obcaecati sequi quas totam? Architecto,
          totam et quis iste sapiente temporibus veritatis! Quos reprehenderit
          dignissimos ex autem suscipit, molestiae, aliquid vitae vero et,
          dolorem tempora necessitatibus. Eum excepturi nesciunt minima
          voluptatem inventore repudiandae, facilis modi nisi similique, odio
          expedita placeat atque. Quis. Quis consequuntur quae voluptatibus
          minima magnam odio aliquam at consequatur. Porro, itaque! Iste
          mollitia qui numquam sit expedita ad officiis atque, ut pariatur illo
          voluptatibus beatae, nulla alias aspernatur eligendi! Quas libero,
          dicta veniam eos excepturi pariatur voluptate aliquam quibusdam animi
          numquam est suscipit nobis amet illum cumque a maxime laboriosam,
          explicabo magnam fugiat modi. Perspiciatis nulla delectus quod quas!
          Quos odit quaerat eligendi, veritatis nulla sunt omnis odio dolorem
          distinctio iure accusamus, eaque iusto, nesciunt rerum! Fugiat
          blanditiis magnam ad minima quos consequuntur delectus illum! Soluta
          nesciunt repellendus voluptatibus. Laudantium iure numquam aperiam
          voluptatum obcaecati autem molestiae odio in quam. Aliquid, vero!
          Eveniet fuga, libero asperiores, porro quod, voluptatibus suscipit nam
          pariatur vitae sapiente voluptatum excepturi voluptas! Et, voluptas.
          Inventore, quod sed ipsum nostrum atque numquam, beatae harum
          perspiciatis obcaecati, fugiat at esse consectetur. Nihil culpa ipsam
          vero quisquam aut est, earum quam cupiditate. Quo consequatur sed
          optio. Ratione! Quaerat dolorem deserunt eius reprehenderit aliquid
          amet maiores illo dignissimos possimus veritatis fuga nihil excepturi
          suscipit exercitationem ad esse, a at unde porro culpa, debitis
          dolorum reiciendis iste. Reprehenderit, cum! Illo blanditiis eius,
          optio voluptas laborum ipsam commodi maxime. Tempore sed odit, maiores
          cum minima molestias quod. Quisquam eveniet perspiciatis, ratione
          corrupti blanditiis autem facilis! Temporibus placeat quisquam
          doloremque numquam. Quae explicabo aperiam maiores provident
          aspernatur! Odio deleniti sit alias omnis eaque aspernatur eius, nobis
          dolorum aut unde minima provident, praesentium pariatur, delectus eum
          neque atque veniam incidunt! Cupiditate, obcaecati. Nobis earum dolore
          maiores atque doloribus numquam quam nostrum quibusdam aliquid, magni
          consequuntur optio ut? Nostrum eligendi tempora, laudantium iusto
          neque, quasi maxime libero, soluta nihil obcaecati dicta aspernatur
          fuga? Doloremque doloribus repudiandae modi nulla. Nobis, voluptate
          architecto, nihil quasi assumenda saepe tenetur similique dolores
          cumque dolor autem nam deserunt. Neque sit quae voluptatem laborum
          consectetur facilis iusto eligendi eos! Possimus, sit facilis officia
          minus placeat neque, voluptate in aliquid amet aperiam sint earum
          animi! Culpa, voluptas quibusdam? Nesciunt tempore, dolorem placeat
          officiis soluta eum dicta esse iure id eius? Sit saepe quasi veniam!
          Tenetur corporis unde perferendis? Sint cupiditate error, tenetur
          blanditiis veritatis deleniti sapiente, exercitationem quod quos quas
          distinctio. Aliquam necessitatibus eligendi quos obcaecati debitis
          eveniet explicabo suscipit. Recusandae et veritatis repellat
          dignissimos ipsam aut perferendis eius nobis voluptas natus, maxime
          fugit deserunt odio quidem reiciendis distinctio. Voluptas cum iusto
          non suscipit error ipsa sit, doloribus ea tempore?
        </div>
      </section>
    </main>
  )
}
