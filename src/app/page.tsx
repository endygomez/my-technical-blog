import { getSortedPostsData } from "@/lib/posts";
import Date from "@/components/Date";
import Link from "next/link";
import Image from "next/image";

type AllPostsData = {
  date: string;
  title: string;
  image: string;
  id: string;
  content: string;
}[];

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <>
      <section className="bg-white dark:bg-gray-900 col-start-2 col-span-10 text-gray-600 flex w-full justify-center">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Acelero tus procesos de TI con soluciones DevOps eficientes
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Impulso el time-to-market empresarial optimizando tu desarrollo de
              software.
            </p>
            <Link
              href="#my-articles"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Mis Artículos
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://calendly.com/endygomez_dev/desafios_devops"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              target="_blank"
            >
              Conversemos
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              priority
              src="/images/my-profile.png"
              height={500}
              width={500}
              alt="Foto de Perfil"
            />
          </div>
        </div>
      </section>

      <section className="col-start-2 col-span-10 text-gray-600 w-full h-full">
        <div className="text-left">
          <div className="font-semibold text-gray-900 leading-none">
            <div className="text-left text-2xl mt-12" id="my-articles">
              Mis Artículos
            </div>
            <div className="text-left md:text-xl grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-7 gap-12">
              {allPostsData.map(({ id, date, title, image, content }) => (
                <div
                  key={id}
                  className="bg-white shadow-md border border-gray-200 rounded-lg max-w mb-5"
                >
                  <Link href={`/posts/${id}`}>
                    <Image
                      height={350}
                      width={350}
                      priority
                      className="rounded-t-lg object-cover h-48 w-full"
                      src={`/images/posts/${image}`}
                      alt="DevOps, un acelerador de la vida cotidiana"
                    />
                  </Link>
                  <div className="p-5">
                    <Link href={`/posts/${id}`}>
                      <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                        {title}
                      </h5>
                      <small className="text-gray-500">
                        <Date dateString={date} />
                      </small>
                    </Link>
                    <p className="font-normal text-gray-700 mb-3">{content}</p>
                    <Link
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center items-start grid w-full h-full"
                      href={`/posts/${id}`}
                    >
                      Leer más
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
