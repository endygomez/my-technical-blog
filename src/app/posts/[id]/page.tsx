import Date from "@/components/Date";
import { SharedSocialMedia } from "@/components/SharedSocialMedia";

import { getPostData } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
type Params = {
  id: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  image: string;
  keywords: string[];
  contentHtml: string;
};

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title,
    keywords: postData.keywords,
  };
}

// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return (
    <div className="col-start-2 col-span-10 text-gray-600 flex w-full justify-center">
      <article className="text-gray-600 w-full justify-center prose lg:prose-xl">
        <div className="text-left w-full">
          {/* Post Title */}
          <h1 className="font-extrabold text-4xl mb-1">{postData.title}</h1>
          <Image
            priority
            src={`/images/posts/${postData.image}`}
            className="rounded-lg object-cover h-48 w-full mb-0 pb-2"
            height={600}
            width={600}
            alt="DevOps, un acelerador de la vida cotidiana"
          />
          <div className="text-gray-500 font-medium text-2xl mb-1 grid grid-cols-2 justify-between">
            <span className="text-sm flex align-middle h-full items-center">
              <Date dateString={postData.date} />
            </span>
            <div className="flex justify-end align-middle h-full items-center">
              <SharedSocialMedia
                articleUrl={`https://endygomez.com/posts/${params.id}`}
              />
            </div>
          </div>
          {/* Post Content */}
          <div
            className="text-gray-600 w-full"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
        <div className="flex text-gray-500 font-medium text-2xl">
          <Link href="/" className="w-full justify-start text-blue-500">
            ← Volver al inicio
          </Link>
          <SharedSocialMedia
            className="w-full flex justify-end"
            articleUrl={`https://endygomez.com/posts/${params.id}`}
          />
        </div>
      </article>
    </div>
  );
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/
