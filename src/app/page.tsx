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
      <section className="col-start-2 col-span-10 text-gray-600 flex pt-14 w-full justify-center">
        <div className="text-left">
          <div className="text-6xl font-semibold text-gray-900 leading-none">
            <div className="w-full flex justify-center">
              <Image
                priority
                src="/images/my-profile.jpg"
                className="rounded-full"
                height={170}
                width={170}
                alt="Foto de Perfil"
              />
            </div>
            <div className="text-center sm:text-xl pt-6">Endy Gómez</div>
          </div>
          <div className="mt-6 lg:text-3xl md:text-5xl font-light text-true-gray-500 antialiased tracking-wider">
            <b>Experto DevOps</b> especializado en automatización de procesos de{" "}
            <i>construcción</i>, <i>entrega</i> y <i>despliegue</i> de software
            para <b>PYMES</b> y <b>GRANDES EMPRESAS</b>. Encuéntrame en{" "}
            <Link
              href="https://www.linkedin.com/in/gomezendy/"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              LinkedIn
            </Link>
            .
            <button
              type="button"
              role="button"
              aria-label="Mis artículos"
              className="flex items-center justify-center w-12 h-12 pt-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-green-50 transition duration-300 ease-in-out cursor-pointer"
            >
              <Link href={"#my-articles"}>
                <svg
                  className="w-10 h-10 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section className="col-start-2 col-span-10 text-gray-600 w-full h-full">
        <div className="text-left">
          <div className="font-semibold text-gray-900 leading-none">
            <div className="text-left text-2xl mt-12">Mis Artículos</div>
            <div className="text-left md:text-xl grid grid-cols-3 my-7">
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
                      className="rounded-t-lg object-cover w-full"
                      src={`/images/posts/${image}`}
                      alt="DevOps, un acelerador de la vida cotidiana"
                    />
                  </Link>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                        {title}
                      </h5>
                      <small className="text-gray-500">
                        <Date dateString={date} />
                      </small>
                    </a>
                    <p className="font-normal text-gray-700 mb-3">{content}</p>
                    <Link
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
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
