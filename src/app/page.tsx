import { getSortedPostsData } from "@/lib/posts";
import Date from "@/components/Date";
import Link from "next/link";
import Image from "next/image";

type AllPostsData = {
  date: string;
  title: string;
  id: string;
}[];

// export const metadata = {
//   title: '',
//   description: "Este es un sitio web de muestra creado con Next.js",
// };

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
                alt=""
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
            <div className="text-left text-2xl">Mis Artículos</div>
            <div className=" text-left md:text-xl">
              <ul className="w-full">
                {allPostsData.map(({ id, date, title }) => (
                  <li key={id} className="my-7">
                    <div className="font-medium mb-1">
                      <Link
                        href={`/posts/${id}`}
                        className="text-blue-500 hover:underline text-2xl"
                      >
                        {title}
                      </Link>
                    </div>
                    <small className="text-gray-500">
                      <Date dateString={date} />
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
